import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  askAjRequestSchema,
  askAjStreamEventSchema,
  type AskAjStreamEvent,
} from "@/features/ask-aj/contracts";
import {
  AskAjConfigurationError,
  getAskAjRuntimeConfig,
  type AskAjRuntimeConfig,
} from "@/server/ask-aj/env";
import { generateAskAjText } from "@/server/ask-aj/generator";
import { AskAjProviderError } from "@/server/ask-aj/openai-generator";
import { recordAvailabilityOutcome } from "@/server/ask-aj/availability";
import { logAskAjEvent } from "@/server/ask-aj/logging";
import {
  AskAjRequestGuardError,
  claimAskAjRequest,
  enforceAskAjRateLimit,
  getAskAjClientKey,
  readLimitedJsonRequest,
  validateAskAjOrigin,
} from "@/server/ask-aj/request-guards";

const headers = {
  "Content-Type": "application/x-ndjson; charset=utf-8",
  "Cache-Control": "no-cache, no-transform",
  "X-Content-Type-Options": "nosniff",
};

export const Route = createFileRoute("/api/ask-aj")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const conversationId = crypto.randomUUID();
        const messageId = crypto.randomUUID();

        try {
          const rawPayload = await readLimitedJsonRequest(request);
          const payload = askAjRequestSchema.parse(rawPayload);
          const stableConversationId = payload.conversationId ?? conversationId;
          const config = getAskAjRuntimeConfig();
          validateAskAjOrigin(request, config);
          const clientKey = getAskAjClientKey(request);
          enforceAskAjRateLimit(clientKey);
          const releaseClaim = claimAskAjRequest(clientKey, payload.question);
          recordAvailabilityOutcome("valid_request");

          return new Response(
            createAskAjStream(
              payload.question,
              stableConversationId,
              messageId,
              config,
              request.signal,
              releaseClaim,
            ),
            {
              headers,
            },
          );
        } catch (error) {
          if (error instanceof AskAjRequestGuardError) {
            logAskAjEvent("ask_aj.request_rejected", { status: error.status });
            return new Response(
              createErrorStream(conversationId, messageId, error.userMessage),
              {
                status: error.status,
                headers,
              },
            );
          }

          const message =
            error instanceof AskAjConfigurationError
              ? "Ask A.J. is temporarily unavailable while its server configuration is completed."
              : "Ask A.J. could not read that question.";
          return new Response(
            createErrorStream(conversationId, messageId, message),
            {
              status: error instanceof AskAjConfigurationError ? 503 : 400,
              headers,
            },
          );
        }
      },
    },
  },
});

function createAskAjStream(
  question: string,
  conversationId: string,
  messageId: string,
  config: AskAjRuntimeConfig,
  requestSignal: AbortSignal,
  releaseClaim: () => void,
) {
  const encoder = new TextEncoder();
  const abortController = new AbortController();
  const abort = () => abortController.abort();

  if (requestSignal.aborted) abort();
  else requestSignal.addEventListener("abort", abort, { once: true });

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (event: AskAjStreamEvent) => {
        if (abortController.signal.aborted) return false;
        const checked = askAjStreamEventSchema.parse(event);
        const line = encoder.encode(`${JSON.stringify(checked)}\n`);
        controller.enqueue(line);
        return true;
      };

      try {
        if (
          !emit({ type: "conversation.started", conversationId, messageId }) ||
          !emit({
            type: "agent.status",
            conversationId,
            messageId,
            status: "thinking",
            label: "Reading the question",
          }) ||
          !emit({
            type: "agent.status",
            conversationId,
            messageId,
            status: "writing",
            label: "Writing a concise response",
          })
        ) {
          return;
        }

        for await (const delta of generateAskAjText(
          question,
          config,
          abortController.signal,
        )) {
          if (
            !emit({
              type: "message.delta",
              conversationId,
              messageId,
              delta,
            })
          ) {
            return;
          }
        }

        emit({ type: "message.completed", conversationId, messageId });
      } catch (error) {
        if (!abortController.signal.aborted) {
          recordAvailabilityOutcome("hard_failure");
          logProviderFailure(error, config);
          emit({
            type: "error",
            conversationId,
            messageId,
            message: getProviderErrorMessage(error),
          });
        }
      } finally {
        requestSignal.removeEventListener("abort", abort);
        releaseClaim();
        controller.close();
      }
    },
    cancel() {
      abortController.abort();
      requestSignal.removeEventListener("abort", abort);
      releaseClaim();
    },
  });
}

function getProviderErrorMessage(error: unknown) {
  if (error instanceof AskAjProviderError && error.category === "timeout") {
    return "The request took too long. Please try again.";
  }

  return "Ask A.J. is temporarily unavailable. Please try again shortly.";
}

function createErrorStream(
  conversationId: string,
  messageId: string,
  message: string,
) {
  const encoder = new TextEncoder();
  const event = askAjStreamEventSchema.parse({
    type: "error",
    conversationId,
    messageId,
    message,
  });
  return encoder.encode(`${JSON.stringify(event)}\n`);
}

function logProviderFailure(error: unknown, config: AskAjRuntimeConfig) {
  if (error instanceof AskAjProviderError) {
    console.error("Ask A.J. provider request failed", {
      status: error.status,
      category: error.category,
      name: error.providerErrorName ?? error.name,
      provider: error.provider,
      model: error.model,
      outputStarted: error.outputStarted,
      requestId: error.requestId,
    });
    return;
  }

  console.error("Ask A.J. provider request failed", {
    category: "unexpected",
    name: error instanceof Error ? error.name : "UnknownError",
    provider: config.provider,
    model: config.model,
  });
}
