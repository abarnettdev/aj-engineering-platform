import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { TechBadge } from "@/components/badge";
import { timeline } from "@/content/site-data";
import { ChapterArtwork } from "@/components/composites/chapter-artwork";
import { PageHero, Accent } from "@/components/page-hero";
import { JourneyRail } from "@/components/composites/journey-rail";
import heroImage from "@/assets/hero-timeline.jpg";
import ch1 from "@/assets/chapter-01-first-website.jpg";
import ch2 from "@/assets/chapter-02-creative-technologist.jpg";
import ch3 from "@/assets/chapter-03-realidreams.jpg";
import ch4 from "@/assets/chapter-04-caldwell-kerr.jpg";
import ch5 from "@/assets/chapter-05-priority.jpg";
import ch6 from "@/assets/chapter-06-midland.jpg";
import ch7 from "@/assets/chapter-07-cdw-legato.jpg";
import ch8 from "@/assets/chapter-08-now.jpg";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Journey · AJ Barnett" },
      {
        name: "description",
        content:
          "2001 to 2026. Not a résumé, a story of chasing problems across eight chapters, and the engineering mindset each one forged.",
      },
      { property: "og:title", content: "Journey · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Eight chapters. Technologies came and went. The problems, and the judgment to solve them, compounded.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Timeline,
});

const chapterArt: Array<{ src: string; alt: string; caption: string }> = [
  {
    src: ch1,
    alt: "Illustration of a beige CRT monitor on a small stand, its screen showing a simple pink browser window with the word HTML, representing the very first web page built in 2001.",
    caption: "01 · First website · HTML",
  },
  {
    src: ch2,
    alt: "Illustration of a creative technologist's toolkit: a graphics tablet with color wheel and stylus, a 3D wireframe cube, and an After Effects motion timeline, representing design, motion, and 3D craft.",
    caption: "02 · Design + motion + 3D",
  },
  {
    src: ch3,
    alt: "Illustration of an independent design studio desk: stacked brand identity samples, an open magazine of logo studies, a brand mark on a display podium, and a laptop showing a website mockup, representing running a full-service studio.",
    caption: "03 · Independent studio",
  },
  {
    src: ch4,
    alt: "Illustration of a laptop screen displaying a marketing campaign dashboard with a rising conversion chart and upward gold arrow, representing web work that improved conversion for agency clients.",
    caption: "04 · Marketing → conversion",
  },
  {
    src: ch5,
    alt: "Illustration of modular content blocks and a cursor assembling them into a page frame, next to a rendered CMS preview, representing modular content management systems built for editors.",
    caption: "05 · Modular CMS systems",
  },
  {
    src: ch6,
    alt: "Illustration of a small bank vault marked with a gold shield, a padlock, stacks of gold coins, and a secure transaction card, representing engineering for a regulated fintech product.",
    caption: "06 · Fintech · trust & rigor",
  },
  {
    src: ch7,
    alt: "Illustration of a central gold design-token coin with thin lines radiating out to surrounding UI components: a button, a toggle, an input, and a card, representing the Legato enterprise design system.",
    caption: "07 · Enterprise design system",
  },
  {
    src: ch8,
    alt: "Illustration of an engineer's workstation with two laptops and a monitor, a glowing AI knowledge-orb hovering above with two agent nodes orbiting it, representing today's AI-assisted engineering practice.",
    caption: "08 · AI-assisted engineering",
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
  "Founder, RealiDreams": "realidreams",
};

function Timeline() {
  return (
    <>
      <PageHero
        eyebrow="2001 → 2026 · Chapter 02"
        chapter="02"
        chapterLabel="06"
        image={heroImage}
        imageAlt="A long empty highway stretching to the horizon, a career built one mile at a time."
        imageCaption="One road · Many chapters"
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
