import { useSeasonalDetail } from "@/hooks/use-seasonal-detail";
import type { SeasonalVariant } from "@/lib/seasonal-details";
import { cn } from "@/lib/utils";

export function SeasonalDetail({
  variant: forcedVariant,
  className,
}: {
  variant?: SeasonalVariant;
  className?: string;
}) {
  const resolvedVariant = useSeasonalDetail();
  const variant = forcedVariant ?? resolvedVariant;

  return (
    <span
      aria-hidden="true"
      data-season={variant}
      className={cn(
        "seasonal-detail pointer-events-none grid size-9 shrink-0 place-items-center font-display text-[12px] font-semibold tracking-[-0.04em] transition-colors",
        className,
      )}
    >
      {variant === "default" ? "AJ" : <SeasonalIcon variant={variant} />}
    </span>
  );
}

function SeasonalIcon({
  variant,
}: {
  variant: Exclude<SeasonalVariant, "default">;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "size-8 overflow-visible",
  } as const;

  switch (variant) {
    case "halloween":
      return <Pumpkin />;
    case "autumn":
      return <Turkey />;
    case "christmas":
      return <Snowflake className="seasonal-snowflake" />;
    case "new-year":
      return <Firework />;
    case "valentine":
      return (
        <svg {...common} className={`${common.className} seasonal-heart`}>
          <path
            d="M12 20S4.5 15.6 4.5 9.6A4.1 4.1 0 0 1 12 7.2a4.1 4.1 0 0 1 7.5 2.4C19.5 15.6 12 20 12 20Z"
            fill="currentColor"
            stroke="var(--seasonal-detail-stroke)"
            strokeWidth=".7"
          />
        </svg>
      );
    case "st-patrick":
      return (
        <svg {...common} className={`${common.className} seasonal-clover`}>
          <path
            d="M12 10C8.6 7.3 7.4 4.2 9.6 3c1.8-1 3.1.4 2.4 2.2.7-1.8 2-3.2 3.8-2.2 2.2 1.2 1 4.3-2.4 7 3.9-1.2 6.7.1 6.4 2.6-.2 2.1-2.5 2.7-4.5.9 1.5 3.4.7 6-1.8 6.1-1.8.1-2.4-1.9-1.5-4.2-.9 2.3-.3 4.3-2.1 4.2-2.5-.1-3.3-2.7-1.8-6.1-2 1.8-4.3 1.2-4.5-.9-.3-2.5 2.5-3.8 6.4-2.6Z"
            fill="currentColor"
            stroke="var(--seasonal-detail-stroke)"
            strokeWidth=".55"
          />
        </svg>
      );
    case "earth-day":
      return (
        <svg {...common} className={`${common.className} seasonal-sprout`}>
          <circle cx="12" cy="12" r="9" fill="var(--seasonal-blue)" />
          <path
            d="M12 20v-7.5M12 15c-3.7 0-5.7-1.9-5.4-5.2 3.5-.2 5.5 1.5 5.4 5.2Zm0 1.8c3.7 0 5.7-1.9 5.4-5.2-3.5-.2-5.5 1.5-5.4 5.2Z"
            fill="var(--seasonal-green)"
            stroke="var(--ivory)"
            strokeWidth=".65"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "memorial-day":
      return <Star className="seasonal-remembrance" />;
    case "independence-day":
      return <Flag />;
    case "labor-day":
      return (
        <svg {...common} className={`${common.className} seasonal-craft`}>
          <path
            d="M4 18.2 15.9 6.3l2 2L6 20.2H4v-2Z"
            fill="var(--seasonal-brown)"
          />
          <path
            d="m14.8 5.4 2.1-2.1 4.2 4.2L19 9.6l-4.2-4.2Z"
            fill="var(--graphite)"
          />
        </svg>
      );
    case "september-11":
      return (
        <svg {...common} className={`${common.className} seasonal-remembrance`}>
          <path
            d="M6.5 4h4v16h-4V4Zm7 0h4v16h-4V4Z"
            fill="var(--seasonal-blue)"
          />
          <path d="M4 20h16" stroke="var(--graphite)" strokeWidth="1.5" />
        </svg>
      );
  }
}

function Pumpkin() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="seasonal-pumpkin size-9 overflow-visible"
    >
      <path
        d="M15.2 8.2c-.2-3.1 1.3-5.1 4.6-5.8.2 2.7-.8 4.6-3.2 5.9"
        stroke="var(--seasonal-stem)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M15.9 7.2c-2.1-1.7-5.1-1.9-7.2-.4C5 7 2.8 11.1 3.2 16.8 3.7 24 8.7 28.5 16 28.5S28.3 24 28.8 16.8C29.2 11.1 27 7 23.3 6.8c-2.2-1.5-5.2-1.3-7.4.4Z"
        fill="var(--seasonal-orange)"
        stroke="var(--seasonal-orange-dark)"
        strokeWidth="1.25"
      />
      <path
        d="M11.5 7.4C9.6 11 9.2 18.9 12 27m8.5-19.6c1.9 3.6 2.3 11.5-.5 19.6M16 7.4v20.8"
        stroke="var(--seasonal-orange-dark)"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity=".55"
      />
      <path
        d="m8.5 14.1 4.5-1.4-1.2 4.1-3.3-2.7Zm15 0L19 12.7l1.2 4.1 3.3-2.7ZM10.1 21.3c3.8 2.2 7.9 2.2 11.8 0l-1.2 3-2.2-.6-2.5 1.6-2.5-1.6-2.2.6-1.2-3Z"
        fill="var(--seasonal-face)"
      />
    </svg>
  );
}

