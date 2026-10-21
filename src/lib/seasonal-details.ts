export const SEASONAL_TIME_ZONE = "America/New_York";

export type SeasonalVariant =
  | "default"
  | "halloween"
  | "autumn"
  | "christmas"
  | "new-year"
  | "valentine"
  | "st-patrick"
  | "earth-day"
  | "memorial-day"
  | "independence-day"
  | "labor-day"
  | "september-11";

export interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

export interface SeasonalDetailDefinition {
  id: Exclude<SeasonalVariant, "default">;
  label: string;
  description: string;
  priority: number;
  matches: (date: CalendarDate) => boolean;
}

const fixedRange =
  (startMonth: number, startDay: number, endMonth: number, endDay: number) =>
  ({ month, day }: CalendarDate) => {
    const value = month * 100 + day;
    const start = startMonth * 100 + startDay;
    const end = endMonth * 100 + endDay;
    return start <= end
      ? value >= start && value <= end
      : value >= start || value <= end;
  };

function nthWeekdayOfMonth(
  year: number,
  month: number,
  weekday: number,
  occurrence: number,
) {
  const firstWeekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  return 1 + ((7 + weekday - firstWeekday) % 7) + (occurrence - 1) * 7;
}

export function memorialDay(year: number) {
  const lastDay = new Date(Date.UTC(year, 5, 0));
  return lastDay.getUTCDate() - ((7 + lastDay.getUTCDay() - 1) % 7);
}

export function laborDay(year: number) {
  return nthWeekdayOfMonth(year, 9, 1, 1);
}

const holidayWeekend =
  (holidayMonth: number, getHolidayDay: (year: number) => number) =>
  ({ year, month, day }: CalendarDate) => {
    if (month !== holidayMonth) return false;
    const holidayDay = getHolidayDay(year);
    return day >= holidayDay - 2 && day <= holidayDay;
  };

export const SEASONAL_DETAILS = [
  {
    id: "september-11",
    label: "September 11 remembrance",
    description: "A still twin-light memorial with candles and no animation.",
    priority: 100,
    matches: fixedRange(9, 11, 9, 11),
  },
  {
    id: "new-year",
    label: "New Year",
    description:
      "A dimensional midnight clock catches the light and celebrates on hover.",
    priority: 90,
    matches: fixedRange(12, 31, 1, 3),
  },
  {
    id: "memorial-day",
    label: "Memorial Day remembrance",
    description:
      "A still floral memorial and folded flag appear for the holiday weekend.",
    priority: 80,
    matches: holidayWeekend(5, memorialDay),
  },
  {
    id: "labor-day",
    label: "Labor Day",
    description:
      "A dimensional hardhat and tools recognize the holiday weekend.",
    priority: 70,
    matches: holidayWeekend(9, laborDay),
  },
  {
    id: "halloween",
    label: "Halloween",
    description:
      "A glowing jack-o'-lantern replaces the AJ monogram and bounces on hover.",
    priority: 60,
    matches: fixedRange(10, 1, 10, 31),
  },
  {
    id: "autumn",
    label: "Autumn",
    description: "Leaves and acorns turn into a harvest cornucopia on hover.",
    priority: 60,
    matches: fixedRange(11, 1, 11, 30),
  },
  {
    id: "christmas",
    label: "Christmas",
    description:
      "Golden bells in a winter wreath catch the light and ring on hover.",
    priority: 60,
    matches: fixedRange(12, 1, 12, 30),
  },
  {
    id: "valentine",
    label: "Valentine's Day",
    description: "Dimensional ribboned hearts give one warm pulse on hover.",
    priority: 60,
    matches: fixedRange(2, 1, 2, 15),
  },
  {
    id: "st-patrick",
    label: "St. Patrick's Day",
    description: "A polished clover and top hat make one 3D flip on hover.",
    priority: 60,
    matches: fixedRange(3, 1, 3, 18),
  },
  {
    id: "earth-day",
    label: "Earth Day",
    description: "A leaf-wrapped globe floats gently and tilts on hover.",
    priority: 60,
    matches: fixedRange(4, 20, 4, 22),
  },
  {
    id: "independence-day",
    label: "Independence Day",
    description: "Dimensional fireworks expand once on hover.",
    priority: 60,
    matches: fixedRange(7, 1, 7, 7),
  },
] satisfies ReadonlyArray<SeasonalDetailDefinition>;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: SEASONAL_TIME_ZONE,
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

export function getNewYorkCalendarDate(date: Date): CalendarDate {
  const parts = dateFormatter.formatToParts(date);
  const numberPart = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: numberPart("year"),
    month: numberPart("month"),
    day: numberPart("day"),
  };
}

export function resolveSeasonalVariant(date: Date): SeasonalVariant {
  const calendarDate = getNewYorkCalendarDate(date);
  const match = [...SEASONAL_DETAILS]
    .sort((left, right) => right.priority - left.priority)
    .find((detail) => detail.matches(calendarDate));
  return match?.id ?? "default";
}

export function millisecondsUntilNextNewYorkDate(date: Date) {
  const current = getNewYorkCalendarDate(date);
  const currentKey = `${current.year}-${current.month}-${current.day}`;
  let low = date.getTime();
  let high = low + 28 * 60 * 60 * 1000;

  while (high - low > 1_000) {
    const middle = Math.floor((low + high) / 2);
    const candidate = getNewYorkCalendarDate(new Date(middle));
    const candidateKey = `${candidate.year}-${candidate.month}-${candidate.day}`;
    if (candidateKey === currentKey) low = middle;
    else high = middle;
  }

  return Math.max(1_000, high - date.getTime() + 250);
}
