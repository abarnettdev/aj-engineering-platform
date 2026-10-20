#!/usr/bin/env node
import { spawnSync } from "node:child_process";

// Use the installed CLI and Storybook's isolated Vite config. Never move app files.
const result = spawnSync(
  process.execPath,
  ["node_modules/storybook/bin/index.cjs", "build", "-o", "public/storybook"],
  { stdio: "inherit", env: process.env },
);
if (result.error) console.error(result.error.message);
process.exitCode = result.status ?? 1;
