import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { TechBadge } from "@/components/badge";
import { Reveal } from "@/components/reveal";
import { Magnetic, Tilt3D } from "@/components/motion";
import { MaskReveal } from "@/components/mask-reveal";
import { workCases, type WorkCase } from "@/content/site-data";
import {
  BlueprintIllus,
  ComponentSystemIllus,
  ArchitectureIllus,
  AutomotiveIllus,
  AiLoopIllus,
} from "@/components/illus";
import { PageHero, Accent } from "@/components/page-hero";
import heroImage from "@/assets/hero-work.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · AJ Barnett" },
      {
        name: "description",
        content:
          "Case studies of AI product engineering, frontend platforms, enterprise design systems, regulated fintech, and product-minded software delivery.",
      },
      { property: "og:title", content: "Work · AJ Barnett" },
      {
        property: "og:description",
        content:
          "AI product engineering, frontend platforms, and enterprise systems, the decisions behind the ship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function CaseIllus({ slug }: { slug: string }) {
  switch (slug) {
    case "ask-aj":
      return <AiLoopIllus />;
    case "cdw-legato":
      return <ComponentSystemIllus />;
    case "midland-trust":
      return <ArchitectureIllus />;
    case "priority-marketing":
      return <BlueprintIllus label="CMS" />;
    case "affinitiv":
      return <AutomotiveIllus />;
    case "realidreams":
      return <AiLoopIllus />;
    default:
      return <BlueprintIllus label="Case" />;
  }
}

function CaseStudy({ w, index }: { w: WorkCase; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <Reveal>
      <article
        id={w.slug}
        aria-labelledby={`case-${w.slug}-title`}
        className="group edge-gold relative border border-border bg-card shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]"
      >
        {/* Header rail */}
        <header className="flex items-baseline justify-between gap-4 border-b border-border px-8 pt-8 md:px-12 md:pt-10">
          <div className="flex items-baseline gap-4">
            <span aria-hidden className="numeral text-6xl md:text-7xl">
              {num}
            </span>
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                {w.company}
              </p>
              <p className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {w.period} · {w.role}
              </p>
            </div>
          </div>
          {w.discipline && (
            <p className="mono hidden max-w-[16rem] text-right text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground md:block">
              {w.discipline}
            </p>
          )}
        </header>

        {/* Body */}
        <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.15fr_1fr] md:gap-14 md:px-12 md:py-14">
          {/* Left: narrative */}
          <div>
            <h2
              id={`case-${w.slug}-title`}
              className="font-display text-3xl font-medium leading-[1.02] tracking-tight text-ink md:text-4xl"
            >
              {w.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              {w.summary}
            </p>

            {/* Structured case-study scan rhythm */}
            <dl className="mt-10 space-y-8">
              {w.challenge && (
                <div className="grid gap-2 border-t border-border pt-6 md:grid-cols-[9rem_1fr] md:gap-8">
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    Challenge
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-foreground/85">
                    {w.challenge}
                  </dd>
                </div>
              )}

              <div className="grid gap-2 border-t border-border pt-6 md:grid-cols-[9rem_1fr] md:gap-8">
                <dt className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                  Role
                </dt>
                <dd className="text-[15px] leading-relaxed text-foreground/85">
                  {w.role}
                </dd>
              </div>

              {w.approach && (
                <div className="grid gap-2 border-t border-border pt-6 md:grid-cols-[9rem_1fr] md:gap-8">
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    Approach
                  </dt>
                  <dd>
                    <ul className="space-y-2.5 text-[15px] leading-relaxed text-foreground/85">
                      {w.approach.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-[0.65rem] h-px w-3 shrink-0 bg-gold"
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}

              {w.impact && (
                <div className="grid gap-2 border-t border-border pt-6 md:grid-cols-[9rem_1fr] md:gap-8">
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    Impact
                  </dt>
                  <dd className="text-[15px] leading-relaxed text-foreground/85">
                    {w.impact}
                  </dd>
                </div>
              )}

              {w.lessons && (
                <div className="grid gap-2 border-t border-border pt-6 md:grid-cols-[9rem_1fr] md:gap-8">
                  <dt className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    Lessons
                  </dt>
                  <dd className="font-accent text-lg italic leading-relaxed text-foreground">
                    “{w.lessons}”
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Right: artifact + metrics + tags */}
          <div className="flex flex-col gap-8">
            <div style={{ perspective: "1400px" }}>
              <MaskReveal>
                <Tilt3D max={5} glare={false} scale={1.01}>
                  <div className="border border-border bg-surface p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
                    <CaseIllus slug={w.slug} />
                  </div>
                </Tilt3D>
              </MaskReveal>
            </div>

            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Stack
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {w.tags.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
              {w.metrics.map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                    {v}
                  </div>
                  <div className="mono mt-1 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA into the fuller story */}
            <div className="mt-2 border-t border-border pt-6">
              <Magnetic strength={0.25}>
                <Link
                  to="/timeline"
                  hash={w.slug === "ask-aj" ? "now" : w.slug}
                  className="group/cta tactile inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink hover:text-gold"
                  aria-label={
                    w.slug === "ask-aj"
                      ? "Read the Now chapter in the journey"
                      : `Read the full ${w.company} chapter in the journey`
                  }
                >
                  <span className="story-link">Read the chapter</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Work() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies · Chapter 01"
        chapter="01"
        chapterLabel="06"
        image={heroImage}
        imageAlt="Modernist glass skyscraper, real teams, real constraints, real outcomes."
        imageCaption="Enterprise scale · Fortune 500"
        imageMeta="Est. 2001"
        headline={
          <>
            The decisions
            <br />
            <Accent>behind the ship.</Accent>
          </>
        }
        description={
          <>
            AI-powered software, frontend platforms, regulated fintech, agency
            systems, and Fortune 500 design systems. Each case reads the same
            way: Challenge, Role, Approach, Impact, Lessons. Judgment first,
            artifacts second.
          </>
        }
      />

      <Section>
        <div className="space-y-10">
          {workCases.map((w, i) => (
            <CaseStudy key={w.slug} w={w} index={i} />
          ))}
        </div>

        {/* Closing CTA */}
        <Reveal>
          <div className="mt-20 border-t border-border pt-12 text-center">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              End of the case studies
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-ink md:text-5xl">
              The rest of the story{" "}
              <span className="font-accent italic normal-case text-gold">
                lives in the journey.
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Link
                  to="/timeline"
                  className="group tactile inline-flex items-center gap-2 bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-all hover:bg-gold hover:text-ink"
                >
                  Walk the timeline
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
          </div>
        </Reveal>
      </Section>
    </>
  );
}
