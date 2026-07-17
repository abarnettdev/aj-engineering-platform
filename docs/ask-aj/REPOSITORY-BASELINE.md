# Ask A.J. Repository Baseline

Sprint Zero read-only repository inspection.

## 1. Architecture Map

This repository is a single TanStack Start application.

- `src/routes/`: file-based TanStack Router and TanStack Start routes.
- `src/routes/__root.tsx`: document shell, global layout, metadata, providers, error UI, and not-found UI.
- `src/router.tsx`: creates the TanStack Router instance and React Query client.
- `src/start.ts`: creates the TanStack Start instance and request middleware.
- `src/server.ts`: custom server entry wrapper around `@tanstack/react-start/server-entry`.
- `src/content/site-data.ts`: typed portfolio, career, project, and article content.
- `src/components/`: reusable application components.
- `src/components/ui/`: shadcn/Radix UI primitives.
- `src/components/composites/`: richer editorial and product components.
- `src/components/primitives/`: lower-level app primitives.
- `src/lib/`: shared utilities and error handling.
- `src/stories/`: Storybook stories for components and design-system surfaces.
- `src/styles.css`: Tailwind CSS v4 theme, tokens, base styles, and custom utilities.
- `public/`: static files, resume, favicon, and built Storybook output.
- `scripts/`: build helper scripts.

## 2. Client and Server Boundaries

Client-facing UI currently lives in route components and React components under `src/routes` and `src/components`.

Server-side code currently lives in:

- `src/server.ts`: fetch entrypoint and SSR error normalization.
- `src/start.ts`: server request middleware.
- `src/routes/sitemap[.]xml.ts`: route-level server handler through `server.handlers.GET`.

Ask A.J. should keep browser UI in React routes/components and keep model providers, secrets, database access, LangGraph orchestration, MCP integration, and RAG retrieval behind TanStack Start server boundaries.

## 3. Route Conventions

Routes live in `src/routes`.

Existing conventions are documented in `src/routes/README.md`:

- `index.tsx` maps to `/`.
- `writing.index.tsx` maps to `/writing`.
- `writing.$slug.tsx` maps to `/writing/:slug`.
- `sitemap[.]xml.ts` maps to `/sitemap.xml`.
- `__root.tsx` is the app shell and should preserve `<Outlet />`.
- `routeTree.gen.ts` is generated and should not be edited by hand.

Routes use `createFileRoute(...)`, route-local `head`, optional `loader`, and route-local components.

## 4. Server and API Patterns

No `createServerFn` pattern currently exists.

The existing API-like pattern is the sitemap route:

```ts
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => new Response(...)
    }
  }
});
```

This is the clearest existing pattern for future Ask A.J. API or streaming endpoints.

## 5. Environment Variables

No project `.env` files were found.

No active application usage of `import.meta.env` or `process.env` was found, except `scripts/build-storybook.mjs` passing `process.env` through to Storybook.

`vite.config.ts` notes that the Lovable TanStack config includes `VITE_*` env injection. Server secrets for Ask A.J. should not use `VITE_*`; they should remain server-only.

## 6. RAG Content Sources

Strong initial RAG sources already exist:

- `src/content/site-data.ts`
  - `timeline`
  - `workCases`
  - `projects`
  - `techEvolution`
  - `metrics`
  - `articles`
- Route/page prose embedded in:
  - `src/routes/index.tsx`
  - `src/routes/engineering.tsx`
  - `src/routes/systems.tsx`
  - `src/routes/timeline.tsx`
  - `src/routes/work.tsx`
  - `src/routes/contact.tsx`
  - `src/routes/writing.index.tsx`
  - `src/routes/writing.$slug.tsx`
- Static/public source:
  - `public/resume.pdf`
- Secondary corpus candidates:
  - `src/stories/`, especially stories describing component and engineering philosophy.

## 7. Design System and Tokens

Design tokens are centralized in `src/styles.css` using Tailwind CSS v4.

Current token groups include:

- Colors: `background`, `foreground`, `surface`, `surface-elevated`, `ink`, `card`, `primary`, `secondary`, `muted`, `accent`, `gold`, `oxblood`, `ivory`, `graphite`, `border`, `ring`.
- Typography: `font-sans`, `font-display`, `font-accent`, `font-mono`.
- Radius tokens derived from `--radius`.
- Light and dark variable sets.
- Custom utilities such as `container-page`, `container-narrow`, `mono`, `font-accent`, `reveal`, `lift`, `gold-sweep`, and `drop-cap`.

Reusable components already useful for Ask A.J. include:

- `Section` and `Eyebrow`.
- `PageHero` and `Accent`.
- `Reveal` and motion helpers.
- `ArticleCard`.
- shadcn/Radix UI primitives such as `Button`, `Card`, `Input`, `Textarea`, `Dialog`, `Sheet`, `ScrollArea`, `Tabs`, `Tooltip`, `Avatar`, and `Badge`.
- `lucide-react` icons.

## 8. Recommended Ask A.J. Locations

Recommended locations:

- Ask A.J. frontend feature files:
  - `src/features/ask-aj/`
  - Route entry: `src/routes/ask-aj.tsx` or another approved route filename.
- LangGraph server code:
  - `src/server/ask-aj/langgraph/` or `src/server/langgraph/`.
- MCP server and client code:
  - `src/server/ask-aj/mcp/`.
- RAG ingestion code:
  - `src/server/ask-aj/rag/ingestion/`.
  - If ingestion becomes CLI-like, add a focused script later under `scripts/`.
- Database access:
  - `src/server/db/`.
- Shared domain contracts:
  - `src/features/ask-aj/contracts/` if only used by Ask A.J.
  - `src/contracts/ask-aj.ts` if shared broadly across client and server.

Use Zod for shared runtime validation because it is already installed.

## 9. Existing Dependencies

Reusable installed dependencies include:

- `@tanstack/react-start`
- `@tanstack/react-router`
- `@tanstack/react-query`
- `zod`
- `react-hook-form`
- `@hookform/resolvers`
- Radix UI primitives
- `cmdk`
- `lucide-react`
- `sonner`
- `tailwindcss`
- `tailwind-merge`
- `clsx`
- `class-variance-authority`
- `date-fns`
- `recharts`
- Storybook

Not currently installed:

- OpenAI SDK
- LangGraph
- LangChain
- MCP SDK
- PostgreSQL driver or ORM
- Vector search tooling

## 10. Risks and Constraints

- The app targets an edge-compatible deployment shape. PostgreSQL clients, LangGraph runtime behavior, streaming, and MCP transports must be checked against the actual host/runtime before choosing packages.
- No environment validation layer exists yet. Ask A.J. should add server-only env validation before secrets or provider keys are introduced.
- The current corpus is TypeScript data and route prose, not normalized RAG documents. Ingestion should convert content into stable source records with ids, URLs, titles, chunks, and citation metadata.
- `src/content/site-data.ts` is imported by client routes today. RAG-only enrichment should not accidentally turn that module into a server dependency.
- No database layer exists yet. Add it as a narrow vertical slice: env validation, connection, one schema, one repository, and one server route.
- No streaming pattern exists yet. Prove streaming with a small TanStack Start server handler before layering LangGraph and RAG on top.
- Existing project rules prohibit direct browser model calls, second applications, Express, NestJS, Next.js, Supabase, and broad scaffolding without approval.
- The safest path is incremental development inside the existing TanStack Start boundary.
