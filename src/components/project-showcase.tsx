export type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
  srcSet?: string;
  sizes?: string;
};

export function ProjectShowcase({
  screenshots,
  className = "",
}: {
  screenshots: readonly ProjectScreenshot[];
  className?: string;
}) {
  return (
    <div
      className={`relative isolate min-h-[24rem] overflow-hidden rounded-3xl bg-muted p-4 sm:min-h-[34rem] sm:p-8 ${className}`}
    >
      <div
        aria-hidden="true"
        className="glow pointer-events-none absolute inset-0 opacity-45"
      />
      <div className="relative grid h-full gap-4 sm:block">
        {screenshots.slice(0, 3).map((screenshot, index) => (
          <figure
            key={screenshot.src}
            className={`overflow-hidden rounded-2xl border border-white/70 bg-card p-1.5 shadow-lift sm:absolute sm:w-[72%] ${
              index === 0
                ? "sm:left-0 sm:top-8 sm:-rotate-2"
                : index === 1
                  ? "sm:right-0 sm:top-0 sm:rotate-2"
                  : "sm:bottom-0 sm:left-[14%] sm:rotate-1"
            }`}
          >
            <div
              className="flex h-7 items-center gap-1.5 px-2"
              aria-hidden="true"
            >
              <span className="size-2 rounded-full bg-accent/70" />
              <span className="size-2 rounded-full bg-border-strong" />
              <span className="size-2 rounded-full bg-border" />
              <span className="ml-2 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {screenshot.label}
              </span>
            </div>
            <img
              src={screenshot.src}
              srcSet={screenshot.srcSet}
              sizes={screenshot.sizes ?? "(min-width: 640px) 50vw, 100vw"}
              alt={screenshot.alt}
              width={1440}
              height={900}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[16/9] w-full rounded-xl object-cover object-top"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
