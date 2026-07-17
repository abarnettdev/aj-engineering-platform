import OpenAI from "openai";
import type {
  ResponseCreateParamsStreaming,
  ResponseStreamEvent,
} from "openai/resources/responses/responses";
import { askAjInstructions } from "@/server/ask-aj/approved-context";
import type { AskAjRuntimeConfig } from "@/server/ask-aj/env";
import { logAskAjEvent } from "@/server/ask-aj/logging";

type OpenAiRuntimeConfig = Extract<
  AskAjRuntimeConfig,
  { provider: "openai"; useMockResponses: false }
>;

type OpenAiClient = {
  responses: {
    create: (
      body: ResponseCreateParamsStreaming,
      options: { signal: AbortSignal },
    ) => Promise<AsyncIterable<ResponseStreamEvent>>;
  };
};

export type AskAjTokenUsage = {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
};

type OpenAiGenerationOptions = {
  onUsage?: (usage: AskAjTokenUsage) => void;
  retryTransientFailures: boolean;
  timeoutMs?: number;
};

export type AskAjProviderErrorCategory =
  | "authentication"
  | "permission"
  | "rate_limited"
  | "quota"
  | "invalid_request"
  | "unavailable"
  | "timeout"
  | "aborted"
  | "refusal"
  | "incomplete"
  | "stream"
  | "unexpected";

export class AskAjProviderError extends Error {
  readonly category: AskAjProviderErrorCategory;
  readonly provider = "openai";
  readonly model: string;
  readonly outputStarted: boolean;
  readonly status?: number;
  readonly providerErrorName?: string;
  readonly requestId?: string;

  constructor({
    category,
    message,
    model,
    outputStarted = false,
    status,
    providerErrorName,
    requestId,
  }: {
    category: AskAjProviderErrorCategory;
    message: string;
    model: string;
    outputStarted?: boolean;
    status?: number;
    providerErrorName?: string;
    requestId?: string;
  }) {
    super(message);
    this.name = "AskAjProviderError";
    this.category = category;
    this.model = model;
    this.outputStarted = outputStarted;
    this.status = status;
    this.providerErrorName = providerErrorName;
    this.requestId = requestId;
  }
}

export const askAjMaxOutputTokens = 500;
const primaryRequestTimeoutMs = 9_000;
const fallbackRequestTimeoutMs = 5_000;
const retryDelaysMs = [500, 1_250];
const retryableStatuses = new Set([429, 500, 502, 503, 504]);

export async function* generateOpenAiText(
  question: string,
  config: OpenAiRuntimeConfig,
  signal: AbortSignal,
): AsyncGenerator<string> {
  yield* createOpenAiTextGenerator(
    new OpenAI({ apiKey: config.apiKey }),
    question,
    config.model,
    signal,
    { retryTransientFailures: true, timeoutMs: primaryRequestTimeoutMs },
  );
}

