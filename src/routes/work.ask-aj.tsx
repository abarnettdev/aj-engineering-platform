import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Accent } from "@/components/page-hero";
import { Section, Eyebrow } from "@/components/section";
import { TechBadge } from "@/components/badge";
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
            {askAjKnowledge.summary} It demonstrates how AJ designs intelligent
            recruiter experiences with server-side model calls, streamed
            answers, request safeguards, fallback behavior, and clear tradeoffs.
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
            <CaseSection
              title="System Architecture"
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
