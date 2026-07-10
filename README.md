# AJ Barnett Engineering Platform

An interactive engineering journal exploring
software architecture, frontend systems,
design systems, AI-assisted engineering,
component architecture,
and product thinking.

Built with:

• TanStack Start
• React 19
• TypeScript
• Tailwind v4
• Storybook
• Bun
• Vercel

## Requirements

- Bun 1.1+ (recommended) or Node 20+ with npm
- macOS, Linux, or WSL

## Install

```bash
bun install
# or
npm install
```

## Development

```
bun run dev

Starts the development server.
```

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
