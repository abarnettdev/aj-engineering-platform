export const askAjAvailabilityFormula =
  "(live success + fallback-model success + cached success + static fallback success) / total valid requests";

type AvailabilityCounters = {
  totalValidRequests: number;
  liveSuccesses: number;
  fallbackModelSuccesses: number;
  cachedSuccesses: number;
  staticFallbackSuccesses: number;
  hardFailures: number;
};

const counters: AvailabilityCounters = {
  cachedSuccesses: 0,
  fallbackModelSuccesses: 0,
  hardFailures: 0,
  liveSuccesses: 0,
  staticFallbackSuccesses: 0,
  totalValidRequests: 0,
};

export type AvailabilityOutcome =
  | "valid_request"
  | "live_success"
  | "fallback_model_success"
  | "cached_success"
  | "static_fallback_success"
  | "hard_failure";

export function recordAvailabilityOutcome(outcome: AvailabilityOutcome) {
  if (outcome === "valid_request") counters.totalValidRequests += 1;
  if (outcome === "live_success") counters.liveSuccesses += 1;
  if (outcome === "fallback_model_success")
    counters.fallbackModelSuccesses += 1;
  if (outcome === "cached_success") counters.cachedSuccesses += 1;
  if (outcome === "static_fallback_success")
    counters.staticFallbackSuccesses += 1;
  if (outcome === "hard_failure") counters.hardFailures += 1;
}

export function getAvailabilitySnapshot() {
  const available =
    counters.liveSuccesses +
    counters.fallbackModelSuccesses +
    counters.cachedSuccesses +
    counters.staticFallbackSuccesses;

  return {
    ...counters,
    functionalAvailability:
      counters.totalValidRequests > 0
        ? available / counters.totalValidRequests
        : 1,
    formula: askAjAvailabilityFormula,
  };
}
