#!/usr/bin/env node
// Build Storybook with the app's vite.config.ts temporarily moved aside so
// Vite doesn't auto-load the TanStack Start plugin (which would build the
// whole SSR app instead of the isolated stories).
import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const cwd = process.cwd();
const original = resolve(cwd, "vite.config.ts");
const stash = resolve(cwd, "vite.config.ts.storybook-stash");

let moved = false;
try {
  if (existsSync(original)) {
    renameSync(original, stash);
    moved = true;
  }
  const runner = spawnSync("bunx", ["--version"], { stdio: "ignore" }).error
    ? "npx"
    : "bunx";
  const args =
    runner === "npx"
      ? ["storybook", "build", "-o", "public/storybook"]
      : ["storybook", "build", "-o", "public/storybook"];
  const result = spawnSync(runner, args, {
    stdio: "inherit",
    env: process.env,
  });
  if (result.error) {
    console.error(`Failed to run ${runner}: ${result.error.message}`);
    process.exitCode = 1;
  }
  if (result.status !== 0) process.exitCode = result.status ?? 1;
} finally {
  if (moved && existsSync(stash)) {
    renameSync(stash, original);
  }
}
