import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { TechBadge } from "@/components/badge";
import { timeline } from "@/content/site-data";
import { ChapterArtwork } from "@/components/composites/chapter-artwork";
import { PageHero, Accent } from "@/components/page-hero";
import { JourneyRail } from "@/components/composites/journey-rail";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Journey · AJ Barnett" },
      {
        name: "description",
        content:
          "2001 to 2026. Not a résumé, a story of chasing problems across seven chapters, and the engineering mindset each one forged.",
      },
      { property: "og:title", content: "Journey · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Seven chapters. Technologies came and went. The problems, and the judgment to solve them, compounded.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Timeline,
});

const chapterArt: Array<{ src: string; alt: string; caption: string }> = [
  {
    src: "/visuals/timeline-first-web.webp",
    alt: "An early 2000s workstation with a hand-coded first website, HTML notebook, CRT monitor, and keyboard.",
    caption: "01 · Curiosity became a first website",
  },
  {
    src: "/visuals/timeline-creative-tech.webp",
    alt: "A creative technology workstation combining motion timelines, vector paths, 3D work, and code.",
    caption: "02 · Design and code became one practice",
  },
  {
    src: "/visuals/timeline-affinitiv.webp",
    alt: "Automotive campaigns evolving through Moore and Scarry, Caldwell and Kerr, and Affinitiv into reusable digital advertising modules.",
    caption: "03 · Agency speed became repeatable systems",
  },
  {
    src: "/visuals/timeline-priority.webp",
    alt: "The real LSI Companies, Artisan Eatery, and Hope Hospice sites arranged as a production workflow.",
    caption: "04 · Fifty-plus sites built for handoff",
  },
  {
    src: "/visuals/timeline-equity-trust.webp",
    alt: "Equity Trust educational, calculator, and application flows shown with validation and completion states.",
    caption: "05 · Fintech · trust and rigor",
  },
  {
    src: "/visuals/timeline-legato.webp",
    alt: "CDW product listing and detail screens surrounded by reusable Legato commerce component specimens.",
    caption: "06 · Enterprise design-system leadership",
  },
  {
    src: "/visuals/timeline-ai.webp",
    alt: "The real Ask A.J. interface with a citation card, streaming status, and server-only trust boundary.",
    caption: "07 · AI application engineering",
  },
];

/**
 * Anchor IDs for deep-linking from the Work page. Keys are `chapter` strings
 * from site-data; values match the `slug` on the matching case study so
 * `/timeline#<slug>` scrolls straight to the right chapter.
 */
const chapterAnchor: Record<string, string> = {
  Now: "now",
  "CDW, Legato Design System": "cdw-legato",
  "Midland Trust": "midland-trust",
  "Priority Marketing": "priority-marketing",
  "Caldwell & Kerr": "affinitiv",
};

function Timeline() {
  return (
    <>
      <PageHero
        eyebrow="2001 → 2026"
        chapter="02"
        chapterLabel="06"
        image="/visuals/timeline-overview-studio.webp"
        imageAlt="A chronological studio timeline moving from an early CRT website through modern product systems and AI engineering."
        imageCaption="One practice · Many chapters"
        imageMeta="Est. 2001"
        headline={
          <>
            Every chapter
            <br />
            solved a
            <br />
            <Accent>bigger problem.</Accent>
          </>
        }
        description={
          <>
            Technologies expired. The problems didn't. Each chapter carries an
            artifact, the tech that defined it, the lesson it taught, and the
            mindset it forged.
          </>
        }
      />

      <Section>
        <JourneyRail
          years={timeline.map((t) => t.year.split("–")[0].split(",")[0])}
        >
          <ol className="relative space-y-24 md:space-y-32 md:border-l md:border-border md:pl-10">
            {timeline.map((t, i) => {
              const art = chapterArt[i] ?? chapterArt[0];
              return (
                <JourneyRail.Chapter
                  key={t.year}
                  id={chapterAnchor[t.chapter]}
                  index={i}
                  year={t.year}
                  chapter={t.chapter}
                  role={t.role}
                  flip={i % 2 === 1}
                  artifact={
                    <ChapterArtwork
                      src={art.src}
                      alt={art.alt}
                      caption={art.caption}
                    />
                  }
                >
                  <p className="mt-7 max-w-xl leading-relaxed text-foreground/85">
                    {t.changed}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        What I learned
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {t.learned}
                      </p>
                    </div>
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-accent-ink">
                        Mindset forged
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {t.forged}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Tech
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {t.tech.map((x) => (
                        <TechBadge key={x}>{x}</TechBadge>
                      ))}
                    </div>
                  </div>

                  <blockquote className="rule-accent mt-8 pl-5">
                    <p className="text-sm italic leading-relaxed text-muted-foreground">
                      → {t.bridge}
                    </p>
                  </blockquote>
                </JourneyRail.Chapter>
              );
            })}
          </ol>
        </JourneyRail>
      </Section>
    </>
  );
}
