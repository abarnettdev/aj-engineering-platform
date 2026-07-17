import { z } from "zod";

const openAiApiKeySchema = z.string().trim().min(1);
const openAiModelSchema = z.string().trim().min(1);
const allowedOriginsSchema = z.string().transform((value) =>
  value
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);
const positiveIntegerSchema = z.coerce.number().int().positive();

export const defaultOpenAiModel = "gpt-5.6-luna";
export const defaultOpenAiFallbackModel = "gpt-5-nano";

export class AskAjConfigurationError extends Error {
  constructor() {
    super("Ask A.J. server configuration is incomplete.");
  }
}

export type AskAjRuntimeConfig =
  | {
      provider: "openai";
      useMockResponses: true;
      model: string;
      fallbackModel: string;
      allowedOrigins: string[];
      circuitFailureThreshold: number;
      circuitCooldownMs: number;
    }
  | {
      provider: "openai";
      apiKey: string;
      model: string;
      fallbackModel: string;
      allowedOrigins: string[];
      circuitFailureThreshold: number;
      circuitCooldownMs: number;
      useMockResponses: false;
    };

export function getAskAjRuntimeConfig(): AskAjRuntimeConfig {
  const useMockResponses =
    process.env.NODE_ENV === "development" &&
    process.env.ASK_AJ_USE_MOCK_RESPONSES === "true";
  const model = openAiModelSchema.safeParse(process.env.OPENAI_MODEL);
  const selectedModel = model.success ? model.data : defaultOpenAiModel;
  const fallbackModel = openAiModelSchema.safeParse(
    process.env.OPENAI_FALLBACK_MODEL,
  );
  const selectedFallbackModel = fallbackModel.success
    ? fallbackModel.data
    : defaultOpenAiFallbackModel;
  const allowedOrigins = allowedOriginsSchema.safeParse(
    process.env.ASK_AJ_ALLOWED_ORIGINS ??
      "https://ajbarnett.tech,https://www.ajbarnett.tech",
  );
  const circuitFailureThreshold = positiveIntegerSchema.safeParse(
    process.env.OPENAI_CIRCUIT_FAILURE_THRESHOLD,
  );
  const circuitCooldownSeconds = positiveIntegerSchema.safeParse(
    process.env.OPENAI_CIRCUIT_COOLDOWN_SECONDS,
  );
  const sharedConfig = {
    allowedOrigins: allowedOrigins.success ? allowedOrigins.data : [],
    circuitCooldownMs:
      (circuitCooldownSeconds.success ? circuitCooldownSeconds.data : 60) *
      1_000,
    circuitFailureThreshold: circuitFailureThreshold.success
      ? circuitFailureThreshold.data
      : 5,
    fallbackModel: selectedFallbackModel,
    model: selectedModel,
    provider: "openai" as const,
  };

  if (useMockResponses) {
    return { ...sharedConfig, useMockResponses: true };
  }

  const apiKey = openAiApiKeySchema.safeParse(process.env.OPENAI_API_KEY);
  if (!apiKey.success) throw new AskAjConfigurationError();

  return {
    ...sharedConfig,
    apiKey: apiKey.data,
    useMockResponses: false,
  };
}
