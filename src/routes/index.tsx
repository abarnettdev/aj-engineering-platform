import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Choreograph } from "@/components/scroll-scene";
import { Tilt3D, FloatLayer, SplitReveal } from "@/components/motion";
import { MaskReveal } from "@/components/mask-reveal";
import { BlueprintIllus } from "@/components/illus";
import headshot from "@/assets/aj-barnett-headshot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AJ Barnett · AI Product Engineer",
      },
      {
        name: "description",
        content:
          "Software engineer building AI-powered products, frontend platforms, and scalable developer systems with React, TypeScript, and production-minded architecture.",
      },
      {
        property: "og:title",
        content: "AJ Barnett · AI Product Engineer",
      },
      {
        property: "og:description",
        content:
          "Ask A.J. is a production AI agent designed and engineered by AJ Barnett to demonstrate production-minded AI product engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const disciplines = [
  {
    k: "01",
    t: "AI Application Engineering",
    d: "Server-side model integration, streamed interfaces, fallback models, circuit breaking, validation, and cost-aware production behavior.",
  },
  {
    k: "02",
    t: "Frontend Architecture",
    d: "Interfaces designed for change, not for demos. Boundaries first, then components.",
  },
  {
    k: "03",
    t: "Backend & System Design",
    d: "API contracts, data shape, service seams. The parts of the product no user sees, but every user feels.",
  },
  {
    k: "04",
    t: "Product Engineering",
    d: "Ship the outcome, not the ticket. Own the surface area from problem to release.",
  },
  {
    k: "05",
    t: "Technical Leadership",
    d: "Multiply teams. Lower ambiguity. Make the next decision cheaper than the last.",
  },
  {
    k: "06",
    t: "Design Systems",
    d: "Tokens, primitives, motion, docs, accessibility, one chapter of the work, not the thesis.",
  },
  {
    k: "07",
    t: "Accessibility",
    d: "WCAG 2.1 AA and Section 508 as product quality, verified, never a compliance checkbox.",
  },
  {
    k: "08",
    t: "AI as Leverage",
    d: "Model-assisted workflows used to widen the surface I can hold. Execution accelerates. Judgment stays human.",
  },
  {
    k: "09",
    t: "Engineering Judgment",
    d: "The compounding asset. Knowing which problems are worth solving, and which tradeoffs to refuse.",
  },
];

