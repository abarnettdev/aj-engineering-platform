type AskAjLogEvent =
  | "ask_aj.primary_success"
  | "ask_aj.primary_retry"
  | "ask_aj.model_fallback"
  | "ask_aj.fallback_success"
  | "ask_aj.cache_fallback"
  | "ask_aj.static_fallback"
  | "ask_aj.circuit_open"
  | "ask_aj.circuit_recovered"
  | "ask_aj.request_failed"
  | "ask_aj.request_rejected";

type AskAjLogMetadata = Record<string, boolean | number | string | undefined>;

export function logAskAjEvent(
  event: AskAjLogEvent,
  metadata: AskAjLogMetadata = {},
) {
  console.info(event, metadata);
}
