import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Accent } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { TechBadge } from "@/components/badge";
import {
  AskAjDecisionGrid,
  AskAjFlowDiagram,
  AskAjMilestoneTimeline,
  AskAjSignalGrid,
  type AskAjDecision,
  type AskAjFlowStep,
  type AskAjMilestone,
  type AskAjSignal,
} from "@/features/ask-aj/ask-aj-architecture";
import { askAjKnowledge } from "@/content/knowledge/ask-aj";
import heroImage from "@/assets/composite-ai-lifecycle.jpg";

export const Route = createFileRoute("/work/ask-aj")({
  head: () => ({
    meta: [
      {
        title: "Ask A.J. Case Study · AI Portfolio Agent · AJ Barnett",
      },
      {
        name: "description",
        content:
          "A production-minded AI portfolio agent built by AJ Barnett with OpenAI Responses API, NDJSON streaming, validation, fallback models, cached answers, and graceful degradation.",
      },
      {
        property: "og:title",
        content: "Ask A.J. · A Production-Minded AI Portfolio Agent",
      },
      {
        property: "og:description",
        content:
          "A live AI agent built by AJ Barnett to demonstrate AI application engineering, resilient streaming UX, and server-side safeguards.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: AskAjCaseStudy,
});

function AskAjCaseStudy() {
  return (
    <>
      <PageHero
        eyebrow="Case Study · AI Application Engineering"
        chapter="AI"
        chapterLabel="Ask A.J."
        image={heroImage}
        imageAlt="AI lifecycle diagram representing an engineered AI product workflow."
        imageCaption="Live AI agent"
        imageMeta="Production-minded MVP"
        headline={
          <>
            Ask A.J.
            <br />
            <Accent>AI portfolio agent.</Accent>
          </>
        }
        description={
          <>
            Ask A.J. is a production AI agent AJ designed and engineered to help
            recruiters and engineering leaders understand how he builds
            software, architects systems, and handles production tradeoffs.
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr]">
          <aside className="h-fit border border-border bg-surface p-6 lg:sticky lg:top-24">
            <Eyebrow>Live System</Eyebrow>
            <h2 className="mt-5 font-display text-3xl text-ink">
              Built to prove the work.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The product idea is simple: let a recruiter ask direct questions
              and see how AJ thinks about engineering, while the implementation
              shows how an AI interface behaves under real production
              constraints.
            </p>
            <Link
              to="/ask-aj"
              className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background hover:bg-gold hover:text-ink"
            >
              Try Ask A.J.
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </aside>

          <div className="space-y-12">
            <CaseSection
              title="Overview"
              body={[
                askAjKnowledge.value,
                "It is not a generic chatbot. The browser receives an application-owned NDJSON event stream, while TanStack Start server code owns secrets, validation, model calls, fallback behavior, and structured logs.",
              ]}
            />

            <section className="space-y-5 border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                How Ask A.J. Works
              </h2>
              <p className="max-w-3xl leading-relaxed text-foreground/85">
                The implemented system is intentionally small: a React
                conversation interface, a TanStack Start server route, curated
                approved context, OpenAI Responses API streaming, layered
                fallbacks, and a server-side recruiter contact flow. Future RAG,
                vector search, LangGraph, MCP, and persistent conversations are
                roadmap items, not current claims.
              </p>
              <AskAjFlowDiagram
                title="Request lifecycle"
                description="The successful path from recruiter question to streamed answer. The browser receives application events, not raw provider objects."
                steps={requestLifecycleSteps}
              />
              <AskAjFlowDiagram
                title="Reliability and fallback flow"
                description="Before giving up, the server tries bounded recovery paths that keep user-facing errors safe and understandable."
                steps={reliabilityFlowSteps}
              />
              <AskAjFlowDiagram
                title="Contact delivery flow"
                description="Recruiter contact stays server-side, validates the form, and sends through Resend with the recruiter's email as reply-to."
                steps={contactFlowSteps}
              />
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                Why It Was Built This Way
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
                The decisions below are visible in the current implementation:
                server-only provider calls, streamed NDJSON, bounded provider
                recovery, Storybook documentation, semantic tokens, and keyboard
                behavior that matches modern AI tools.
              </p>
              <div className="mt-6">
                <AskAjDecisionGrid decisions={architectureDecisions} />
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                Designed Beyond the Happy Path
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {reliabilityGroups.map((group) => (
                  <article
                    key={group.title}
                    className="border border-border bg-surface p-5"
                  >
                    <h3 className="font-display text-2xl text-ink">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-foreground/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="border border-ink bg-ink p-6 text-background">
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold-text-on-dark">
                Interview the engineer
              </p>
              <h2 className="mt-4 font-display text-3xl">
                Meet the AI AJ built. Then meet the engineer behind it.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/75">
                Start with Ask A.J. to explore AJ's work, architecture
                decisions, and engineering philosophy before the first
                conversation. The experience is both a recruiter tool and a
                working demonstration of his software judgment.
              </p>
              <Link
                to="/ask-aj"
                className="mt-6 inline-flex items-center gap-2 border border-background/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background hover:border-gold hover:text-gold-text-on-dark"
              >
                Start with Ask A.J.
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                Engineering Philosophy in the Product
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {philosophyExamples.map((item) => (
                  <article
                    key={item.theme}
                    className="border border-border p-5"
                  >
                    <h3 className="font-display text-2xl text-ink">
                      {item.theme}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.example}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                Product Evolution
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
                These are implementation milestones from the current repository
                and project notes, intentionally shown without fake dates.
              </p>
              <div className="mt-6">
                <AskAjMilestoneTimeline milestones={evolutionMilestones} />
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="font-display text-3xl text-ink">
                Engineering Signals
              </h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-foreground/85">
                These are repository-verifiable signals, not live operational
                metrics. The product does not claim uptime, conversion, latency,
                token-cost, or accessibility scores that are not measured here.
              </p>
              <div className="mt-6">
                <AskAjSignalGrid signals={engineeringSignals} />
              </div>
            </section>

            <CaseSection
              title="Current System Architecture"
              body={askAjKnowledge.architecture}
            />
            <CaseList
              title="Implemented Capabilities"
              items={askAjKnowledge.implementedCapabilities}
            />
            <CaseList
              title="Reliability and Graceful Degradation"
              items={askAjKnowledge.reliability}
            />
            <CaseList
              title="Security and Abuse Safeguards"
              items={askAjKnowledge.safeguards}
            />
            <CaseSection
              title="Engineering Decisions and Tradeoffs"
              body={askAjKnowledge.tradeoffs}
            />
            <CaseList
              title="Current Limitations"
              items={askAjKnowledge.limitations}
            />
            <CaseList title="Future Roadmap" items={askAjKnowledge.roadmap} />

            <section className="border border-border bg-card p-6">
              <h2 className="font-display text-3xl text-ink">
                Technology Stack
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {askAjKnowledge.technologyStack.map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

const requestLifecycleSteps: AskAjFlowStep[] = [
  {
    title: "Recruiter asks",
    description:
      "The React interface captures the question, preserves native form behavior, and supports Enter to send with Shift + Enter for a newline.",
  },
  {
    title: "Server validates",
    description:
      "The TanStack Start API route reads limited JSON, validates the request shape, checks origin, rate limits, and duplicate in-flight questions.",
  },
  {
    title: "Model streams",
    description:
      "Server code constructs approved instructions and context, calls the OpenAI Responses API with store:false, and translates provider deltas into NDJSON message.delta events.",
  },
  {
    title: "Interface renders",
    description:
      "The browser parses NDJSON, updates status and answer text progressively, handles aborts, and announces completion for assistive technology.",
  },
];

const reliabilityFlowSteps: AskAjFlowStep[] = [
  {
    title: "Request guards",
    description:
      "Content type, body size, schema, origin, rate-limit, and duplicate-request checks reject unsafe or noisy requests before provider work begins.",
  },
  {
    title: "Primary attempt",
    description:
      "The primary OpenAI model gets a bounded timeout and transient retries for retryable provider statuses before the first text delta.",
  },
  {
    title: "Fallback paths",
    description:
      "Eligible failures move to a fallback model, then curated cached answers, then a static graceful fallback if no cache match exists.",
  },
  {
    title: "Safe outcome",
    description:
      "Circuit breaker state, structured logs, safe user errors, and abort handling keep failures diagnosable without exposing secrets or raw provider internals.",
  },
];

const contactFlowSteps: AskAjFlowStep[] = [
  {
    title: "Recruiter submits",
    description:
      "The integrated contact form validates name, work email, optional role/company, message, and a hidden honeypot field.",
  },
  {
    title: "Server checks",
    description:
      "The contact API parses the payload, applies local rate limiting and duplicate-submission protection, and loads server-only email configuration.",
  },
  {
    title: "Resend delivers",
    description:
      "Resend sends from the verified server-owned sender to AJ's configured inbox with the recruiter's email set as replyTo.",
  },
  {
    title: "User sees status",
    description:
      "The UI shows accessible success or safe error messaging without exposing provider diagnostics or recruiter message content.",
  },
];

const architectureDecisions: AskAjDecision[] = [
  {
    decision: "Keep model calls server-side",
    why: "Provider keys, instructions, request validation, token limits, and fallback behavior belong behind the TanStack Start boundary.",
    tradeoff:
      "The browser cannot call the model directly, so the server route has to own streaming translation and error handling.",
    result:
      "The client receives only application-owned stream events and never sees secrets, raw provider events, or protected instructions.",
  },
  {
    decision: "Stream NDJSON events",
    why: "A recruiter should see progress quickly, and the UI should own stable events rather than provider-specific payloads.",
    tradeoff:
      "The client must parse partial chunks safely and handle malformed stream events.",
    result:
      "Ask A.J. can show waiting, writing, completion, abort, and error states with one browser-facing contract.",
  },
  {
    decision: "Layer fallback behavior",
    why: "A credible AI product needs useful behavior when the primary provider path is slow, rate limited, or unavailable.",
    tradeoff:
      "Cached and static answers are narrower than live generation and must not pretend to be retrieval.",
    result:
      "The system can degrade from primary model to fallback model to curated answer to static fallback without fabricating citations.",
  },
  {
    decision: "Document interaction states in Storybook",
    why: "Streaming, waiting, error, aborted, long-content, mobile, and contact states are hard to reason about from a single happy path.",
    tradeoff: "Stories add maintenance overhead when the UI contract changes.",
    result:
      "The important visual states are deterministic, independently renderable, and safe from real network calls.",
  },
  {
    decision: "Use semantic success tokens",
    why: "The contact form success state should communicate completion without borrowing the site's gold accent or warning tone.",
    tradeoff: "The design token surface grows slightly.",
    result:
      "Success, error, accent, and neutral states now have clearer visual roles in light and dark themes.",
  },
  {
    decision: "Match modern AI keyboard behavior",
    why: "Enter to send and Shift + Enter for a newline are now expected in AI chat composers.",
    tradeoff:
      "Textarea key handling must respect native forms, pending states, and IME composition.",
    result:
      "Ask A.J. and the contact message textarea submit predictably while preserving multiline input and accessibility.",
  },
];

const reliabilityGroups = [
  {
    title: "Response reliability",
    items: [
      "NDJSON streaming with stable application events.",
      "Primary model timeout and transient retry before the first delta.",
      "Fallback model for eligible provider failures.",
      "Curated cached answers and static fallback response.",
      "Circuit breaker for repeated provider failures.",
    ],
  },
  {
    title: "Abuse and request protection",
    items: [
      "JSON content-type and 25 KB body limit.",
      "Zod request schema with a 1,000-character question cap.",
      "Allowed-origin validation.",
      "Local per-client rate limiting.",
      "Duplicate in-flight question protection.",
    ],
  },
  {
    title: "Observability and diagnosis",
    items: [
      "Structured provider-safe logs for retries, fallback, circuit state, and request rejection.",
      "Availability counters for valid request outcomes.",
      "Provider diagnostics avoid API keys, authorization headers, full questions, and generated answers.",
    ],
  },
  {
    title: "Interaction resilience",
    items: [
      "AbortController cancellation for Stop and replacement requests.",
      "Safe user-facing errors for provider or configuration failures.",
      "Duplicate contact submission protection.",
      "IME-safe Enter behavior and disabled pending submit states.",
      "Reduced-motion friendly loading status.",
    ],
  },
] as const;

const philosophyExamples = [
  {
    theme: "Chase problems worth solving, not technologies",
    example:
      "Ask A.J. starts from a recruiter problem: understanding AJ's judgment quickly. The model integration exists to serve that product moment, not to prove a tool choice.",
  },
  {
    theme: "AI should amplify engineering judgment",
    example:
      "The model generates language, but the application owns validation, permissions, context, output limits, fallback behavior, and the user-facing contract.",
  },
  {
    theme: "Accessibility is product quality",
    example:
      "The interface preserves labels, status announcements, keyboard submission behavior, reduced-motion support, safe focus return, and readable long-form answers.",
  },
  {
    theme: "Developer experience affects product quality",
    example:
      "Storybook documents deterministic states for streaming, waiting, long content, mobile sticky behavior, contact success, validation, and error handling.",
  },
  {
    theme: "Reliability matters beyond the happy path",
    example:
      "Retries, fallback model behavior, cached answers, static fallback, circuit breaking, rate limits, request guards, and safe errors are part of the current implementation.",
  },
  {
    theme: "Design systems are product infrastructure",
    example:
      "AJ's enterprise design-system experience shows up in the portfolio platform through reusable components, semantic tokens, consistent states, and accessible interaction patterns.",
  },
] as const;

const evolutionMilestones: AskAjMilestone[] = [
  {
    label: "Recruiter-focused portfolio concept",
    detail:
      "Ask A.J. became the flagship way to explore AJ's work, positioning, and engineering philosophy through a product experience.",
  },
  {
    label: "Streaming AI interface",
    detail:
      "The UI gained NDJSON parsing, visible waiting and writing states, abort behavior, long-answer rendering, and follow-up conversation support.",
  },
  {
    label: "Server-side OpenAI integration",
    detail:
      "Provider calls, instructions, output limits, retries, fallback model behavior, and safe provider errors moved behind TanStack Start server code.",
  },
  {
    label: "Production safeguards",
    detail:
      "Request guards, rate limiting, duplicate protection, cached/static fallback answers, circuit breaking, and structured logging were added.",
  },
  {
    label: "Recruiter contact integration",
    detail:
      "The contact form now validates locally and server-side, sends through Resend, and uses the recruiter's email as reply-to.",
  },
  {
    label: "Documentation and polish",
    detail:
      "Storybook coverage, semantic success styling, mobile wrapper fixes, keyboard behavior, and this architecture case study make the product easier to inspect.",
  },
];

const engineeringSignals: AskAjSignal[] = [
  {
    label: "Documented states",
    value: "25",
    detail:
      "Ask A.J. Storybook states across experience, status, answer content, launcher, and contact form stories.",
  },
  {
    label: "Fallback layers",
    value: "4",
    detail:
      "Primary model, fallback model, curated cached answer, and static fallback response.",
  },
  {
    label: "Architecture flows",
    value: "3",
    detail:
      "Request lifecycle, reliability/fallback flow, and contact delivery flow documented on this page.",
  },
  {
    label: "Input modes",
    value: "2",
    detail:
      "Enter submits, Shift + Enter creates a newline, with IME composition respected.",
  },
  {
    label: "Theme support",
    value: "2",
    detail:
      "Light and dark themes share semantic tokens for success, destructive, accent, and neutral UI states.",
  },
  {
    label: "Validation gates",
    value: "4",
    detail:
      "Targeted ESLint, TypeScript, development build, and Storybook build are part of this sprint's validation.",
  },
] as const;

function CaseSection({
  title,
  body,
}: {
  title: string;
  body: readonly string[];
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4">
        {body.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-foreground/85">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function CaseList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="border border-border bg-surface p-4 text-sm leading-relaxed text-foreground/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
