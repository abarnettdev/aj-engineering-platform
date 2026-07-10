import { useRef, type ReactNode } from "react";
import { useGsap } from "@/lib/gsap";

/**
 * JourneyRail — scroll-driven documentary spine.
 *
 * Renders a fixed vertical rail that fills with gold as the user scrolls
 * through the timeline. Chapter markers along the rail highlight when their
 * matching chapter enters view. Each chapter's body drifts in from Z-depth,
 * settles at rest, and drifts back out on exit — all scrubbed to scroll so
 * scrolling back exactly reverses the motion.
 *
 * Composition-first: children pass in `<JourneyRail.Chapter>` items and
 * decide their own artifact + prose layout.
 */

type ChapterCtx = { index: number };

function RailRoot({
  children,
  years,
  className,
}: {
  children: ReactNode;
  /** Year labels shown along the fixed rail on the right (desktop only). */
  years: string[];
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const ref = useGsap(({ gsap, ScrollTrigger, scope }) => {
    const fill = railRef.current?.querySelector<HTMLElement>("[data-rail-fill]");
    const ticks = railRef.current?.querySelectorAll<HTMLElement>("[data-rail-tick]");
    const chapters = scope.querySelectorAll<HTMLElement>("[data-chapter]");

    const st = ScrollTrigger.create({
      trigger: scope,
      start: "top 30%",
      end: "bottom 70%",
      scrub: 0.6,
      onUpdate: (self) => {
        if (fill) fill.style.transform = `scaleY(${self.progress})`;
        // Light up ticks proportionally
        if (ticks && ticks.length) {
          const active = Math.floor(self.progress * ticks.length + 0.001);
          ticks.forEach((t, i) => {
            t.dataset.active = i < active ? "true" : "false";
          });
        }
      },
    });

    chapters.forEach((ch) => {
      const artifact = ch.querySelector<HTMLElement>("[data-chapter-artifact]");
      const body = ch.querySelector<HTMLElement>("[data-chapter-body]");
      const marker = ch.querySelector<HTMLElement>("[data-chapter-marker]");

      if (artifact) {
        // Enter only — element settles at rest and stays there. Scrolling
        // back reverses the entrance via scrub; scrolling past does NOT
        // animate it away.
        gsap.fromTo(
          artifact,
          { z: -220, rotateY: -12, rotateX: 6, y: 80, opacity: 0 },
          {
            z: 0,
            rotateY: 0,
            rotateX: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            transformPerspective: 1200,
            transformOrigin: "center center",
            scrollTrigger: {
              trigger: ch,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.8,
            },
          },
        );
      }
      if (body) {
        gsap.fromTo(
          body,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ch, start: "top 75%" },
          },
        );
      }
      if (marker) {
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: { trigger: ch, start: "top 80%" },
          },
        );
      }
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={ref as never}
      className={className}
      style={{ perspective: "1400px" }}
    >
      {/* Fixed rail — only shown on wide viewports where there is real
          gutter space outside the content column. Below xl the rail
          collides with body text, so it is hidden and the inline
          chapter markers along the left border carry the progress cue.
          Backdrop + right offset keep it clear of scrollbar + content. */}
      <div
        ref={railRef}
        aria-hidden
        className="pointer-events-none fixed right-4 top-28 z-10 hidden h-[calc(100dvh-9rem)] w-[2px] bg-border xl:block 2xl:right-8"
      >
        <div
          data-rail-fill
          className="h-full origin-top bg-gold"
          style={{ transform: "scaleY(0)", transition: "transform 60ms linear" }}
        />
        <ol className="absolute inset-y-0 -left-16 right-0 flex flex-col justify-between">
          {years.map((y, i) => (
            <li
              key={`${y}-${i}`}
              data-rail-tick
              data-active="false"
              className="group flex items-center justify-end gap-2"
            >
              <span className="mono rounded-sm bg-background/85 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-sm transition-colors group-data-[active=true]:text-gold">
                {y}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full border-2 border-background bg-border-strong transition-colors group-data-[active=true]:bg-gold" />
            </li>
          ))}
        </ol>

      </div>


      {children}
    </div>
  );
}

function Chapter({
  index,
  id,
  year,
  chapter,
  role,
  flip = false,
  artifact,
  children,
}: ChapterCtx & {
  /** Optional stable anchor id for deep-linking (e.g. from Work case studies). */
  id?: string;
  year: string;
  chapter: string;
  role: string;
  flip?: boolean;
  artifact: ReactNode;
  children: ReactNode;
}) {
  return (
    <li
      id={id}
      data-chapter
      className="group relative scroll-mt-28"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Chapter marker (on-flow, per-chapter, decorative) */}
      <span
        aria-hidden
        data-chapter-marker
        className="absolute -left-1 top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-gold shadow-[0_0_0_2px_color-mix(in_oklab,var(--gold)_30%,transparent)] md:block"
      />
      <div
        className={`grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-chapter-artifact style={{ willChange: "transform, opacity" }}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 60% at 50% 50%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 70%)",
              }}
            />
            {artifact}
          </div>
        </div>

        <div data-chapter-body>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              Ch. {String(index + 1).padStart(2, "0")}
            </span>
            <span aria-hidden className="mono text-[10px] text-border-strong">
              ·
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {year}
            </span>
          </div>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {chapter}
          </h2>
          <p className="mono mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {role}
          </p>
          {children}
        </div>
      </div>
    </li>
  );
}

export const JourneyRail = Object.assign(RailRoot, { Chapter });