export async function* createOpenAiTextGenerator(
  client: OpenAiClient,
  question: string,
  model: string,
  signal: AbortSignal,
  options: OpenAiGenerationOptions = {
    retryTransientFailures: true,
    timeoutMs: primaryRequestTimeoutMs,
  },
): AsyncGenerator<string> {
  const timeoutMs = options.timeoutMs ?? primaryRequestTimeoutMs;

  for (let attempt = 0; ; attempt += 1) {
    const timeoutController = new AbortController();
    const timeoutId = setTimeout(() => timeoutController.abort(), timeoutMs);
    const combinedSignal = combineAbortSignals(
      signal,
      timeoutController.signal,
    );
    let hasYieldedText = false;

    try {
      const response = await client.responses.create(
        {
          model,
          instructions: askAjInstructions,
          input: question,
          max_output_tokens: askAjMaxOutputTokens,
          parallel_tool_calls: false,
          store: false,
          stream: true,
        },
        { signal: combinedSignal },
      );

      for await (const event of response) {
        if (signal.aborted) return;

        switch (event.type) {
          case "response.output_text.delta":
            if (event.delta) {
              hasYieldedText = true;
              yield event.delta;
            }
            break;
          case "response.refusal.delta":
            throw new AskAjProviderError({
              category: "refusal",
              message: "OpenAI refused the request.",
              model,
              outputStarted: hasYieldedText,
            });
          case "response.completed":
            options.onUsage?.(getTokenUsage(event.response.usage ?? null));
            return;
          case "response.failed":
            throw responseEventError("unexpected", model, hasYieldedText);
          case "response.incomplete":
            throw responseEventError("incomplete", model, hasYieldedText);
          case "error":
            throw responseEventError("stream", model, hasYieldedText);
          default:
            break;
        }
      }

      return;
    } catch (error) {
      if (signal.aborted) return;

      const normalized = normalizeOpenAiError(
        error,
        model,
        timeoutController.signal.aborted,
        hasYieldedText,
      );

      if (
        hasYieldedText ||
        !options.retryTransientFailures ||
        !shouldRetry(normalized) ||
        attempt >= retryDelaysMs.length
      ) {
        throw normalized;
      }

      logAskAjEvent("ask_aj.primary_retry", {
        attempt: attempt + 1,
        category: normalized.category,
        model,
        status: normalized.status,
      });

      const shouldContinue = await waitForRetry(signal, retryDelaysMs[attempt]);
      if (!shouldContinue) return;
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

function getTokenUsage(
  usage: {
    input_tokens?: number;
    output_tokens?: number;
    total_tokens?: number;
  } | null,
) {
  return {
    inputTokens: usage?.input_tokens,
    outputTokens: usage?.output_tokens,
    totalTokens: usage?.total_tokens,
  };
}

function responseEventError(
  category: AskAjProviderErrorCategory,
  model: string,
  outputStarted = false,
) {
  return new AskAjProviderError({
    category,
    message: "OpenAI response stream did not complete.",
    model,
    outputStarted,
  });
}

export function createOpenAiClient(apiKey: string): OpenAiClient {
  return new OpenAI({ apiKey });
}

export function canUseOpenAiFallbackModel(error: AskAjProviderError) {
  return (
    !error.outputStarted &&
    (error.category === "rate_limited" ||
      error.category === "unavailable" ||
      error.category === "timeout" ||
      error.category === "stream" ||
      error.category === "unexpected")
  );
}

export function isProviderFailureCircuitEligible(error: AskAjProviderError) {
  return canUseOpenAiFallbackModel(error);
}

export function getFallbackRequestTimeoutMs() {
  return fallbackRequestTimeoutMs;
}

function shouldRetry(error: AskAjProviderError) {
  return (
    error.status != null &&
    retryableStatuses.has(error.status) &&
    error.category !== "quota"
  );
}

function normalizeOpenAiError(
  error: unknown,
  model: string,
  timedOut: boolean,
  outputStarted: boolean,
) {
  if (error instanceof AskAjProviderError) return error;

  if (timedOut) {
    return new AskAjProviderError({
      category: "timeout",
      message: "OpenAI request timed out.",
      model,
      outputStarted,
      providerErrorName: getErrorName(error),
    });
  }

  const status = getErrorStatus(error);
  return new AskAjProviderError({
    category: getErrorCategory(status, error),
    message: "OpenAI request failed.",
    model,
    outputStarted,
    status,
    providerErrorName: getErrorName(error),
    requestId: getRequestId(error),
  });
}

function getErrorCategory(
  status: number | undefined,
  error: unknown,
): AskAjProviderErrorCategory {
  if (isAbortError(error)) return "aborted";
  if (status === 400 || status === 422) return "invalid_request";
  if (status === 401) return "authentication";
  if (status === 403 || status === 404) return "permission";
  if (status === 429) return isQuotaMessage(error) ? "quota" : "rate_limited";
  if (status === 500 || status === 502 || status === 503 || status === 504) {
    return "unavailable";
  }
  return "unexpected";
}

function getErrorStatus(error: unknown) {
  return error != null &&
    typeof error === "object" &&
    "status" in error &&
    typeof error.status === "number"
    ? error.status
    : undefined;
}

function getErrorName(error: unknown) {
  return error instanceof Error ? error.name : "UnknownError";
}

function getRequestId(error: unknown) {
  if (error == null || typeof error !== "object") return undefined;
  if ("request_id" in error && typeof error.request_id === "string") {
    return error.request_id;
  }
  if ("requestID" in error && typeof error.requestID === "string") {
    return error.requestID;
  }
  return undefined;
}

function isAbortError(error: unknown) {
  return (
    error instanceof DOMException ||
    (error instanceof Error && error.name === "AbortError")
  );
}

function isQuotaMessage(error: unknown) {
  const message = error instanceof Error ? error.message.toLowerCase() : "";
  return message.includes("quota") || message.includes("billing");
}

function combineAbortSignals(
  requestSignal: AbortSignal,
  timeoutSignal: AbortSignal,
) {
  const controller = new AbortController();

  const abort = () => controller.abort();
  if (requestSignal.aborted || timeoutSignal.aborted) {
    controller.abort();
  } else {
    requestSignal.addEventListener("abort", abort, { once: true });
    timeoutSignal.addEventListener("abort", abort, { once: true });
  }

  return controller.signal;
}

function waitForRetry(signal: AbortSignal, baseDelayMs: number) {
  const jitterMs = Math.floor(Math.random() * 150);

  return new Promise<boolean>((resolve) => {
    if (signal.aborted) {
      resolve(false);
      return;
    }

    const timeout = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve(true);
    }, baseDelayMs + jitterMs);

    const onAbort = () => {
      clearTimeout(timeout);
      resolve(false);
    };

    signal.addEventListener("abort", onAbort, { once: true });
  });
}
