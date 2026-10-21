import { useSeasonalDetail } from "@/hooks/use-seasonal-detail";
import type { SeasonalVariant } from "@/lib/seasonal-details";
import { cn } from "@/lib/utils";

type ActiveSeasonalVariant = Exclude<SeasonalVariant, "default">;

const SEASONAL_ART: Record<
  ActiveSeasonalVariant,
  { src: string; secondarySrc?: string }
> = {
  halloween: { src: "/images/seasonal/halloween.webp" },
  autumn: {
    src: "/images/seasonal/autumn.webp",
    secondarySrc: "/images/seasonal/thanksgiving.webp",
  },
  christmas: { src: "/images/seasonal/christmas.webp" },
  "new-year": { src: "/images/seasonal/new-year.webp" },
  valentine: { src: "/images/seasonal/valentine.webp" },
  "st-patrick": { src: "/images/seasonal/st-patrick.webp" },
  "earth-day": { src: "/images/seasonal/earth-day.webp" },
  "memorial-day": { src: "/images/seasonal/memorial-day.webp" },
  "independence-day": {
    src: "/images/seasonal/independence-day.webp",
  },
  "labor-day": { src: "/images/seasonal/labor-day.webp" },
  "september-11": { src: "/images/seasonal/september-11.webp" },
};

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
      data-season={variant ?? "pending"}
      className={cn(
        "seasonal-detail pointer-events-none grid size-10 shrink-0 place-items-center",
        className,
      )}
    >
      {variant === "default" ? (
        <span className="seasonal-monogram grid size-9 place-items-center rounded-full bg-ink font-display text-[12px] font-semibold tracking-[-0.04em] text-white">
          AJ
        </span>
      ) : variant ? (
        <SeasonalArt variant={variant} />
      ) : null}
    </span>
  );
}

function SeasonalArt({ variant }: { variant: ActiveSeasonalVariant }) {
  const art = SEASONAL_ART[variant];

  return (
    <span className={cn("seasonal-art", `seasonal-art--${variant}`)}>
      <img
        src={art.src}
        alt=""
        width="256"
        height="256"
        draggable="false"
        className="seasonal-art-image seasonal-art-image--primary"
      />
      {art.secondarySrc ? (
        <img
          src={art.secondarySrc}
          alt=""
          width="256"
          height="256"
          draggable="false"
          className="seasonal-art-image seasonal-art-image--secondary"
        />
      ) : null}
    </span>
  );
}