function Home() {
  return (
    <>
      {/* HERO, cinematic, layered engineering artifacts, split reveal headline */}
      <section className="relative overflow-hidden border-b border-border/70 bg-background">
        {/* Blueprint grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
          }}
        />

        <div className="container-page relative grid gap-10 py-14 md:grid-cols-[1.1fr_1fr] md:py-16 lg:py-20">
          <div className="relative">
            {/* Mobile-only engineer's ID badge, compact horizontal card */}
            <div className="mb-6 md:hidden">
              <div className="relative flex items-stretch border border-border bg-background shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]">
                <div className="relative aspect-square w-24 shrink-0 overflow-hidden bg-surface">
                  <img
                    src={headshot.url}
                    alt="Portrait of AJ Barnett, product-minded systems engineer."
                    className="h-full w-full object-cover grayscale-[0.15] contrast-[1.02]"
                    loading="eager"
                    decoding="async"
                  />
                  <span
                    aria-hidden
                    className="absolute left-1 top-1 h-2 w-2 border-l border-t border-gold"
                  />
                  <span
                    aria-hidden
                    className="absolute right-1 top-1 h-2 w-2 border-r border-t border-gold"
                  />
                  <span
                    aria-hidden
                    className="absolute left-1 bottom-1 h-2 w-2 border-l border-b border-gold"
                  />
                  <span
                    aria-hidden
                    className="absolute right-1 bottom-1 h-2 w-2 border-r border-b border-gold"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between border-l border-border p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="mono text-[9px] uppercase tracking-[0.24em] text-gold">
                      ID · 001
                    </p>
                    <p className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                      Est. 2001
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-[13px] font-semibold uppercase leading-tight tracking-tight text-ink">
                      AJ Barnett
                    </p>
                    <p className="mono mt-1 text-[9px] uppercase leading-relaxed tracking-[0.22em] text-muted-foreground">
                      Systems Engineer · Judgment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Reveal>
              <p className="mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                <span className="text-gold">AI product engineer</span>
                <span className="mx-3 text-border-strong">·</span>
                React + TypeScript
                <span className="mx-3 text-border-strong">·</span>
                Production systems
              </p>
            </Reveal>

            <h1 className="mt-6 text-balance font-display uppercase text-[2.2rem] leading-[1.02] tracking-[-0.045em] text-ink md:text-[3.1rem] lg:text-[3.6rem]">
              <span className="block">
                <SplitReveal stagger={0.06} y={40}>
                  I chase problems
                </SplitReveal>
              </span>
              <span className="block">
                <SplitReveal delay={0.15} stagger={0.06} y={40}>
                  worth solving,
                </SplitReveal>
              </span>
              <span
                className="mt-2 block font-accent italic normal-case text-gold"
                style={{ letterSpacing: "-0.01em", lineHeight: 1.15 }}
              >
                <SplitReveal delay={0.35} stagger={0.05} y={40}>
                  not technologies.
                </SplitReveal>
              </span>
            </h1>

            <Reveal delay={520}>
              <div className="mt-5 h-px w-32 origin-left bg-gold rule-in" />
            </Reveal>

            <Reveal delay={620}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Software engineer building AI-powered products, frontend
                platforms, and scalable developer systems. I combine nearly two
                decades of software engineering experience with modern AI
                orchestration, React, TypeScript, server architecture, and
                enterprise platform engineering.
              </p>
            </Reveal>

            <Reveal delay={720}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/ask-aj"
                  className="group tactile inline-flex cursor-pointer items-center gap-2 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-gold hover:text-ink"
                >
                  Ask A.J.
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/work"
                  className="group tactile inline-flex cursor-pointer items-center gap-2 border border-border-strong px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-all hover:border-gold hover:text-gold"
                >
                  Explore my engineering work
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Layered cinematic artifact composition */}
          <div
            className="relative hidden min-h-[460px] md:block"
            style={{ perspective: "1400px" }}
          >
            {/* Decorative wire connector between panels, draws once on mount */}
            <svg
              aria-hidden
              viewBox="0 0 400 560"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <linearGradient id="hero-wire" x1="0" y1="0" x2="1" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--gold)"
                    stopOpacity="0.05"
                  />
                  <stop
                    offset="50%"
                    stopColor="var(--gold)"
                    stopOpacity="0.7"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--gold)"
                    stopOpacity="0.05"
                  />
                </linearGradient>
              </defs>
              <path
                d="M 320 90 Q 200 220, 90 300 T 320 480"
                fill="none"
                stroke="url(#hero-wire)"
                strokeWidth="1"
                strokeDasharray="3 6"
                className="rule-in"
                style={{ strokeDashoffset: 0 }}
              />
            </svg>

            {/* Live status chip */}
            <div className="absolute right-0 top-0 z-20 flex items-center gap-2 border border-border bg-background/90 px-3 py-1.5 backdrop-blur">
              <span
                aria-hidden
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold"
              />
              <span className="mono text-[9px] uppercase tracking-[0.24em] text-ink">
                System · v4.2 · shipping
              </span>
            </div>

            {/* Back layer, architecture blueprint */}
            <FloatLayer
              depth={-0.6}
              rotate={-3}
              className="absolute right-[-2rem] top-10 w-[78%]"
            >
              <div className="float-idle-a">
                <Tilt3D max={4} glare={false}>
                  <MaskReveal delay={200}>
                    <div className="border border-border bg-surface shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]">
                      <BlueprintIllus label="Architecture" />
                    </div>
                  </MaskReveal>
                </Tilt3D>
              </div>
            </FloatLayer>

            {/* Mid layer, code / token panel */}
            <FloatLayer
              depth={0.2}
              rotate={2}
              className="absolute left-0 top-[42%] w-[62%]"
            >
              <div className="float-idle-b">
                <Tilt3D max={6} glare>
                  <div className="border border-border bg-card shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center gap-1.5 border-b border-border bg-surface/70 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-border-strong/70" />
                      <span className="h-2 w-2 rounded-full bg-border-strong/50" />
                      <span className="h-2 w-2 rounded-full bg-border-strong/30" />
                      <span className="mono ml-3 text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                        tokens.ts
                      </span>
                    </div>
                    <pre className="mono overflow-hidden p-4 text-[11px] leading-relaxed text-foreground/85">
                      {`export const semantic = {
  color: {
    action:  { primary: `}
                      <span className="text-gold">{`'brand.600'`}</span>
                      {` },
    surface: { raised:  `}
                      <span className="text-gold">{`'neutral.50'`}</span>
                      {` },
    text:    { primary: `}
                      <span className="text-gold">{`'neutral.900'`}</span>
                      {` },
  },
  space:  { 1: 4, 2: 8, 3: 12, 4: 16 },
  motion: { ease: `}
                      <span className="text-gold">{`'cubic-bezier(.22,1,.36,1)'`}</span>
                      {` },
} as const;`}
                    </pre>
                  </div>
                </Tilt3D>
              </div>
            </FloatLayer>

            {/* Front layer, engineer's ID badge, the human behind the systems */}
            <FloatLayer
              depth={0.9}
              rotate={-1}
              className="absolute right-4 bottom-6 w-[48%]"
            >
              <div className="float-idle-c">
                <Tilt3D max={10}>
                  <div className="border border-border bg-background shadow-[0_50px_100px_-30px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center justify-between border-b border-border bg-surface/70 px-3 py-2">
                      <p className="mono text-[9px] uppercase tracking-[0.24em] text-gold">
                        ID · 001
                      </p>
                      <p className="mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        Est. 2001
                      </p>
                    </div>
                    <div className="relative aspect-square overflow-hidden bg-surface">
                      <img
                        src={headshot.url}
                        alt="Portrait of AJ Barnett, product-minded systems engineer."
                        className="h-full w-full object-cover grayscale-[0.15] contrast-[1.02]"
                        loading="eager"
                        decoding="async"
                      />
                      {/* corner registration marks on the portrait */}
                      <span
                        aria-hidden
                        className="absolute left-1.5 top-1.5 h-2.5 w-2.5 border-l border-t border-gold"
                      />
                      <span
                        aria-hidden
                        className="absolute right-1.5 top-1.5 h-2.5 w-2.5 border-r border-t border-gold"
                      />
                      <span
                        aria-hidden
                        className="absolute left-1.5 bottom-1.5 h-2.5 w-2.5 border-l border-b border-gold"
                      />
                      <span
                        aria-hidden
                        className="absolute right-1.5 bottom-1.5 h-2.5 w-2.5 border-r border-b border-gold"
                      />
                    </div>
                    <div className="border-t border-border p-3">
                      <p className="font-display text-[13px] font-semibold uppercase leading-tight tracking-tight text-ink">
                        AJ Barnett
                      </p>
                      <p className="mono mt-1 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        Systems Engineer · Judgment
                      </p>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            </FloatLayer>

            {/* corner registration marks */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {[
                "left-0 top-8",
                "right-0 top-8",
                "left-0 bottom-8",
                "right-0 bottom-8",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} h-3 w-3 border-l border-t border-gold/60`}
                />
              ))}
            </div>

            {/* micro-labels */}
            <p className="mono absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Problems · Judgment · Systems
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-surface/30">
        <div className="container-page grid gap-10 py-20 md:grid-cols-[0.9fr_1.4fr] md:py-28">
          <Reveal>
            <div>
              <Eyebrow>Featured Experience</Eyebrow>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl">
                Ask A.J.
                <br />
                <span className="font-accent italic normal-case text-gold">
                  is the portfolio proof.
                </span>
              </h2>
              <p className="mt-7 max-w-md text-[17px] leading-relaxed text-foreground/85">
                A production AI agent designed and engineered by AJ Barnett,
                built to show how intelligent product experiences work when the
                model is only one piece of a resilient system.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/ask-aj"
                  className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background hover:bg-gold hover:text-ink"
                >
                  Try Ask A.J.
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/work/ask-aj"
                  className="inline-flex items-center gap-2 border border-border-strong px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink hover:border-gold hover:text-gold"
                >
                  Read the case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "OpenAI Responses API with server-owned context",
                "NDJSON streaming for visible, responsive answers",
                "Request validation, origin checks, and cost controls",
                "Retries, fallback model, cached answers, and graceful degradation",
                "Curated portfolio knowledge with retrieval-ready structure",
                "React and TypeScript interface built for recruiter conversations",
              ].map((item) => (
                <div key={item} className="border border-border bg-card p-5">
                  <p className="text-sm leading-relaxed text-foreground/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROOF, breadth + depth across the full product lifecycle */}
      <section className="border-b border-border/70 bg-background">
        <div className="container-page grid gap-16 py-24 md:grid-cols-[1fr_1.6fr] md:py-32">
          <Reveal>
            <div className="md:sticky md:top-24 md:self-start">
              <Eyebrow>What I carry into the room</Eyebrow>
              <h2 className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl">
                Breadth,
                <br />
                <span className="font-accent italic normal-case text-gold">
                  with depth.
                </span>
              </h2>
              <div className="mt-6 h-px w-24 bg-gold" />
              <p className="mt-8 max-w-md text-muted-foreground">
                A staff engineer's job is holding the whole product in mind,
                frontend, backend, systems, the seams between them, and knowing
                which lever to pull first. Frameworks come and go. These
                disciplines compound.
              </p>
              <Link
                to="/engineering"
                className="group mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink hover:text-gold"
              >
                <span className="story-link">How I think</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Choreograph
            className="relative"
            stagger={0.12}
            y={32}
            duration={1.0}
          >
            <ol className="relative space-y-6 border-l border-border pl-8">
              {disciplines.map((r) => (
                <li key={r.k} className="group relative">
                  <span
                    aria-hidden
                    className="absolute -left-[35px] top-2 h-2 w-2 rounded-full bg-border-strong transition-colors group-hover:bg-gold"
                  />
                  <div className="mono flex items-baseline gap-3 text-[10px] uppercase tracking-[0.24em] text-gold">
                    {r.k}
                    <span className="h-px flex-1 bg-border transition-colors group-hover:bg-gold" />
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                    {r.t}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {r.d}
                  </p>
                </li>
              ))}
            </ol>
          </Choreograph>
        </div>
      </section>

      {/*
        Metrics, featured work, tech evolution, and timeline previews used to
        live here. They each answer a different question, cut so Home answers
        only one: Who is AJ? Those chapters live at /work, /timeline,
        /engineering, /systems, /writing.
      */}

      {/* CLOSING */}
      <div className="relative overflow-hidden border-t border-border/70">
        <div className="container-page relative py-28 md:py-36">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>End of Chapter One</Eyebrow>
              <h2 className="mt-8 text-balance font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-7xl">
                The next chapter
                <br />
                <span className="font-accent italic text-gold">
                  is being written.
                </span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground">
                If your team is building something worth showing up for, I'd
                love to hear about it.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background hover:bg-gold hover:text-ink"
                >
                  Start a conversation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/writing"
                  className="inline-flex items-center gap-2 border border-border-strong px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink hover:border-gold hover:text-gold"
                >
                  Read field notes
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
