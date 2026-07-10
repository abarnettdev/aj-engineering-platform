import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * CompositeFigure, the shared editorial frame used by every diagram
 * composite. Renders a premium 3D illustration inside a bordered card
 * with an eyebrow, caption, and legend row. Static, high-contrast, no
 * interaction gates, the image is the argument.
 */
export function CompositeFigure({
  eyebrow,
  title,
  caption,
  legend,
  image,
  alt,
  className,
  aspect = "16 / 10",
}: {
  eyebrow: string;
  title?: string;
  caption?: ReactNode;
  legend?: Array<{ label: string; note?: string }>;
  image: string;
  alt: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure
      className={cn(
        "relative w-full max-w-none border border-border bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {/* Meta strip */}
      <div className="flex items-center justify-between gap-4 border-b border-border/70 px-5 py-3">
        <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </span>
        {title ? (
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {title}
          </span>
        ) : null}
      </div>

      {/* Image */}
      <div
        className="relative w-full overflow-hidden bg-background"
        style={{ aspectRatio: aspect }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* soft editorial vignette to unify against the frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 55%, color-mix(in oklab, var(--ink) 22%, transparent) 100%)",
          }}
        />
        {/* Corner registration marks */}
        <CornerMark className="left-3 top-3" rotate={0} />
        <CornerMark className="right-3 top-3" rotate={90} />
        <CornerMark className="right-3 bottom-3" rotate={180} />
        <CornerMark className="left-3 bottom-3" rotate={270} />
      </div>

      {/* Caption + legend */}
      {(caption || legend?.length) && (
        <figcaption className="border-t border-border/70 px-5 py-4">
          {caption ? (
            <p className="text-sm leading-relaxed text-foreground/85">{caption}</p>
          ) : null}
          {legend?.length ? (
            <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              {legend.map((item, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-2 border-l border-gold/50 pl-3"
                >
                  <dt className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </dt>
                  <dd className="text-xs text-foreground/80">
                    <span className="font-medium text-ink">{item.label}</span>
                    {item.note ? (
                      <span className="text-muted-foreground">, {item.note}</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </figcaption>
      )}
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
