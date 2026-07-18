import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type AskAjFlowStep = {
  title: string;
  description: string;
};

export type AskAjDecision = {
  decision: string;
  why: string;
  tradeoff: string;
  result: string;
};

export type AskAjSignal = {
  label: string;
  value: string;
  detail: string;
};

export type AskAjMilestone = {
  label: string;
  detail: string;
};

export function AskAjFlowDiagram({
  title,
  description,
  steps,
  tone = "default",
}: {
  title: string;
  description: string;
  steps: readonly AskAjFlowStep[];
  tone?: "default" | "accent";
}) {
  return (
    <section
      className={cn(
        "border border-border bg-card p-5 md:p-6",
        tone === "accent" && "bg-ink text-background",
      )}
      aria-labelledby={flowHeadingId(title)}
    >
      <header className="max-w-3xl">
        <p
          className={cn(
            "mono text-[10px] uppercase tracking-[0.22em] text-gold",
            tone === "accent" && "text-gold-text-on-dark",
          )}
        >
          Architecture flow
        </p>
        <h3
          id={flowHeadingId(title)}
          className="mt-3 font-display text-2xl leading-tight md:text-3xl"
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted-foreground",
            tone === "accent" && "text-background/75",
          )}
        >
          {description}
        </p>
      </header>
      <ol className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <li key={`${step.title}-${index}`} className="relative">
            <div
              className={cn(
                "h-full border border-border bg-surface p-4",
                tone === "accent" &&
                  "border-background/20 bg-background/5 text-background",
              )}
            >
              <span
                className={cn(
                  "mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
                  tone === "accent" && "text-background/55",
                )}
              >
                Step {index + 1}
              </span>
              <h4 className="mt-2 font-semibold">{step.title}</h4>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed text-muted-foreground",
                  tone === "accent" && "text-background/70",
                )}
              >
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight
                className={cn(
                  "absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-gold xl:block",
                  tone === "accent" && "text-gold-text-on-dark",
                )}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AskAjDecisionGrid({
  decisions,
}: {
  decisions: readonly AskAjDecision[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {decisions.map((item) => (
        <article
          key={item.decision}
          className="border border-border bg-card p-5"
        >
          <h3 className="font-display text-2xl leading-tight text-ink">
            {item.decision}
          </h3>
          <DecisionField label="Why">{item.why}</DecisionField>
          <DecisionField label="Tradeoff">{item.tradeoff}</DecisionField>
          <DecisionField label="Result">{item.result}</DecisionField>
        </article>
      ))}
    </div>
  );
}

export function AskAjSignalGrid({
  signals,
}: {
  signals: readonly AskAjSignal[];
}) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {signals.map((signal) => (
        <div key={signal.label} className="border border-border bg-surface p-4">
          <dt className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {signal.label}
          </dt>
          <dd className="mt-3">
            <span className="font-display text-3xl text-ink">
              {signal.value}
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
              {signal.detail}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function AskAjMilestoneTimeline({
  milestones,
}: {
  milestones: readonly AskAjMilestone[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {milestones.map((milestone, index) => (
        <li
          key={milestone.label}
          className="relative border border-border bg-card p-5"
        >
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
            Milestone {index + 1}
          </span>
          <h3 className="mt-3 font-display text-2xl leading-tight text-ink">
            {milestone.label}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {milestone.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}

function DecisionField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-4 border-t border-border pt-4">
      <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
  );
}

function flowHeadingId(title: string) {
  return `ask-aj-flow-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
