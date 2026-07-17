# AGENTS

Working notes for agents editing this repository.

- This repository is AJ Barnett's live engineering platform.
- The stack is React 19, TypeScript, TanStack Start, TanStack Router, Vite 8, Bun, Tailwind CSS v4, Storybook, and Vercel.
- We are building Ask A.J., a production-shaped AI engineering representative.
- Ask A.J. will use RAG, LangGraph, MCP, OpenAI, streaming responses, citations, conversation state, PostgreSQL, and vector search.
- TanStack Start remains the application and backend boundary.
- Do not introduce Next.js, Supabase, Express, NestJS, or a second application unless explicitly approved.
- Do not call model providers directly from browser code.
- Keep secrets and privileged integrations server-only.
- Explain architecture and reasoning before making major changes.
- Prefer small vertical slices over broad scaffolding.
- Never use any.
- Preserve strict TypeScript.
- Do not install dependencies without explaining why.
- Do not rewrite unrelated files.
- Run relevant tests and type checks after changes.
- AJ is learning the system from first principles, so explain what each layer does and why.
- Keep the connected branch in a buildable state; commits sync to the live preview.
- Avoid rewriting published git history (force pushes, rebasing / amending / squashing already-pushed commits).
