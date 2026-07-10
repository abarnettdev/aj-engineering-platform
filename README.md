# AJ Barnett Portfolio

Personal engineering site for AJ Barnett, an interactive engineering
documentary rather than a traditional portfolio. Built on TanStack Start
(React 19 + Vite 7) with Tailwind v4, shadcn/ui primitives, and a
Storybook design-system reference.

## Requirements

- Bun 1.1+ (recommended) or Node 20+ with npm
- macOS, Linux, or WSL

## Install

```bash
bun install
# or
npm install
```

## Develop

```bash
bun run dev
```

The app runs at http://localhost:8080. TanStack Router regenerates
`src/routeTree.gen.ts` automatically as you add or rename files under
`src/routes/`.

## Build

```bash
bun run build
```

This runs the Storybook build first (writing static output to
`public/storybook/`) and then the Vite/TanStack Start production build.
The final artifact is emitted to `.output/` for Cloudflare-compatible
deployment.

Development build (no Storybook, no minification):

```bash
bun run build:dev
```

## Storybook

```bash
bun run storybook          # interactive dev server on :6006
bun run build-storybook    # writes static build to public/storybook/
```

The static Storybook is served at `/storybook/index.html` alongside the
site.

## Lint & format

```bash
bun run lint
bun run format
```

## Deploy

The project targets a Cloudflare Workers-compatible edge runtime. Build
output in `.output/` is deploy-ready for any TanStack Start compatible
host (Cloudflare, Netlify, Vercel edge).

Before publishing:

- Confirm `public/resume.pdf` exists, or update the link in
  `src/routes/contact.tsx`.
- Update `og:image` on leaf routes if a hosted preview image becomes
  available.

## Project structure

```
src/
  routes/            file-based routes (TanStack Router)
  components/        shared UI + composite editorial figures
  content/           site data
  stories/           Storybook stories mirroring the design system
  styles.css         Tailwind v4 tokens + custom utilities
```
