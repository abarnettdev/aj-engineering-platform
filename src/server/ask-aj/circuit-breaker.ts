import { logAskAjEvent } from "@/server/ask-aj/logging";
import type { AskAjProviderError } from "@/server/ask-aj/openai-generator";

type CircuitState = "closed" | "open" | "half-open";

type CircuitBreakerState = {
  consecutiveFailures: number;
  openedAt: number;
  state: CircuitState;
};

const circuit: CircuitBreakerState = {
  consecutiveFailures: 0,
  openedAt: 0,
  state: "closed",
};

export function canAttemptOpenAiRequest(cooldownMs: number, now = Date.now()) {
  if (circuit.state !== "open") return true;
  if (now - circuit.openedAt < cooldownMs) return false;

  circuit.state = "half-open";
  return true;
}

export function recordOpenAiSuccess(model: string) {
  const recovered = circuit.state === "half-open" || circuit.state === "open";
  circuit.consecutiveFailures = 0;
  circuit.openedAt = 0;
  circuit.state = "closed";

  if (recovered) {
    logAskAjEvent("ask_aj.circuit_recovered", { model });
  }
}

export function recordOpenAiFailure(
  error: AskAjProviderError,
  threshold: number,
  cooldownMs: number,
  now = Date.now(),
) {
  if (!isCircuitFailure(error)) return;

  circuit.consecutiveFailures += 1;

  if (circuit.consecutiveFailures >= threshold) {
    circuit.state = "open";
    circuit.openedAt = now;
    logAskAjEvent("ask_aj.circuit_open", {
      category: error.category,
      cooldownMs,
      failureCount: circuit.consecutiveFailures,
      model: error.model,
      status: error.status,
    });
  }
}

export function getCircuitState() {
  return { ...circuit };
}

function isCircuitFailure(error: AskAjProviderError) {
  return (
    error.category === "rate_limited" ||
    error.category === "unavailable" ||
    error.category === "timeout" ||
    error.category === "stream" ||
    error.category === "unexpected"
  );
}
