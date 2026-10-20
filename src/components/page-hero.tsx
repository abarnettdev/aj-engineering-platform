import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  chapter: string;
  chapterLabel?: string;
  headline: ReactNode;
  description?: ReactNode;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  imageMeta?: string;
  actions?: ReactNode;
  chips?: string[];
}

export function PageHero(props: PageHeroProps) {
  return (
    <section className="px-3 pt-3" data-section={props.chapter}>
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] bg-surface shadow-soft">
        <div
          aria-hidden="true"
          className="glow pointer-events-none absolute inset-0 opacity-80"
        />
        <div className="relative grid gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-12 md:py-20 lg:py-24">
          <div>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent-ink shadow-soft">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                />
                {props.eyebrow}
              </p>
            </div>
            <div>
              <h1 className="mt-6 text-balance text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-ink">
                {props.headline}
              </h1>
            </div>
            {props.description && (
              <div>
                <div className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {props.description}
                </div>
              </div>
            )}
            {props.chips && props.chips.length > 0 && (
              <div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {props.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {props.actions && (
              <div>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {props.actions}
                </div>
              </div>
            )}
          </div>

          <div>
            <figure className="overflow-hidden rounded-3xl border border-white/60 bg-card p-2 shadow-lift">
              <img
                src={props.image}
                alt={props.imageAlt}
                width={1000}
                height={750}
                loading="lazy"
                className="block aspect-[4/3] w-full rounded-[1.15rem] object-cover"
              />
              {(props.imageCaption || props.imageMeta) && (
                <figcaption className="flex flex-wrap justify-between gap-2 px-3 py-3 text-xs text-muted-foreground">
                  <span>{props.imageCaption}</span>
                  <span>{props.imageMeta ?? props.chapterLabel}</span>
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-accent-ink">{children}</span>;
}
