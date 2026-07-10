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
  const result = spawnSync(
    "bunx",
    ["storybook", "build", "-o", "public/storybook"],
    { stdio: "inherit", env: process.env },
  );
  if (result.status !== 0) process.exit(result.status ?? 1);
} finally {
  if (moved && existsSync(stash)) {
    renameSync(stash, original);
  }
}
