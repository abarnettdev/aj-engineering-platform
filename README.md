# AJ Barnett — Product Designer & Software Engineer

From first concept to production code. This repository contains the portfolio at
[ajbarnett.tech](https://ajbarnett.tech), built with React 19, strict TypeScript,
TanStack Start/Router, Vite 8, Tailwind CSS v4, Bun, and Storybook.

## Run locally

Use Bun 1.3.14 and Node 22.20+ (the versions used for the foundation verification).

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://127.0.0.1:8080. No model or email credentials are required to browse
the portfolio. Provider integrations remain server-only and need their own
runtime configuration to send real requests. Never prefix secrets with `VITE_`.

The Cloudflare production preview invokes Wrangler through Nitro. If Wrangler is
not installed, Nitro uses `npx` to download it (local verification used 4.151.2).
This is local emulation, not a deployment; it adds no project dependency.

## Build and verify

```sh
bun run typecheck
bun run build
bun run preview -- --host 127.0.0.1 --port 8081
# In another terminal, against the running preview:
SMOKE_BASE_URL=http://127.0.0.1:8081 bun run test:smoke
```

`build` generates Storybook in `public/storybook/`, then builds the app.
Generated Storybook files are ignored by Git and must be generated before release.
`build:app` builds only the application. `build:dev` builds with Vite development
mode; it is not the interactive development server or a guaranteed unminified build.
`check` runs TypeScript and HTTP smoke tests against a running local server.
Smoke tests cover SSR routes, public files, 404s, and invalid API payloads without
calling model or email providers. `lint` is available, but the existing repository
has formatting/lint debt; see the dated audit for its actual status.

## Architecture

- `src/routes`: TanStack Router pages and Start server handlers.
- `src/server`: privileged provider clients, configuration, and request guards.
- `src/server.ts`: custom SSR entry and catastrophic error response handling.
- `src/components`, `src/styles.css`: UI implementation and CSS tokens.
- `src/stories`, `.storybook`: independent component examples and controls.
- `vite.config.ts`: explicit Tailwind, TypeScript paths, Start, Nitro, React setup.

Start owns routing, SSR, and the backend boundary. Nitro packages the server for
its host; it does not introduce a second backend. The config retains the previous
`cloudflare-module` fallback and permits Nitro's Vercel environment detection or
an explicit `NITRO_PRESET`. Cloudflare builds emit `.output/`; Vercel builds emit
`.vercel/output/`. Artifacts are host-specific, not interchangeable. The existing
Nitro prerelease is pinned; this change does not migrate deployment adapters.

## Storybook

```sh
bun run storybook
bun run build-storybook
```

Open http://localhost:6006 or `/storybook/index.html` after building. Storybook
uses its own Vite config; it never moves the application config. Existing examples
are a starting point, not a published component package or proof of accessibility
compliance. Radix-based primitives retain their upstream implementation attribution.

## Review and deployment

Work happens on feature branches. Do not merge or deploy without AJ's approval.
`vercel.json` disables Git deployments for `chore/independent-build-foundation` so
this review branch does not request an automatic Vercel preview. No deployment
credentials or provider configuration are stored here.

The [baseline audit](docs/rebuild/phase-a-baseline.md) records current gaps,
verification evidence, wrapper replacement decisions, and the remaining rebuild.