function Turkey() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="seasonal-turkey size-9 overflow-visible"
    >
      <path
        d="M15.7 15.9C9.9 12 5.3 11.5 2.9 13.4c-1.2-3.9.9-7.3 4-7.8 2.1-.3 4 1 5.5 3.5-.2-4.2 1.6-6.7 4.4-6.7 3 0 4.7 2.8 4 7.1 2-2.2 4.4-3 6.5-2 3.2 1.5 3.8 5.3 1.4 8-3.1-2.1-7.5-1.9-13 .4Z"
        fill="var(--seasonal-turkey-tail)"
        stroke="var(--seasonal-turkey-dark)"
        strokeWidth="1.1"
      />
      <path
        d="M9.8 21.1c0-5.4 2.6-9 6.2-9s6.2 3.6 6.2 9c0 5.2-2.5 8.2-6.2 8.2s-6.2-3-6.2-8.2Z"
        fill="var(--seasonal-turkey-body)"
        stroke="var(--seasonal-turkey-dark)"
        strokeWidth="1"
      />
      <path
        d="M16 9.8c3.1 0 5 2 5 4.7 0 2.9-2 4.9-5 4.9s-5-2-5-4.9c0-2.7 1.9-4.7 5-4.7Z"
        fill="var(--seasonal-turkey-head)"
      />
      <circle cx="17.6" cy="13.2" r=".8" fill="var(--ink)" />
      <path d="m20.1 14.1 4.1 1.5-4.1 1.4Z" fill="var(--seasonal-beak)" />
      <path
        d="M19.4 16.3c1.7 2 .7 4.2-1.3 4.5"
        stroke="var(--seasonal-wattle)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.3 28.5 11.8 31m6.9-2.5 1.5 2.5"
        stroke="var(--seasonal-turkey-dark)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Snowflake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cn("size-9", className)}>
      <path
        d="M16 2.5v27M4.3 9.25l23.4 13.5M4.3 22.75l23.4-13.5M11.9 4.8 16 8.9l4.1-4.1m-8.2 22.4L16 23.1l4.1 4.1M6.4 13.9l5.6-1.5-1.5-5.6m15.1 11.3-5.6 1.5 1.5 5.6M10.5 25.2l1.5-5.6-5.6-1.5M21.5 6.8 20 12.4l5.6 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-8", className)}>
      <path
        d="m12 2.8 2.5 5.8 6.3.6-4.8 4.2 1.4 6.2-5.4-3.2-5.4 3.2 1.4-6.2-4.8-4.2 6.3-.6L12 2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Firework() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="seasonal-firework size-9 overflow-visible"
    >
      <g className="seasonal-firework-burst">
        <path
          d="M16 2.5v7M16 22.5v7M2.5 16h7M22.5 16h7M6.5 6.5l5 5m9 9 5 5m0-19-5 5m-9 9-5 5"
          stroke="var(--seasonal-firework-main)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="m9.7 3.9 2.4 4.2m7.8 15.8 2.4 4.2M3.9 22.3l4.2-2.4m15.8-7.8 4.2-2.4M3.9 9.7l4.2 2.4m15.8 7.8 4.2 2.4M9.7 28.1l2.4-4.2m7.8-15.8 2.4-4.2"
          stroke="var(--seasonal-firework-accent)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="2.5" fill="var(--seasonal-firework-core)" />
      </g>
    </svg>
  );
}

function Flag() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="seasonal-flag size-9 overflow-visible"
    >
      <path
        d="M5 3v26"
        stroke="var(--graphite)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <g className="seasonal-flag-cloth">
        <path
          d="M6 5c6-3 12 3 20 0v15c-8 3-14-3-20 0V5Z"
          fill="var(--ivory)"
          stroke="var(--border-strong)"
          strokeWidth=".8"
        />
        <path
          d="M6 5c3.2-1.6 6.4-.7 9.7.2v6.2c-3.3-1-6.5-1.8-9.7-.2V5Z"
          fill="var(--seasonal-blue)"
        />
        <path
          d="M15.7 6.6c3.3.9 6.7 1.5 10.3.1m-10.3 4.2c3.3.9 6.7 1.5 10.3.1M6 13.5c6-3 12 3 20 0M6 17c6-3 12 3 20 0"
          stroke="var(--accent)"
          strokeWidth="1.8"
        />
        <path
          d="m9 7.4.4.8.9.1-.7.6.2.9-.8-.4-.8.4.2-.9-.7-.6.9-.1.4-.8Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
