import {
  AskAjProviderError,
  canUseOpenAiFallbackModel,
  createOpenAiClient,
  createOpenAiTextGenerator,
  getFallbackRequestTimeoutMs,
} from "@/server/ask-aj/openai-generator";
import {
  canAttemptOpenAiRequest,
  recordOpenAiFailure,
  recordOpenAiSuccess,
} from "@/server/ask-aj/circuit-breaker";
import {
  getCachedAskAjAnswer,
  getStaticAskAjFallbackAnswer,
  streamFallbackAnswer,
} from "@/server/ask-aj/fallback-answers";
import {
  recordAvailabilityOutcome,
  type AvailabilityOutcome,
} from "@/server/ask-aj/availability";
import { logAskAjEvent } from "@/server/ask-aj/logging";
import type { AskAjRuntimeConfig } from "@/server/ask-aj/env";

export async function* generateAskAjText(
  question: string,
  config: AskAjRuntimeConfig,
  signal: AbortSignal,
): AsyncGenerator<string> {
  if (config.useMockResponses) {
    yield* generateDevelopmentFallback(question, signal);
    return;
  }

  if (!canAttemptOpenAiRequest(config.circuitCooldownMs)) {
    logAskAjEvent("ask_aj.circuit_open", {
      cooldownMs: config.circuitCooldownMs,
      model: config.model,
    });
    yield* generateCachedOrStaticFallback(question, signal);
    return;
  }

  const client = createOpenAiClient(config.apiKey);
  const startedAt = Date.now();
  let primaryTokenUsage = {};

  try {
    yield* createOpenAiTextGenerator(client, question, config.model, signal, {
      onUsage: (usage) => {
        primaryTokenUsage = usage;
      },
      retryTransientFailures: true,
    });
    recordOpenAiSuccess(config.model);
    recordAvailability("live_success");
    logAskAjEvent("ask_aj.primary_success", {
      durationMs: Date.now() - startedAt,
      model: config.model,
      ...primaryTokenUsage,
    });
    return;
  } catch (error) {
    if (signal.aborted) return;
    if (!(error instanceof AskAjProviderError)) throw error;

    recordOpenAiFailure(
      error,
      config.circuitFailureThreshold,
      config.circuitCooldownMs,
    );

    if (canUseOpenAiFallbackModel(error)) {
      logAskAjEvent("ask_aj.model_fallback", {
        category: error.category,
        fallbackModel: config.fallbackModel,
        model: config.model,
        status: error.status,
      });

      try {
        let fallbackTokenUsage = {};
        yield* createOpenAiTextGenerator(
          client,
          question,
          config.fallbackModel,
          signal,
          {
            onUsage: (usage) => {
              fallbackTokenUsage = usage;
            },
            retryTransientFailures: false,
            timeoutMs: getFallbackRequestTimeoutMs(),
          },
        );
        recordOpenAiSuccess(config.fallbackModel);
        recordAvailability("fallback_model_success");
        logAskAjEvent("ask_aj.fallback_success", {
          durationMs: Date.now() - startedAt,
          model: config.fallbackModel,
          ...fallbackTokenUsage,
        });
        return;
      } catch (fallbackError) {
        if (signal.aborted) return;
        if (fallbackError instanceof AskAjProviderError) {
          recordOpenAiFailure(
            fallbackError,
            config.circuitFailureThreshold,
            config.circuitCooldownMs,
          );
        }
      }
    }

    yield* generateCachedOrStaticFallback(question, signal);
  }
}

async function* generateCachedOrStaticFallback(
  question: string,
  signal: AbortSignal,
) {
  const cached = getCachedAskAjAnswer(question);

  if (cached) {
    recordAvailability("cached_success");
    logAskAjEvent("ask_aj.cache_fallback", { cacheId: cached.id });
    yield* streamFallbackAnswer(cached.answer, signal);
    return;
  }

  recordAvailability("static_fallback_success");
  logAskAjEvent("ask_aj.static_fallback");
  yield* streamFallbackAnswer(getStaticAskAjFallbackAnswer(), signal);
}

function recordAvailability(outcome: AvailabilityOutcome) {
  recordAvailabilityOutcome(outcome);
}

async function* generateDevelopmentFallback(
  question: string,
  signal: AbortSignal,
): AsyncGenerator<string> {
  const answer = /\b(cdw|legato|design system|enterprise)\b/i.test(question)
    ? "Development fallback: AJ worked on CDW's Legato Design System as a Senior Software Engineer I / Technical Lead, helping evolve shared infrastructure for product teams. Configure the selected provider and remove ASK_AJ_USE_MOCK_RESPONSES to use the live provider."
    : "Development fallback: Ask A.J. needs a live provider configuration to answer beyond the temporary approved context. Configure the selected provider and remove ASK_AJ_USE_MOCK_RESPONSES to use the live provider.";

  for (const word of answer.split(" ")) {
    if (signal.aborted) return;
    yield `${word} `;
  }
}
