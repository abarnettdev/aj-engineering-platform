import { Sparkles } from "lucide-react";

type AskAjStatusProps = {
  label: string;
  isLoading: boolean;
  reducedMotion?: boolean;
};

export function AskAjStatus({
  label,
  isLoading,
  reducedMotion = false,
}: AskAjStatusProps) {
  return (
    <p
      className="mono flex h-5 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      {isLoading ? (
        <span
          className={`ask-aj-status-dots${reducedMotion ? " ask-aj-status-dots--reduced" : ""}`}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </span>
      ) : (
        <Sparkles
          className="h-3.5 w-3.5 shrink-0 text-gold"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </p>
  );
}
