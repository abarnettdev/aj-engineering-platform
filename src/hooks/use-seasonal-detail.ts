import { useEffect, useState } from "react";
import {
  millisecondsUntilNextNewYorkDate,
  resolveSeasonalVariant,
  type SeasonalVariant,
} from "@/lib/seasonal-details";

export function useSeasonalDetail(): SeasonalVariant | null {
  const [variant, setVariant] = useState<SeasonalVariant | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const update = () => {
      const now = new Date();
      setVariant(resolveSeasonalVariant(now));
      clearTimeout(timer);
      timer = setTimeout(update, millisecondsUntilNextNewYorkDate(now));
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") update();
    };

    update();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return variant;
}
