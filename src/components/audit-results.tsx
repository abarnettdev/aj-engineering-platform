import { useState, type CSSProperties, type ReactNode } from "react";
import { Accessibility, CheckCircle2, ExternalLink, Gauge } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const QUALITY_AUDIT = {
  ranAt: "2026-10-20",
  dateLabel: "October 20, 2026",
  url: "https://ajbarnett.tech/",
  lighthouse: {
    desktop: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
    mobile: {
      performance: 92,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
  },
  axe: {
    detectedIssues: 0,
    ruleset: "WCAG 2.1 AA",
    bestPractices: false,
  },
} as const;

export const AUDIT_DATE = QUALITY_AUDIT.dateLabel;
export const AUDIT_URL = QUALITY_AUDIT.url;
export const LIGHTHOUSE_RESULTS = QUALITY_AUDIT.lighthouse;

type AuditView = "lighthouse" | "accessibility";
type Device = keyof typeof LIGHTHOUSE_RESULTS;

const scoreLabels = {
  performance: "Performance",
  accessibility: "Accessibility",
  bestPractices: "Best Practices",
  seo: "SEO",
} as const;

export function AuditResultsDialog({
  initialView = "lighthouse",
  triggerLabel = "Explore the results",
  triggerClassName,
}: {
  initialView?: AuditView;
  triggerLabel?: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<AuditView>(initialView);

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) setView(initialView);
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            triggerClassName,
          )}
        >
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(92dvh,56rem)] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto rounded-3xl border-border bg-background p-0 shadow-lift">
        <DialogHeader className="border-b border-border px-6 pb-5 pt-7 pr-14 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
            Recorded quality review
          </p>
          <DialogTitle className="mt-2 text-3xl text-ink sm:text-4xl">
            Built to be tested.
          </DialogTitle>
          <DialogDescription className="max-w-3xl text-sm leading-relaxed sm:text-base">
            These results share one verified audit record last run on{" "}
            {AUDIT_DATE}
            for {AUDIT_URL}. They are evidence from that test run, not live
            telemetry or a guarantee of future scores.
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={view}
          onValueChange={(value) => setView(value as AuditView)}
          className="px-6 pb-8 sm:px-8"
        >
          <TabsList
            className="mt-6 grid h-auto w-full grid-cols-2 rounded-full p-1"
            aria-label="Audit result type"
          >
            <TabsTrigger value="lighthouse" className="min-h-10 rounded-full">
              Lighthouse scores
            </TabsTrigger>
            <TabsTrigger
              value="accessibility"
              className="min-h-10 rounded-full"
            >
              axe results
            </TabsTrigger>
          </TabsList>
          <TabsContent value="lighthouse" className="mt-6">
            <LighthouseResults />
          </TabsContent>
          <TabsContent value="accessibility" className="mt-6">
            <AxeResults />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export function LighthouseResults({
  defaultDevice = "desktop",
}: {
  defaultDevice?: Device;
}) {
  return (
    <Tabs defaultValue={defaultDevice}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-ink">
            Lighthouse snapshot
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Captured {AUDIT_DATE}
          </p>
        </div>
        <TabsList aria-label="Lighthouse device" className="rounded-full">
          <TabsTrigger value="desktop" className="rounded-full">
            Desktop
          </TabsTrigger>
          <TabsTrigger value="mobile" className="rounded-full">
            Mobile
          </TabsTrigger>
        </TabsList>
      </div>
      {(["desktop", "mobile"] as const).map((device) => (
        <TabsContent key={device} value={device} className="mt-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {Object.entries(LIGHTHOUSE_RESULTS[device]).map(([key, score]) => (
              <ScoreRing
                key={key}
                score={score}
                label={scoreLabels[key as keyof typeof scoreLabels]}
              />
            ))}
          </div>
        </TabsContent>
      ))}
      <EvidenceNote icon={<Gauge className="size-5" aria-hidden="true" />}>
        Lighthouse measured performance, accessibility, best practices, and SEO
        for the tested page and device profile. Scores can change with content,
        network conditions, browser versions, and future releases.
      </EvidenceNote>
      <a
        href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fajbarnett.tech%2F"
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-ink underline-offset-4 hover:underline"
      >
        Run a current public audit{" "}
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    </Tabs>
  );
}

export function AxeResults() {
  return (
    <div>
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-success-surface text-success">
            <CheckCircle2 className="size-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-3xl font-semibold text-ink">0 detected issues</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              axe automated scan with the WCAG 2.1 AA ruleset selected. Best
              Practices was off. The scan reported zero critical, serious,
              moderate, or minor issues.
            </p>
          </div>
        </div>
        <dl className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
          <ResultFact term="Test date" detail={AUDIT_DATE} />
          <ResultFact term="Tested URL" detail={AUDIT_URL} />
          <ResultFact term="Automated ruleset" detail="WCAG 2.1 AA" />
          <ResultFact term="Best Practices" detail="Off in the supplied scan" />
        </dl>
      </div>
      <EvidenceNote
        icon={<Accessibility className="size-5" aria-hidden="true" />}
      >
        An automated scan can find many common issues, but it cannot prove WCAG
        or legal conformance. The site is designed with WCAG 2.2 AA and Section
        508 requirements in mind. Guided and manual testing are tracked
        separately and are not represented as completed by this scan.
      </EvidenceNote>
    </div>
  );
}

export function AxeSummary() {
  return (
    <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-success-surface p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-card text-success shadow-sm">
        <CheckCircle2 className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">
          axe: {QUALITY_AUDIT.axe.detectedIssues} detected issues
        </p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {QUALITY_AUDIT.axe.ruleset} automated ruleset · Last run {AUDIT_DATE}
        </p>
      </div>
    </div>
  );
}

export function ScoreRing({ score, label }: { score: number; label: string }) {
  const style = { "--audit-score": score } as CSSProperties & {
    "--audit-score": number;
  };
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <div className="relative mx-auto size-28" style={style}>
        <svg
          viewBox="0 0 120 120"
          className="size-full -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="60"
            cy="60"
            r="52"
            pathLength="100"
            fill="none"
            stroke="var(--border)"
            strokeWidth="8"
          />
          <circle
            className="audit-score-ring"
            cx="60"
            cy="60"
            r="52"
            pathLength="100"
            fill="none"
            stroke="var(--success)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-3xl font-semibold text-ink">
          {score}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-ink">{label}</p>
    </div>
  );
}

function ResultFact({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="rounded-2xl bg-surface p-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {term}
      </dt>
      <dd className="mt-2 break-words font-medium text-ink">{detail}</dd>
    </div>
  );
}

function EvidenceNote({
  children,
  icon,
}: {
  children: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="mt-6 flex gap-3 rounded-2xl bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-0.5 text-accent-ink">{icon}</span>
      <p>{children}</p>
    </div>
  );
}
