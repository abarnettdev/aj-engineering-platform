import { type ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Parallax, Tilt3D, FloatLayer } from "@/components/motion";

interface PageHeroProps {
  eyebrow: string;
  chapter: string; // e.g. "01"
  chapterLabel?: string;
  headline: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageMeta?: string;
  actions?: ReactNode;
  /** Micro-tag chips floated above the image for editorial depth */
  chips?: string[];
}

/**
 * PageHero, editorial page hero with cinematic layered image.
 * Image is 4/3 landscape (never dominant), tilts on hover, and is anchored
 * with a floating meta chip + a subtle blueprint grid backdrop.
 */
export function PageHero({
  eyebrow,
  chapter,
  chapterLabel,
  headline,
  description,
  image,
  imageAlt,
  imageCaption,
  imageMeta,
  actions,
  chips,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-background">
      {/* Blueprint backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--ink) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 80% 30%, black 15%, transparent 70%)",
        }}
      />

      <div className="container-page relative grid gap-14 py-14 md:grid-cols-[1.15fr_1fr] md:items-center md:py-20 lg:py-24">
        <div className="relative">
          <Reveal>
            <p className="mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              <span className="text-gold">{chapter}</span>
              <span className="mx-3 text-border-strong">·</span>
              {eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 text-balance font-display uppercase text-[2.4rem] leading-[0.94] tracking-[-0.045em] text-ink md:text-[3.4rem] lg:text-[4.1rem]">
              {headline}
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-4 h-px w-32 origin-left bg-gold rule-in" />
          </Reveal>

          {description && (
            <Reveal delay={280}>
              <div className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {description}
              </div>
            </Reveal>
          )}

          {chips && chips.length > 0 && (
            <Reveal delay={340}>
              <div className="mono mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {chips.map((c) => (
                  <span key={c} className="border border-border px-2.5 py-1">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {actions && (
            <Reveal delay={380}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {actions}
              </div>
            </Reveal>
          )}
        </div>

        {/* Layered image + floating chip, landscape, never oversized */}
        <div className="relative hidden md:block" style={{ perspective: "1400px" }}>
        <Reveal delay={200}>
          <Parallax speed={-0.2} scale={[1.04, 0.98]}>
            <Tilt3D max={5} glare>
              <div className="relative overflow-hidden border border-border shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
                <img
                  src={image}
                  alt={imageAlt}
                  width={1000}
                  height={750}
                  loading="lazy"
                  className="block aspect-[4/3] w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--ink) 45%, transparent))",
                  }}
                />
                <div className="mono absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.24em] text-background/90">
                  Ch · {chapter}
                </div>
              </div>
            </Tilt3D>
          </Parallax>

          {/* Floating meta chip */}
          {(imageCaption || imageMeta) && (
            <FloatLayer depth={0.5} rotate={-1} className="absolute -bottom-6 -left-4 w-[70%]">
              <div className="border border-border bg-background p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
                <div className="flex items-baseline justify-between">
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                    {imageCaption}
                  </p>
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {imageMeta}
                  </p>
                </div>
              </div>
            </FloatLayer>
          )}
        </Reveal>
        </div>
      </div>


      {/* Right-rail chapter dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="mono text-[10px] tracking-widest text-gold">{chapter}</span>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-border-strong" />
        ))}
        <span className="mono text-[10px] tracking-widest text-muted-foreground">
          {chapterLabel ?? "END"}
        </span>
      </div>
    </section>
  );
}

/**
 * Accent, gold serif italic word/phrase for use inside a PageHero headline.
 */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-accent italic normal-case text-gold"
      style={{ letterSpacing: "-0.01em" }}
    >
      {children}
    </span>
  );
}

