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
    src: "/visuals/product-system-studio.webp",
    alt: "Floating interface, component, and code panels showing the foundations of product work.",
    caption: "01 · From first page to product systems",
  },
  {
    src: "/visuals/client-work-studio.webp",
    alt: "Three real client websites presented as polished browser mockups.",
    caption: "02 · Design became production work",
  },
  {
    src: "/visuals/client-work-studio.webp",
    alt: "A studio composition of production client websites across real estate, hospitality, and health care.",
    caption: "04 · Marketing, measured in outcomes",
  },
  {
    src: "/visuals/client-work-studio.webp",
    alt: "Real production websites arranged as a cohesive multi-project browser composition.",
    caption: "05 · Reusable systems for client teams",
  },
  {
    src: "/visuals/platform-studio.webp",
    alt: "A secure financial-platform interface displayed on a polished tablet device.",
    caption: "06 · Fintech · trust and rigor",
  },
  {
    src: "/visuals/design-system-studio.webp",
    alt: "AJ Barnett's interactive design-system playground displayed on a studio laptop.",
    caption: "07 · Enterprise design-system leadership",
  },
  {
    src: "/visuals/ask-aj-studio.webp",
    alt: "The real Ask A.J. interface displayed on a laptop in a dark coral studio scene.",
    caption: "08 · AI application engineering",
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
        image="/visuals/product-system-studio.webp"
        imageAlt="A polished composition of component panels and code representing a career spanning design and engineering."
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
                      <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
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

                  <blockquote className="rule-gold mt-8 pl-5">
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
