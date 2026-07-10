import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { articles } from "@/content/site-data";
import { PageHero, Accent } from "@/components/page-hero";
import { ArticleCard } from "@/components/composites/article-card";
import heroImage from "@/assets/hero-writing.jpg";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: "Field Notes, AJ Barnett" },
      {
        name: "description",
        content:
          "Essays on frontend architecture, design systems, accessibility, and AI-assisted engineering.",
      },
    ],
  }),
  component: Writing,
});

function Writing() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        eyebrow="Field Notes · Chapter 05"
        chapter="05"
        chapterLabel="06"
        image={heroImage}
        imageAlt="Open notebook with fountain pen and coffee, the daily practice of writing between shipping."
        imageCaption="Written between shipping"
        imageMeta="Ongoing"
        headline={
          <>
            Documentation
            <br />
            is a
            <br />
            <Accent>product.</Accent>
          </>
        }
        description={
          <>
            Short essays on frontend architecture, design systems,
            accessibility, and AI-assisted engineering.
          </>
        }
      />

      <Section>
        <Reveal>
          <div style={{ perspective: "1400px" }}>
            <ArticleCard
              to="/writing/$slug"
              params={{ slug: featured.slug }}
              featured
            >
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
                <div className="flex flex-col">
                  <ArticleCard.Meta tag={featured.tag} read={featured.read} featured />
                  <ArticleCard.Title size="lg">{featured.title}</ArticleCard.Title>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    {featured.dek}
                  </p>
                  <ArticleCard.Footer>Read the essay</ArticleCard.Footer>
                </div>
                <div className="relative">
                  <FeaturedArt />
                  <div className="mono absolute right-3 top-3 text-[10px] uppercase tracking-[0.22em] text-gold">
                    {featured.read} · {featured.date}
                  </div>
                </div>
              </div>
            </ArticleCard>
          </div>
        </Reveal>

        <div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1400px" }}
        >
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ArticleCard to="/writing/$slug" params={{ slug: p.slug }}>
                <ArticleCard.Meta tag={p.tag} read={p.read} />
                <ArticleCard.Title>{p.title}</ArticleCard.Title>
                <ArticleCard.Dek>{p.dek}</ArticleCard.Dek>
                <ArticleCard.Footer />
              </ArticleCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

function FeaturedArt() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-ink">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full text-background">
        <defs>
          <pattern id="feat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
          <linearGradient id="feat-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--gold)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#feat-grid)" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3, 4].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={40 + c * 62}
              y={40 + r * 50}
              width="52"
              height="40"
              fill={r === 1 && c === 2 ? "var(--gold)" : "none"}
              stroke="currentColor"
              strokeOpacity={r === 1 && c === 2 ? 0 : 0.25}
              strokeWidth="1"
            />
          )),
        )}
        <rect x="164" y="90" width="52" height="40" fill="url(#feat-glow)" />
      </svg>
    </div>
  );
}
