import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Component,
  FileText,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/work_/legato")({
  head: () => ({
    meta: [
      { title: "Legato Design System Case Study · AJ Barnett" },
      {
        name: "description",
        content:
          "How AJ Barnett helped lead enterprise design-system architecture, component APIs, accessibility, documentation, and adoption at CDW.",
      },
      {
        property: "og:title",
        content: "Legato Design System Case Study · AJ Barnett",
      },
      {
        property: "og:description",
        content:
          "Enterprise design-system leadership from design specification through component API, Storybook, and product adoption.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ajbarnett.tech/work/legato",
      },
    ],
  }),
  component: LegatoCaseStudy,
});

const outcomes = [
  ["92%", "adoption across targeted experiences"],
  ["60%+", "less implementation effort"],
  ["170+", "shared UI assets across libraries"],
  ["5", "engineers mentored"],
] as const;

const pipeline = [
  {
    icon: Layers3,
    title: "Design specification",
    detail:
      "Intent, anatomy, variants, interaction states, responsive behavior, and accessibility expectations are named before implementation.",
  },
  {
    icon: Code2,
    title: "Component API",
    detail:
      "React, TypeScript, Stencil, and Web Component contracts turn those decisions into typed, reusable interfaces.",
  },
  {
    icon: FileText,
    title: "Storybook",
    detail:
      "Examples keep variants, edge cases, usage guidance, and implementation limits visible beside the component.",
  },
  {
    icon: Component,
    title: "Product integration",
    detail:
      "Product teams adopt the shared contract incrementally inside existing applications instead of waiting for a rewrite.",
  },
] as const;

const accessibilityContract = [
  "Native semantics first, with ARIA used only where native HTML is not enough.",
  "Keyboard operation and visible focus are part of the component API.",
  "Labels, descriptions, errors, and disabled states stay connected programmatically.",
  "Responsive reflow and zoom are reviewed as behavior, not presentation polish.",
  "Reduced-motion preferences are honored by shared motion patterns.",
  "Automated checks support manual keyboard and assistive-technology review.",
] as const;

const apiExample = `export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}`;

const tokenExample = `:root {
  --background: oklch(0.98 0.004 85);
  --foreground: oklch(0.18 0.01 80);
  --primary: var(--foreground);
  --ring: oklch(0.55 0.12 75);
}`;

