# Portfolio baseline and foundation audit

Date: October 20, 2026. Base commit: `f6ccac9`. Scope: the authorized
`abarnettdev/aj-engineering-platform` repository only.

## Safety

- Working directory: `/Users/in6dimensions/Desktop/aj-engineering-platform`.
- Fetch/push origin: `https://github.com/abarnettdev/aj-engineering-platform.git`.
- Authenticated GitHub login: `abarnettdev`; repository permission: `ADMIN`.
- Original branch: `main`; implementation branch: `chore/independent-build-foundation`.
- Existing local changes include Ask A.J., its story, CSS, an environment example,
  and generated Storybook output. Preserved in the original working directory.
- Implementation uses an isolated sibling worktree based on committed `main`.
- No other repositories, organizations, infrastructure, credentials, or private
  enterprise source were accessed. Promotional entries were removed from this
  portfolio's local content only. Git history and attribution are unchanged.

## Baseline findings

| Area                 | Observed state                                                                             | Follow-up                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Build                | Lovable wrapper 2.7.1, Vite 8, Start, Nitro prerelease                                     | Explicit supported plugin entry points, retain pinned versions                                     |
| Hosting              | README says Cloudflare and Vercel; no committed host config                                | Preserve Cloudflare fallback and Nitro detection; host settings not independently verified         |
| Routes               | Portfolio, work, journey, systems, engineering, writing, contact, assistant, APIs, sitemap | Keep Start routing and server boundary                                                             |
| Positioning          | Homepage and global metadata lead with AI; global assistant overlay                        | Remove overlay and featured assistant promotion; introduce dual-discipline identity                |
| Assets               | Mostly illustrative JPEGs; local portrait; no historical client screenshots                | Phase D: archive research and provenance before publishing evidence                                |
| Résumés              | One `public/resume.pdf`                                                                    | Phase C: two verified discipline-specific documents; do not duplicate and relabel                  |
| Storybook            | Existing controls/stories, Radix primitives, generated bundles committed                   | Generate bundles at build time; correct invented package inventory                                 |
| Design-system claims | `packages/ui` advertised, but no such package; Figma workflow described without artifacts  | Correct package claim and label workflow as principles; full audit in Phase E                      |
| SEO                  | Titles/descriptions, lang, viewport, robots, XML sitemap exist                             | Canonicals, structured data, crawl validation and measured SEO remain pending                      |
| Accessibility        | Skip link, main landmark, Radix controls exist                                             | No claim of WCAG/508 conformance; keyboard, screen reader, axe, reflow and contrast audits pending |
| Tests/CI             | axe-core installed; no committed test runner suite or CI workflow                          | Add dependency-free HTTP smoke checks now; browser/axe CI in quality phase                         |
| Server APIs          | Model/email integrations under `src/server`; shared contact contracts inside Ask A.J.      | Retain backend and shared code; no provider calls from browser                                     |

## Wrapper replacement inventory

Inspected the installed wrapper implementation before changing configuration.

| Wrapper behavior                                                             | Independent decision                                                                               |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Tailwind, tsconfig paths, Start, React plugins                               | Import their public Vite plugins directly                                                          |
| Nitro during builds and packaged preview; `defaultPreset: cloudflare-module` | Retained, including host detection and explicit preset overrides                                   |
| Custom `server` entry                                                        | Retained `src/server.ts`                                                                           |
| Import protection: server directory and `server-only`                        | Retained build error enforcement                                                                   |
| `@` alias and React/query deduplication                                      | Retained with an ESM URL-based alias                                                               |
| VITE environment injection                                                   | Use Vite's native public environment behavior; no secret expansion                                 |
| Lightning CSS dev transformer                                                | Remove wrapper's forced transformer; use native Vite/Tailwind pipeline, verify build and rendering |
| React dependency prebundling and stale-request tolerance                     | Use standard Vite defaults; no evidence custom behavior is needed                                  |
| Development build client NODE_ENV override                                   | Remove special override; standard Vite mode behavior                                               |
| Source tagging and TanStack devtools source injection                        | Remove tool-specific instrumentation                                                               |
| Asset proxy, development bridge, HMR gate                                    | Remove; no source references to the proxy path                                                     |
| SSR/server-function HMR instrumentation and upstream source rewriting        | Remove; retain application error boundaries and SSR error wrapper                                  |
| Sandbox host/port/CORS/header mutation and debounce                          | Remove; localhost defaults, CLI overrides remain available                                         |
| Sandbox build diagnostics                                                    | Use normal Vite/Nitro diagnostics                                                                  |

The replacement built and served successfully before removing the wrapper.
Removing it also removed its transitive tooling from the Bun lockfile. No new
project dependencies were added. Nitro’s Cloudflare preview automatically fetched
Wrangler 4.151.2 through npx for local emulation. Existing upstream licenses and Git attribution remain.
Bun's 24-hour release-age guard remains; obsolete tool-specific bypasses are removed.

Reference: [TanStack hosting guidance](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
uses the public Start, Nitro, and React Vite plugins. We preserve the existing
Cloudflare packaging behavior instead of introducing a separate adapter migration.
[Vercel Git configuration](https://vercel.com/docs/project-configuration/git-configuration)
documents branch-specific deployment disabling used on this review branch.

## Assistant decision

Retain `/ask-aj`, `/work/ask-aj`, their APIs and stories as an isolated engineering
example pending editorial review. Remove the launcher from the application shell
and its featured homepage promotion. OpenAI remains a real server dependency;
contact also shares feature contracts, so removing the complete directory would
break working routes. No RAG, PostgreSQL, vector search, LangGraph or MCP feature
is claimed as implemented by this foundation change.

## Remaining phases

- C: editorial visual redesign, meaningful design/engineering exploration paths,
  résumé artifacts, navigation and contact refinement.
- D: historical client availability/archive research, labeled genuine images,
  substantive Legato case study with accurate shared ownership and public demo.
- E: independently authored tokens/components, full state stories and keyboard
  tests, usage docs and recording. Additional repositories require approval.
- F: browser/axe automation, manual accessibility review, dated desktop/mobile
  Lighthouse and SEO evidence, visible Test This Website page.

No Lighthouse scores, accessibility conformance, client screenshots, new public
packages, or full redesign are represented as completed in this PR.

## Verification results

- Baseline: strict TypeScript and the original development-mode build passed.
- Replacement: build and browser rendering passed before wrapper removal.
- Final: full Storybook + Cloudflare production build passed.
- `NITRO_PRESET=vercel bun run build:app`: passed; `.vercel/output/` generated.
  This is artifact validation, not verification on a deployed Vercel runtime.
- `bun run typecheck`: passed; strict mode preserved.
- HTTP smoke suite: 12/12 passed on development and built Cloudflare preview.
- Changed TypeScript source/config lint: passed after formatting touched files.
- Repository-wide lint: failed with 729 errors and 7 warnings, predominantly
  existing formatting debt. Generated build directories are now excluded;
  unrelated source files were not reformatted.
- Frozen Bun installation: passed with public npm URLs, unchanged versions/hashes.
- Browser: homepage checked at desktop and 390 × 844; mobile menu and client
  navigation checked separately. These are functional spot checks, not a full audit.
- Screenshots in `evidence/` show the foundation state, not the Phase C redesign.
- No successful provider calls or external contact messages were sent during tests.

The first packaged-preview run failed because Nitro was build-only; enabling it
for Vite preview fixed the missing `dist/server/server.js` handler and the entire
smoke suite passed. This is why production artifact runtime checks accompany builds.
