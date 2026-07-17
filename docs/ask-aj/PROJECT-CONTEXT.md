# Ask A.J. Project Context

## Product

Ask A.J. is an AI engineering representative embedded in AJ Barnett's existing engineering platform.

It is not a generic chatbot or a thin ChatGPT wrapper.

The system helps recruiters, engineering leaders, and other visitors understand:

- AJ's professional experience
- AJ's engineering philosophy
- AJ's architecture decisions
- the Legato enterprise design system
- frontend engineering
- React and TypeScript experience
- AI workflows
- CI/CD
- software architecture
- portfolio projects and Field Notes articles

## Long-Term Product Capabilities

Ask A.J. should eventually:

- search the entire engineering platform
- retrieve AJ-specific evidence
- quote and cite portfolio content
- explain architecture and code
- recommend relevant pages
- answer follow-up questions
- maintain conversation state
- collect recruiter information with consent
- schedule interviews
- summarize recruiter conversations
- notify AJ about qualified leads

## Required Architecture

The intended production architecture includes:

- the existing TanStack Start application
- React 19 and TypeScript
- TanStack Start server endpoints
- OpenAI as the initial reasoning provider
- LangGraph for explicit workflow orchestration
- MCP for standardized tools and resources
- RAG over AJ-owned knowledge
- PostgreSQL
- vector similarity search
- streamed responses
- grounded citations
- durable conversation records
- observability and evaluation

## Request Lifecycle

Recruiter question
-> TanStack Start server endpoint
-> load or create conversation
-> LangGraph execution
-> classify intent
-> decide required capabilities
-> retrieve knowledge or invoke MCP tools
-> assemble trusted context
-> generate with OpenAI
-> validate citations
-> stream response and citations
-> persist conversation and agent-run metadata

## Architectural Principles

1. The model may propose reasoning, but the application owns truth, permissions, and actions.
2. Personal claims about AJ must be grounded in published or approved AJ sources.
3. Only retrieved evidence may become a citation.
4. Secrets, model calls, database access, and privileged tools must remain server-side.
5. LangGraph owns the execution workflow.
6. MCP provides standardized capability access.
7. RAG provides retrieval from AJ's knowledge base.
8. PostgreSQL owns durable product records.
9. The existing TanStack Start application remains the application boundary.
10. Build vertical slices rather than broad disconnected scaffolding.

## Initial Vertical Slice

The first production-shaped request is:

"What did AJ build at CDW?"

The working slice must:

1. ingest one canonical AJ document
2. split it into deterministic chunks
3. create embeddings
4. store document, chunk, and vector records
5. retrieve relevant evidence
6. expose retrieval through an MCP capability
7. invoke that capability from LangGraph
8. generate a grounded OpenAI answer
9. stream the answer through TanStack Start
10. render at least one real citation
11. retain a conversation ID
12. record agent-run metadata

## Initial Domain Concepts

- Conversation
- Message
- KnowledgeDocument
- KnowledgeChunk
- RetrievalResult
- Citation
- QuestionIntent
- AgentRoute
- AgentState
- Tool
- ToolCall
- ToolResult
- AgentRun
- StreamEvent

## Current Repository Facts

- This is a single TanStack Start application.
- Routes are file-based under `src/routes`.
- `src/content/site-data.ts` contains typed portfolio data.
- Page prose exists throughout the route files.
- `public/resume.pdf` is an additional source.
- Reusable application and shadcn/Radix components already exist.
- Tailwind v4 tokens are centralized in `src/styles.css`.
- No database, OpenAI, LangGraph, MCP, or vector dependencies are installed yet.
- No server-only environment validation layer currently exists.
- No streaming API pattern currently exists.

## Prohibited Shortcuts

Do not:

- build a generic chatbot first
- call OpenAI directly from the browser
- introduce Next.js
- introduce Supabase
- introduce Express or NestJS without an approved architectural reason
- create a disconnected second application
- install packages before checking runtime compatibility
- build an oversized autonomous agent prompt
- fabricate citations
- turn client-imported content modules into server-only modules
- broadly scaffold every future subsystem before proving one vertical slice
