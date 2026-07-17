import type { AskAjRuntimeConfig } from "@/server/ask-aj/env";

const maxRequestBodyBytes = 25 * 1024;
const shortWindowMs = 10 * 60 * 1_000;
const dailyWindowMs = 24 * 60 * 60 * 1_000;
const shortWindowLimit = 5;
const dailyWindowLimit = 30;
const duplicateRequestTtlMs = 30_000;

type RateLimitBucket = {
  shortWindowStart: number;
  shortCount: number;
  dailyWindowStart: number;
  dailyCount: number;
};

const rateLimitBuckets = new Map<string, RateLimitBucket>();
const inFlightRequests = new Map<string, number>();

export class AskAjRequestGuardError extends Error {
  readonly status: number;
  readonly userMessage: string;

  constructor(status: number, userMessage: string) {
    super(userMessage);
    this.name = "AskAjRequestGuardError";
    this.status = status;
    this.userMessage = userMessage;
  }
}

export async function readLimitedJsonRequest(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    throw new AskAjRequestGuardError(
      415,
      "Ask A.J. could not read that question.",
    );
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > maxRequestBodyBytes) {
    throw new AskAjRequestGuardError(
      413,
      "That question is too large. Please shorten it and try again.",
    );
  }

  return JSON.parse(body) as unknown;
}

export function validateAskAjOrigin(
  request: Request,
  config: AskAjRuntimeConfig,
) {
  const origin = request.headers.get("origin");
  if (!origin) return;

  if (isLocalOrigin(origin) || config.allowedOrigins.includes(origin)) return;

  throw new AskAjRequestGuardError(
    403,
    "Ask A.J. could not accept that request.",
  );
}

export function getAskAjClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();
  return ip || request.headers.get("x-real-ip") || "unknown-client";
}

export function enforceAskAjRateLimit(clientKey: string, now = Date.now()) {
  const bucket = rateLimitBuckets.get(clientKey) ?? {
    dailyCount: 0,
    dailyWindowStart: now,
    shortCount: 0,
    shortWindowStart: now,
  };

  if (now - bucket.shortWindowStart > shortWindowMs) {
    bucket.shortWindowStart = now;
    bucket.shortCount = 0;
  }
  if (now - bucket.dailyWindowStart > dailyWindowMs) {
    bucket.dailyWindowStart = now;
    bucket.dailyCount = 0;
  }

  bucket.shortCount += 1;
  bucket.dailyCount += 1;
  rateLimitBuckets.set(clientKey, bucket);

  if (
    bucket.shortCount > shortWindowLimit ||
    bucket.dailyCount > dailyWindowLimit
  ) {
    throw new AskAjRequestGuardError(
      429,
      "Ask A.J. is receiving a lot of questions right now. Please try again shortly.",
    );
  }
}

export function claimAskAjRequest(
  clientKey: string,
  question: string,
  now = Date.now(),
) {
  const requestKey = `${clientKey}:${question.trim().toLowerCase()}`;
  const expiresAt = inFlightRequests.get(requestKey);
  if (expiresAt != null && expiresAt > now) {
    throw new AskAjRequestGuardError(
      429,
      "Ask A.J. is already working on that question. Please wait a moment.",
    );
  }

  inFlightRequests.set(requestKey, now + duplicateRequestTtlMs);
  return () => inFlightRequests.delete(requestKey);
}

function isLocalOrigin(origin: string) {
  try {
    const url = new URL(origin);
    return (
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname.endsWith(".local")
    );
  } catch {
    return false;
  }
}
