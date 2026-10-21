import {
  AUDIT_DATE,
  AuditResultsDialog,
  AxeSummary,
  ScoreRing,
} from "@/components/audit-results";

export function QualityShowcase() {
  return (
    <div className="rounded-3xl bg-card p-6 shadow-soft sm:p-8 md:p-12">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
            Recorded quality results
          </p>
          <h2
            id="test-title"
            className="mt-4 text-4xl font-medium text-ink md:text-5xl"
          >
            Built to be tested.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Good design should work for everyone. Here is how the homepage
            performed when tested for speed, accessibility, and search
            visibility.
          </p>
        </div>
        <p className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-ink">
          Last audit run: {AUDIT_DATE}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <ScoreRing score={98} label="Performance" />
        <ScoreRing score={100} label="Accessibility" />
        <ScoreRing score={100} label="Best Practices" />
        <ScoreRing score={100} label="SEO" />
        <div className="col-span-2 lg:col-span-4">
          <AxeSummary />
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Desktop Lighthouse snapshot for https://ajbarnett.tech/. Mobile
        performance recorded 92. All other mobile categories recorded 100.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-7">
        <div>
          <AuditResultsDialog
            initialView="accessibility"
            triggerLabel="View accessibility results"
          />
        </div>
        <div>
          <AuditResultsDialog
            initialView="lighthouse"
            triggerLabel="View Lighthouse scores"
            triggerClassName="border border-border bg-card text-ink hover:border-accent hover:bg-card"
          />
        </div>
      </div>
    </div>
  );
}
