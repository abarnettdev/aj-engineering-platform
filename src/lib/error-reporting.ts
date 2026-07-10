/**
 * Client-side error reporting hook. Delegates to whatever host runtime
 * exposes a `__captureException` bridge on `window`, and no-ops otherwise.
 * Keeps the app's error boundaries decoupled from any specific reporting
 * pipeline.
 */
type ReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type CaptureBridge = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ReportOptions,
  ) => void;
};

declare global {
  interface Window {
    __captureException?: CaptureBridge["captureException"];
    __errorReporter?: CaptureBridge;
  }
}

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const bridge =
    window.__errorReporter ??
    (window.__captureException ? { captureException: window.__captureException } : undefined);
  bridge?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
