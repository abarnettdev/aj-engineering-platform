import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PageHero, Accent } from "@/components/page-hero";
import { SystemsMap } from "@/components/composites/systems-map";
import { AiLifecycle } from "@/components/composites/ai-lifecycle";
import { MentalModels } from "@/components/composites/mental-models";
import { Magnetic } from "@/components/motion";
import heroImage from "@/assets/hero-engineering.jpg";

export const Route = createFileRoute("/engineering")({
  head: () => ({
    meta: [
      { title: "How I think · AJ Barnett" },
      {
        name: "description",
        content:
          "How AJ Barnett frames AI-powered product engineering, frontend platforms, architecture tradeoffs, risk, and reliable software systems.",
      },
      { property: "og:title", content: "How I think · AJ Barnett" },
      {
        property: "og:description",
        content:
          "AI application engineering, frontend platform judgment, React, TypeScript, and production-minded systems thinking.",
      },
    ],
  }),
  component: Engineering,
});

// Featured principle, the frame everything else hangs off.
const featured = {
  n: "01",
  t: "Solve the system before the code",
  d: "Most bugs are architectural bugs in disguise. The cheapest fix is a decision made two layers up, before the first file is opened.",
};

// Six working principles that answer "how does AJ think?", not a skills list.
// One of them (#04) is the risk principle, rendered in oxblood on the card.
const supporting = [
  {
    n: "02",
    t: "Composition over configuration",
    d: "Fewer props, sharper primitives. A component with slots outlives a component with thirty flags, and every layer above it stays honest.",
  },
  {
    n: "03",
    t: "Data shape decides everything",
    d: "The interface, the API, the failure modes, the analytics, all of them inherit from the shape of the data. Get that wrong and no framework saves you.",
  },
  {
    n: "04",
    t: "Name the risk before the plan",
    risk: true,
    d: "Every meaningful decision has a thing that could quietly go wrong. Marking it in the margin, in oxblood, not in a Slack thread, is what separates a plan from a wish.",
  },
  {
    n: "05",
    t: "Accessibility is product quality",
    d: "WCAG 2.1 AA and Section 508 are the floor. Keyboard flow, focus visibility, and reduced motion are how a product respects the humans it was built for.",
  },
  {
    n: "06",
    t: "The paved road is the product",
    d: "Developer experience isn't a nice-to-have. Fast local loops, sharp types, and high-signal docs are what make quality inevitable at the tenth engineer, not the first.",
  },
  {
    n: "07",
    t: "AI expands, engineers decide",
    d: "AI widens the surface I can hold at once. Architecture, tradeoffs, the last read before ship, those stay human. Leverage, not authorship.",
  },
];

