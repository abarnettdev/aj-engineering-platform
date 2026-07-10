import { cn } from "@/lib/utils";

/**
 * ChapterArtwork — editorial image frame used inside JourneyRail
 * chapters. Static image with a subtle vignette + corner marks. No
 * interaction, no reveal choreography, so it renders identically SSR
 * and after hydration.
 */
export function ChapterArtwork({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden border border-border bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div
        className="relative w-full overflow-hidden bg-background"
        style={{ aspectRatio: "4 / 3" }}
      >
        <img
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 55%, color-mix(in oklab, var(--ink) 22%, transparent) 100%)",
          }}
        />
        <CornerMark className="left-3 top-3" rotate={0} />
        <CornerMark className="right-3 top-3" rotate={90} />
        <CornerMark className="right-3 bottom-3" rotate={180} />
        <CornerMark className="left-3 bottom-3" rotate={270} />
      </div>
      {caption ? (
        <figcaption className="flex items-center justify-between gap-4 border-t border-border/70 px-4 py-2.5">
          <span className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
            {caption}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

function CornerMark({
  className,
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute h-3 w-3", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="absolute left-0 top-0 h-px w-full bg-gold/60" />
      <span className="absolute left-0 top-0 h-full w-px bg-gold/60" />
    </span>
  );
}