function LegatoCaseStudy() {
  return (
    <>
      <section className="border-b border-border bg-background py-16 sm:py-24">
        <div className="container-page">
          <Link
            to="/work"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all work
          </Link>

          <div className="mt-12 grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-accent-ink">
                <span className="block sm:inline">Flagship case study</span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">
                  Enterprise design systems
                </span>
                <span className="hidden sm:inline"> · </span>
                <span className="block sm:inline">2022–2026</span>
              </p>
              <h1 className="mt-6 max-w-5xl text-balance font-display text-[clamp(2.15rem,6.25vw,6.25rem)] uppercase leading-[0.86] tracking-[-0.06em] text-ink">
                Design decisions become shared infrastructure.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
                AJ helped lead the frontend architecture and engineering behind
                Legato, CDW&apos;s enterprise design system, connecting design
                intent to reusable code, documentation, accessibility, and
                adoption across product teams.
              </p>
            </div>

            <aside className="border border-border bg-ink p-7 text-white sm:p-9">
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-accent">
                AJ&apos;s role
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug">
                Senior Software Engineer I and Technical Lead
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Architecture, component APIs, shared libraries, tooling,
                governance, integrations, documentation, accessibility, and
                engineering leadership.
              </p>
              <p className="mt-7 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/60">
                This was team work with Product Design, Product, QA, and
                engineering partners. AJ does not claim sole ownership of the
                system or every component.
              </p>
            </aside>
          </div>

          <figure className="mt-14 overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-lift">
            <img
              src="/visuals/legato-case-study-studio.webp"
              srcSet="/visuals/legato-case-study-studio-960.webp 960w, /visuals/legato-case-study-studio.webp 1536w"
              sizes="(min-width: 1280px) 1200px, calc(100vw - 3rem)"
              alt="CDW product detail, listing, responsive, filter, cart, comparison, warranty, and focus patterns powered by Legato."
              width={1586}
              height={992}
              className="aspect-[8/5] w-full rounded-[1.15rem] object-cover"
            />
            <figcaption className="px-4 py-3 text-xs text-muted-foreground">
              Legato in production · Shared commerce patterns across product
              journeys
            </figcaption>
          </figure>

          <dl className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map(([value, label]) => (
              <div
                key={label}
                className="border-b border-r border-border p-6 sm:p-8"
              >
                <dt className="font-display text-5xl tracking-[-0.05em] text-ink">
                  {value}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border bg-surface/40 py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-accent-ink">
                The system path
              </p>
              <h2 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-7xl">
                One decision, carried all the way through.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
              A design system earns trust when the same decision stays visible
              in design guidance, code, documentation, and a working product.
              The public example below recreates that relationship with
              independently authored assets.
            </p>
          </div>

          <ol className="mt-14 grid border-l border-t border-border lg:grid-cols-4">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative border-b border-r border-border bg-background p-7 lg:min-h-80"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-5 w-5 text-accent-ink"
                      aria-hidden="true"
                    />
                    <span className="mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-b border-border py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-accent-ink">
              Independent public demonstration
            </p>
            <h2 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-7xl">
              A component contract you can use.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              These controls are part of this public portfolio codebase. They
              demonstrate the same kind of typed API, token use, interaction
              behavior, and documentation discipline without exposing private
              company code or design files.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9">
              <Tabs defaultValue="component">
                <TabsList
                  aria-label="Component demonstration views"
                  className="h-auto flex-wrap"
                >
                  <TabsTrigger value="component">Component</TabsTrigger>
                  <TabsTrigger value="states">States</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                </TabsList>

                <TabsContent value="component" className="mt-8">
                  <div className="max-w-xl rounded-3xl border border-border bg-background p-6 shadow-soft sm:p-8">
                    <p className="mono text-[9px] uppercase tracking-[0.2em] text-accent-ink">
                      Account preferences
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
                      Notification settings
                    </h3>
                    <div className="mt-7 space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="demo-email">Email address</Label>
                        <Input
                          id="demo-email"
                          type="email"
                          defaultValue="aj@example.com"
                          aria-describedby="demo-email-help"
                        />
                        <p
                          id="demo-email-help"
                          className="text-xs text-muted-foreground"
                        >
                          Used only for the notifications selected below.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Checkbox id="demo-updates" defaultChecked />
                        <div>
                          <Label htmlFor="demo-updates">Product updates</Label>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            Monthly release notes and service changes.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button type="button">Save preferences</Button>
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="states" className="mt-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      ["Default", "Ready for input and action."],
                      ["Hover", "A visible response confirms the target."],
                      ["Focus", "A keyboard-visible ring preserves location."],
                      [
                        "Disabled",
                        "Semantics and styling both communicate availability.",
                      ],
                      [
                        "Invalid",
                        "The field points to readable error guidance.",
                      ],
                      [
                        "Loading",
                        "The control keeps its label and prevents duplicate work.",
                      ],
                    ].map(([state, detail]) => (
                      <div
                        key={state}
                        className="rounded-2xl border border-border bg-background p-5"
                      >
                        <p className="text-sm font-semibold text-ink">
                          {state}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="accessibility" className="mt-8">
                  <ul className="grid gap-3">
                    {accessibilityContract.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-relaxed text-foreground/85"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid gap-6">
              <div className="border border-border bg-ink p-6 text-white sm:p-8">
                <p className="mono text-[9px] uppercase tracking-[0.2em] text-accent">
                  Typed API
                </p>
                <pre className="mt-5 overflow-x-auto text-[12px] leading-relaxed text-white/75">
                  <code>{apiExample}</code>
                </pre>
              </div>
              <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
                <p className="mono text-[9px] uppercase tracking-[0.2em] text-accent-ink">
                  Semantic tokens
                </p>
                <pre className="mt-5 overflow-x-auto text-[12px] leading-relaxed text-foreground/75">
                  <code>{tokenExample}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/storybook/index.html"
              className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Inspect Storybook
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/systems"
              className="inline-flex min-h-12 items-center gap-2 border border-border-strong px-6 py-3 text-sm font-semibold text-ink hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Change live design tokens
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-ink py-20 text-white sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-accent">
              What made adoption possible
            </p>
            <h2 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] text-white sm:text-7xl">
              The component was only one part of the product.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Incremental paths for existing applications",
              "Clear ownership and contribution rules",
              "Documentation beside the working component",
              "Support for React and standards-based Web Components",
              "Accessibility requirements built into shared contracts",
              "Direct support and mentoring for adopting teams",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 border-t border-white/20 py-5"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-accent-ink">
              Public evidence and limits
            </p>
            <h2 className="mt-5 text-balance font-display text-5xl uppercase leading-[0.94] tracking-[-0.05em] sm:text-6xl">
              Inspect the public implementation.
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              CDW source code, internal Figma files, product screenshots, and
              private documentation are intentionally excluded. This case study
              uses verified outcomes, accurate role boundaries, and an
              independent public implementation you can test directly.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/abarnettdev/aj-engineering-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View source
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center border border-border-strong px-6 py-3 text-sm font-semibold text-ink hover:border-ink hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Discuss the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
