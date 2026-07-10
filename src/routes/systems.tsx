import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/section";
import { Badge, TechBadge } from "@/components/badge";
import { Reveal } from "@/components/reveal";
import {
  ComponentSystemIllus,
  TokensIllus,
  ArchitectureIllus,
} from "@/components/illus";
import { PageHero, Accent } from "@/components/page-hero";
import { TokenPlayground } from "@/components/token-playground";
import { ComponentAnatomy } from "@/components/composites/component-anatomy";
import heroImage from "@/assets/hero-design-system.jpg";

export const Route = createFileRoute("/systems")({
  head: () => ({
    meta: [
      { title: "Systems that scale · AJ Barnett" },
      {
        name: "description",
        content:
          "How I build products that scale: architecture, API surface, DX, tokens, and the boring decisions that let a team inherit velocity.",
      },
      { property: "og:title", content: "Systems that scale · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Architecture, API surface, DX, and tokens, the decisions that let a team inherit velocity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignSystem,
});

const tokens = {
  color: [
    ["--background", "surface"],
    ["--foreground", "content"],
    ["--surface", "elevated 1"],
    ["--surface-elevated", "elevated 2"],
    ["--primary", "actions"],
    ["--gold", "accent · achievement"],
    ["--muted-foreground", "subtle text"],
    ["--border", "hairlines"],
  ] as const,
  space: ["0", "1", "2", "3", "4", "6", "8", "12", "16", "24", "32"],
  radius: ["sm", "md", "lg", "xl", "2xl"],
  type: [
    ["Display / Hero", "font-display text-6xl font-medium tracking-[-0.03em] text-ink", "Systems that scale."],
    ["Display / L", "font-display text-4xl font-medium tracking-[-0.02em] text-ink", "Composable primitives"],
    ["Body / L", "text-lg leading-relaxed text-foreground/85", "Composition over configuration."],
    ["Body / S", "text-sm text-muted-foreground", "Documentation is a product."],
    ["Mono / XS", "mono text-[10px] uppercase tracking-[0.24em] text-gold", "TOKENS · TYPE · MOTION"],
  ] as const,
};

const components = [
  "Button","Input","Textarea","Select","Checkbox","Radio","Switch","Card",
  "Modal","Dialog","Sheet","Tooltip","Popover","Badge","Avatar","Breadcrumb",
  "Tabs","Accordion","Toast","Progress","Table","Pagination","Skeleton",
  "Spinner","Search","Navigation","Container","Section","Stack","Grid",
  "TimelineItem","ProjectCard","MetricCard","TechnologyBadge","CodeBlock",
];

function DesignSystem() {
  return (
    <>
      <PageHero
        eyebrow="Systems · Chapter 04"
        chapter="04"
        chapterLabel="06"
        image={heroImage}
        imageAlt="Brutalist grid ceiling with dramatic light, a system built from repeated, disciplined form."
        imageCaption="Architecture · API · DX · Tokens"
        imageMeta="Systems"
        headline={
          <>
            Scalable products
            <br />
            <Accent>are systems.</Accent>
          </>
        }
        description={
          <>
            A product scales when the next engineer can move fast without
            asking permission. That means shape before surface: data model,
            API contracts, boundaries, DX, and tokens, decided on purpose,
            not inherited by accident.
          </>
        }
        actions={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">How I build for scale</Badge>
            <Badge variant="outline">Architecture</Badge>
            <Badge variant="outline">API surface</Badge>
            <Badge variant="outline">DX</Badge>
            <Badge variant="outline">Tokens</Badge>
          </div>
        }
      />

      {/* STORYBOOK ACCESS */}
      <div className="border-b border-border/70 bg-background">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              Live Component Explorer
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              One primitive of many: <span className="font-accent italic text-gold">Storybook</span>.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Components are the visible edge of the system. Underneath sit
              tokens, API contracts, and DX conventions, the parts a team
              inherits without noticing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/storybook/index.html"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Storybook component explorer in a new tab"
              className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Open Storybook →
            </a>
          </div>

        </div>
      </div>




      {/* TOKENS, interactive */}
      <div className="border-b border-border/70 bg-surface/30">
        <Section eyebrow="Chapter 01 · Tokens" title="Design tokens as a language.">
          <div className="grid gap-10 md:grid-cols-3">
            <Reveal>
              <div>
                <h3 className="mono text-[10px] uppercase tracking-[0.24em] text-gold">Color</h3>
                <ul className="mt-5 space-y-2">
                  {tokens.color.map(([name, label]) => (
                    <li key={name} className="lift flex items-center gap-3 border border-border bg-card px-3 py-2.5">
                      <span
                        className="h-7 w-7 border border-border-strong"
                        style={{ background: `var(${name})` }}
                      />
                      <span className="mono text-[11px] text-ink">{name}</span>
                      <span className="ml-auto text-[11px] text-muted-foreground">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h3 className="mono text-[10px] uppercase tracking-[0.24em] text-gold">Spacing</h3>
                <div className="mt-5 space-y-2">
                  {tokens.space.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <span className="mono w-8 text-[11px] text-muted-foreground">{s}</span>
                      <span
                        className="h-2 bg-ink"
                        style={{ width: `${Math.min(Number(s) * 8 || 4, 240)}px` }}
                      />
                    </div>
                  ))}
                </div>
                <h3 className="mono mt-8 text-[10px] uppercase tracking-[0.24em] text-gold">Radius</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {tokens.radius.map((r) => (
                    <div
                      key={r}
                      className="grid h-16 w-16 place-items-center border border-border bg-card text-[11px] text-muted-foreground"
                      style={{ borderRadius: `var(--radius-${r})` }}
                    >
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <h3 className="mono text-[10px] uppercase tracking-[0.24em] text-gold">Typography</h3>
                <ul className="mt-5 space-y-6">
                  {tokens.type.map(([label, cls, sample]) => (
                    <li key={label} className="border-t border-border pt-4">
                      <p className="mono text-[9.5px] uppercase tracking-[0.24em] text-muted-foreground">
                        {label}
                      </p>
                      <p className={`mt-2 ${cls}`}>{sample}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-16">
              <TokensIllus />
            </div>
          </Reveal>

          {/* Live token playground, the thesis, made touchable */}
          <div className="mt-20">
            <Reveal>
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <Eyebrow>Playground</Eyebrow>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Change a token · see it ripple
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <TokenPlayground />
            </Reveal>
          </div>
        </Section>
      </div>

      {/* PRINCIPLES */}
      <Section eyebrow="Chapter 02 · Principles" title="How I build for scale.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Shape before surface", "Data model and API contracts first. UI last. The shape decides everything downstream."],
            ["Boundaries are the product", "Auth, ownership, and trust lines are named on purpose. Every ambiguity is a future bug."],
            ["Composition over configuration", "Small primitives that combine. Fewer props, sharper APIs, less to memorize."],
            ["Tokens over hardcodes", "Every visual decision goes through a token. One change ripples through every surface."],
            ["DX is UX for the next engineer", "The paved road is the product. If it's easier to do it right, right is what ships."],
            ["Docs travel with the code", "A component without an example is a component without a contract."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="lift gold-sweep h-full border border-border bg-card p-7">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* API */}
      <div className="border-y border-border/70 bg-surface/30">
        <Section
          eyebrow="Chapter 03 · API"
          title="Component APIs shaped by intent."
          description="The API is the product. It teaches, constrains, and rewards good composition."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="border border-border bg-card p-6">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Configuration (avoid)
                </p>
                <pre className="mono mt-4 overflow-auto rounded border border-border bg-background p-4 text-[11px] leading-relaxed text-muted-foreground">
{`<Card
  title="…" subtitle="…" icon={<X />}
  actionLabel="…" actionVariant="outline"
  showDivider hasFooter footerAlign="end"
  densityCompact
/>`}
                </pre>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border border-gold/40 bg-card p-6">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                  Composition (preferred)
                </p>
                <pre className="mono mt-4 overflow-auto rounded border border-border bg-background p-4 text-[11px] leading-relaxed text-ink">
{`<Card>
  <Card.Header>
    <Card.Title>…</Card.Title>
  </Card.Header>
  <Card.Body>…</Card.Body>
  <Card.Footer align="end">
    <Button variant="outline">…</Button>
  </Card.Footer>
</Card>`}
                </pre>
              </div>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <div className="mb-8 flex items-baseline justify-between gap-4">
                <Eyebrow>Anatomy</Eyebrow>
                <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Scroll to assemble
                </p>
              </div>
            </Reveal>
            <ComponentAnatomy />
          </div>
        </Section>
      </div>

      {/* MOTION */}
      <Section
        eyebrow="Chapter 04 · Motion"
        title="Motion as a system, not decoration."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Purpose", "Motion earns its place by clarifying causality, what caused what, where the user is, what to look at next."],
            ["Duration", "180–420ms for UI. 700–900ms for reveals. Never long enough to feel like waiting."],
            ["Easing", "cubic-bezier(0.22, 1, 0.36, 1), a single expressive out-curve for everything."],
            ["Reduced motion", "Motion is a feature, not a mandate. Honor prefers-reduced-motion, always."],
            ["Choreography", "Sequenced stagger for lists. Solo reveals for hero moments. Never both at once."],
            ["Restraint", "If it doesn't clarify, it distracts. When in doubt, remove."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="lift border border-border bg-card p-6">
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FIGMA ↔ CODE */}
      <div className="border-y border-border/70 bg-surface/30">
        <Section
          eyebrow="Chapter 05 · The Handoff"
          title="Figma and code, sharing a language."
        >
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            <Reveal><ArchitectureIllus /></Reveal>
            <Reveal delay={120}>
              <div className="space-y-4 text-foreground/85">
                <p className="leading-relaxed">
                  When tokens are the source of truth, Figma variables and code
                  variables both point at the same intent. The handoff stops
                  being a translation and becomes a lookup.
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "Figma variables mirror Style Dictionary output.",
                    "Component names in Figma match component names in code.",
                    "State variants in design match slot APIs in code.",
                    "Accessibility annotations travel with the component, not the ticket.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* COMPONENTS */}
      <Section
        eyebrow="Chapter 06 · Inventory"
        title="Included in packages/ui."
        description="Every component is typed, accessible, composable, documented, and styled entirely through tokens."
      >
        <ComponentSystemIllus className="mb-10" />
        <div className="flex flex-wrap gap-1.5">
          {components.map((c) => (
            <TechBadge key={c}>{c}</TechBadge>
          ))}
        </div>
      </Section>

      {/* SCALE */}
      <div className="border-t border-border/70 bg-surface/30">
        <Section
          eyebrow="Chapter 07 · Scale"
          title="Why systems multiply teams."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["One decision, many surfaces", "A token, a contract, a boundary, decided once, inherited everywhere. No coordination meeting required."],
              ["Onboarding as a byproduct", "New engineers learn the system, not the codebase. The system is the codebase."],
              ["Quality compounds", "Accessibility, performance, and consistency are inherited by every new surface, not re-litigated per feature."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="lift border border-border bg-card p-6">
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-ink">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
