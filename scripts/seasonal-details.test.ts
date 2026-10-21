import { describe, expect, test } from "bun:test";
import {
  laborDay,
  memorialDay,
  resolveSeasonalVariant,
} from "../src/lib/seasonal-details";

const atNewYorkNoon = (date: string) => new Date(`${date}T16:00:00.000Z`);

describe("seasonal date resolution", () => {
  test.each([
    ["2026-10-01", "halloween"],
    ["2026-10-31", "halloween"],
    ["2026-11-01", "autumn"],
    ["2026-11-30", "autumn"],
    ["2026-12-01", "christmas"],
    ["2026-12-30", "christmas"],
    ["2026-12-31", "new-year"],
    ["2027-01-03", "new-year"],
    ["2027-01-04", "default"],
    ["2026-02-01", "valentine"],
    ["2026-02-15", "valentine"],
    ["2026-02-16", "default"],
    ["2026-03-01", "st-patrick"],
    ["2026-03-18", "st-patrick"],
    ["2026-04-20", "earth-day"],
    ["2026-04-22", "earth-day"],
    ["2026-07-01", "independence-day"],
    ["2026-07-07", "independence-day"],
    ["2026-09-11", "september-11"],
  ] as const)("resolves %s to %s", (date, expected) => {
    expect(resolveSeasonalVariant(atNewYorkNoon(date))).toBe(expected);
  });

  test("uses the New York date near a UTC boundary", () => {
    expect(resolveSeasonalVariant(new Date("2026-11-01T03:30:00.000Z"))).toBe(
      "halloween",
    );
    expect(resolveSeasonalVariant(new Date("2026-11-01T05:30:00.000Z"))).toBe(
      "autumn",
    );
  });

  test("calculates Memorial Day and its weekend", () => {
    expect(memorialDay(2026)).toBe(25);
    expect(resolveSeasonalVariant(atNewYorkNoon("2026-05-23"))).toBe(
      "memorial-day",
    );
    expect(resolveSeasonalVariant(atNewYorkNoon("2026-05-26"))).toBe("default");
  });

  test("calculates Labor Day and its weekend", () => {
    expect(laborDay(2026)).toBe(7);
    expect(resolveSeasonalVariant(atNewYorkNoon("2026-09-05"))).toBe(
      "labor-day",
    );
    expect(resolveSeasonalVariant(atNewYorkNoon("2026-09-08"))).toBe("default");
  });
});