function Engineering() {
  return (
    <>
      {/* HERO */}
      <PageHero
        eyebrow="How I think · Chapter 03"
        chapter="03"
        chapterLabel="06"
        image={heroImage}
        imageAlt="Control-room whiteboard covered in hand-drawn architecture: nodes, contracts, and a critical path traced in gold with a single risk noted in oxblood."
        imageCaption="Systems thinking"
        imageMeta="Practice"
        headline={
          <>
            I solve the system
            <br />
            <Accent>before I solve the code.</Accent>
          </>
        }
        description={
          <>
            The operating system underneath the work, how I frame a problem,
            name the risk, weigh the tradeoff, and treat AI as leverage without
            ceding the last read.
          </>
        }
      />

      {/* SYSTEMS MAP, signature diagram, breaks the container slightly */}
      <section
        aria-labelledby="systems-map-heading"
        className="relative border-b border-border/70 bg-background"
      >
        {/* subtle blueprint texture (background only) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 30%, transparent 78%)",
          }}
        />

        <div className="container-page relative grid min-w-0 gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16 lg:py-28">
          {/* Left: framing */}
          <Reveal>
            <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                Fig. 01 · The Operating System
              </p>
              <h2
                id="systems-map-heading"
                className="mt-6 font-display font-medium leading-[0.98] tracking-tight text-ink"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
              >
                Inputs in.
                <br />
                <span className="font-accent italic normal-case text-gold">
                  Production out.
                </span>
              </h2>
              <div className="mt-6 h-px w-24 bg-gold" />
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-foreground/85">
                Product intent, users, constraints, and the systems already in
                the ground, all of it passes through the same axis before it
                becomes architecture, interfaces, accessibility, and
                performance.
              </p>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground/70">
                Engineering judgment isn&apos;t a step in the process. It&apos;s
                the thing the process turns on.
              </p>
            </div>
          </Reveal>

          {/* Right: the dimensional map, contained, never bleeds */}
          <Reveal delay={140}>
            <div className="relative min-w-0">
              <SystemsMap />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="ai-product-engineering-heading"
        className="border-b border-border/70 bg-card"
      >
        <div className="container-page grid gap-10 py-20 md:grid-cols-[0.9fr_1.4fr] md:py-28">
          <Reveal>
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                From Frontend to AI Product Engineering
              </p>
              <h2
                id="ai-product-engineering-heading"
                className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl"
              >
                The same foundation,
                <br />
                <span className="font-accent italic normal-case text-gold">
                  a larger product surface.
                </span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-[17px] leading-relaxed text-foreground/85">
              <p>
                Reusable component APIs, design systems, platform standards,
                documentation systems, cross-team adoption workflows,
                accessibility, scalable frontend architecture, and server
                integrations are the same muscles required for trustworthy
                AI-powered applications.
              </p>
              <p>
                CDW and Legato remain important proof: AJ can lead enterprise
                engineering initiatives, coordinate across product, design, QA,
                and engineering, build reusable platforms, and operate at
                organizational scale. Ask A.J. turns that foundation toward
                modern AI product engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES, 1 featured + 5 supporting, staggered */}
      <section
        aria-labelledby="principles-heading"
        className="border-b border-border/70 bg-surface/30"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-end md:gap-16">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Chapter · Principles
                </p>
                <h2
                  id="principles-heading"
                  className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl"
                >
                  Six rules
                  <br />
                  <span className="font-accent italic normal-case text-gold">
                    I keep coming back to.
                  </span>
                </h2>
              </div>
              <p className="max-w-lg text-[17px] leading-relaxed text-foreground/85 md:justify-self-end md:text-right">
                Not a manifesto. Working principles, earned, re-tested, and
                still useful after twenty-five years of shipping.
              </p>
            </div>
          </Reveal>

          <div
            className="mt-14 grid gap-6 md:grid-cols-2"
            style={{ perspective: "1400px" }}
          >
            {/* Featured principle spans wide */}
            <Reveal className="md:col-span-2">
              <article className="group edge-gold relative flex h-full flex-col justify-between overflow-hidden border border-ink bg-ink p-8 text-background md:min-h-[16rem] md:flex-row md:items-end md:gap-10 md:p-12">
                <div className="relative z-10">
                  <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                    Principle {featured.n} · Featured
                  </p>
                  <h3 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-background md:text-5xl">
                    {featured.t}
                  </h3>
                </div>
                <p className="relative z-10 mt-6 max-w-md text-[17px] leading-relaxed text-background/80 md:mt-0">
                  {featured.d}
                </p>
                {/* oversized numeral escapes the container */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-10 -right-4 font-display text-[10rem] font-black leading-none tracking-[-0.06em] text-gold/20 md:text-[18rem]"
                >
                  {featured.n}
                </span>
              </article>
            </Reveal>

            {supporting.map((p, i) => (
              <Reveal
                key={p.n}
                delay={80 + i * 60}
                className={i % 2 === 1 ? "md:translate-y-6" : ""}
              >
                <article
                  className={
                    p.risk
                      ? "group relative flex h-full flex-col border border-oxblood/60 bg-card p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]"
                      : "group edge-gold relative flex h-full flex-col border border-border bg-card p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]"
                  }
                >
                  <div
                    className={`flex items-baseline justify-between border-b pb-3 ${
                      p.risk ? "border-oxblood/40" : "border-border"
                    }`}
                  >
                    <span
                      className={`mono text-[10px] uppercase tracking-[0.28em] ${
                        p.risk ? "text-oxblood" : "text-gold"
                      }`}
                    >
                      {p.risk ? `Principle ${p.n} · Risk` : `Principle ${p.n}`}
                    </span>
                    <span
                      aria-hidden
                      className="font-display text-3xl font-black leading-none tracking-tight"
                      style={{
                        color: p.risk
                          ? "color-mix(in oklab, var(--oxblood) 22%, transparent)"
                          : "color-mix(in oklab, var(--foreground) 8%, transparent)",
                      }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.6rem] font-medium leading-[1.05] tracking-tight text-ink">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/85">
                    {p.d}
                  </p>
                  {p.risk && (
                    <span
                      aria-hidden
                      className="mono absolute right-4 top-4 rotate-2 border border-oxblood/60 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.24em] text-oxblood"
                    >
                      Review mark
                    </span>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY, editorial, overlapping quote card */}
      <section
        aria-labelledby="a11y-heading"
        className="relative border-b border-border/70 bg-background"
      >
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.05fr] md:gap-20">
            <Reveal>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Chapter · Accessibility
                </p>
                <h2
                  id="a11y-heading"
                  className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-[3.6rem]"
                >
                  Accessibility is not compliance.
                  <br />
                  <span className="font-accent italic normal-case text-gold">
                    It&apos;s product quality.
                  </span>
                </h2>
                <div className="mt-6 h-px w-24 bg-gold" />

                <div className="mt-10 max-w-xl space-y-6 text-[17px] leading-[1.7] text-foreground/90">
                  <p>
                    <strong className="font-semibold text-ink">
                      WCAG 2.1 AA
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-ink">
                      Section 508
                    </strong>{" "}
                    are the floor of what a product owes the humans using it,
                    not a checklist to survive an audit.
                  </p>
                  <p>
                    The ceiling is quality: keyboard-first flows, visible focus
                    states, semantic HTML, reduced-motion parity, screen-reader
                    announcements that match the visual truth, and contrast that
                    holds up in real lighting.
                  </p>
                  <p className="text-foreground/75">
                    Every accessibility investment pays back somewhere else,
                    tighter component APIs, better test coverage, faster
                    onboarding. Quality compounds because the constraints force
                    clarity.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right column: pull-quote + micro-list, overlapping */}
            <Reveal delay={120}>
              <div className="relative">
                {/* pull quote card, escapes left */}
                <blockquote className="relative z-10 border border-ink bg-ink p-8 text-background md:-ml-16 md:p-10">
                  <p className="mono mb-6 text-[10px] uppercase tracking-[0.28em] text-gold">
                    Field note
                  </p>
                  <p className="font-display text-[1.7rem] font-medium leading-[1.15] tracking-tight text-background md:text-[2rem]">
                    &ldquo;The accessibility investment{" "}
                    <span className="font-accent italic normal-case text-gold">
                      pays back somewhere else.
                    </span>{" "}
                    Every time.&rdquo;
                  </p>
                </blockquote>

                {/* checklist, slightly offset behind */}
                <ul className="relative mt-10 grid gap-3 md:grid-cols-2">
                  {[
                    ["Keyboard-first", "Every path reachable without a mouse."],
                    ["Semantic HTML", "Landmarks, headings, roles by default."],
                    [
                      "Focus management",
                      "Visible, predictable, trapped when it should be.",
                    ],
                    [
                      "Screen-reader parity",
                      "Announcements match the visual truth.",
                    ],
                    ["Reduced motion", "Motion is a feature, not a mandate."],
                    ["Colour contrast", "AA minimum, AAA where it counts."],
                  ].map(([t, d]) => (
                    <li
                      key={t}
                      className="edge-gold group border border-border bg-card p-4"
                    >
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                        {t}
                      </p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/85">
                        {d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI, lifecycle rail */}
      <section
        aria-labelledby="ai-heading"
        className="relative border-b border-border/70 bg-surface/40"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Chapter · AI-Assisted Engineering
                </p>
                <h2
                  id="ai-heading"
                  className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-[3.6rem]"
                >
                  AI accelerates me.
                  <br />
                  <span className="font-accent italic normal-case text-gold">
                    It does not replace me.
                  </span>
                </h2>
              </div>
              <p className="max-w-lg text-[17px] leading-relaxed text-foreground/85">
                AI belongs inside a deliberate engineering loop: exploration,
                scaffolding, review, documentation, and product reasoning. Each
                tool has a role, and the engineer stays at the centre.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <AiLifecycle />
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="edge-gold group h-full border border-border bg-card p-8">
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Where AI helps
                </p>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/85">
                  {[
                    "Widening the option space before a decision",
                    "Repeatable setup, migrations, and refactors at scale",
                    "Test scaffolding and edge-case enumeration",
                    "Documentation and changelog drafting",
                    "Onboarding into unfamiliar codebases",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-4 shrink-0 bg-gold"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="edge-gold group h-full border border-ink bg-ink p-8 text-background">
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Where judgment stays
                </p>
                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-background/85">
                  {[
                    "System architecture and long-term tradeoffs",
                    "Product framing and outcome definition",
                    "Accessibility, security, and compliance calls",
                    "Team communication and stakeholder trust",
                    "The final read on quality before ship",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-4 shrink-0 bg-gold"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODELS BEFORE IMPLEMENTATION */}
      <section
        aria-labelledby="models-heading"
        className="border-b border-border/70 bg-background"
      >
        <div className="container-page py-20 md:py-28">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Chapter · Mental Models
                </p>
                <h2
                  id="models-heading"
                  className="mt-6 font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink md:text-6xl"
                >
                  Models before
                  <br />
                  <span className="font-accent italic normal-case text-gold">
                    implementation.
                  </span>
                </h2>
              </div>
              <p className="max-w-lg text-[17px] leading-relaxed text-foreground/85">
                Three of the pictures I draw before I write anything down. The
                code exists to make one of these true, nothing more.
              </p>
            </div>
          </Reveal>

          <div className="mt-14" style={{ perspective: "1600px" }}>
            <MentalModels />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-border/70 bg-background">
        <div className="container-page py-20 text-center md:py-28">
          <Reveal>
            <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              End of Chapter Three
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink md:text-5xl">
              Read the field notes,{" "}
              <span className="font-accent italic normal-case text-gold">
                or start a conversation.
              </span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Link
                  to="/writing"
                  className="group tactile inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-gold hover:text-ink"
                >
                  Read the practice
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/contact"
                  className="group tactile inline-flex items-center gap-2 border border-border-strong px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-all hover:border-gold hover:text-gold"
                >
                  Start a conversation
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
