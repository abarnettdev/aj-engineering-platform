import type { FormEvent, RefObject } from "react";
import { ArrowUpRight, Send, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  AskAjContactForm,
  type AskAjContactFormProps,
} from "@/features/ask-aj/ask-aj-contact-form";
import { AskAjAnswerContent } from "@/features/ask-aj/ask-aj-answer-content";
import { AskAjStatus } from "@/features/ask-aj/ask-aj-status";
import type { AskAjCitation } from "@/features/ask-aj/contracts";

export type AskAjMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources: AskAjCitation[];
};

export type AskAjExperienceProps = {
  question: string;
  messages: AskAjMessage[];
  statusLabel: string;
  isStreaming: boolean;
  error?: string;
  completionAnnouncement?: string;
  reducedMotion?: boolean;
  starterQuestions: string[];
  contactForm: AskAjContactFormProps;
  questionInputRef?: RefObject<HTMLTextAreaElement | null>;
  onQuestionChange: (question: string) => void;
  onStarterQuestion: (question: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
};

export function AskAjExperience({
  question,
  messages,
  statusLabel,
  isStreaming,
  error,
  completionAnnouncement,
  reducedMotion,
  starterQuestions,
  contactForm,
  questionInputRef,
  onQuestionChange,
  onStarterQuestion,
  onSubmit,
  onStop,
}: AskAjExperienceProps) {
  return (
    <main className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
      <section
        className="min-w-0 border border-border bg-card"
        aria-labelledby="ask-aj-heading"
      >
        <div className="border-b border-border p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                Ask A.J.
              </p>
              <h1
                id="ask-aj-heading"
                className="mt-2 font-display text-3xl leading-tight text-ink md:text-5xl"
              >
                Explore my AI product engineering.
              </h1>
            </div>
            <Badge
              variant="outline"
              className="mono uppercase tracking-[0.18em]"
            >
              MVP
            </Badge>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Ask A.J. is a live AI agent built to help recruiters and engineering
            leaders understand my work: AI-powered product systems, React and
            TypeScript architecture, frontend platforms, enterprise design
            systems, accessibility, and production tradeoffs.
          </p>
        </div>

        <div className="space-y-5 p-5">
          {messages.length === 0 && (
            <div className="grid gap-3 md:grid-cols-3">
              {starterQuestions.map((starter) => (
                <button
                  key={starter}
                  type="button"
                  onClick={() => onStarterQuestion(starter)}
                  className="min-h-11 border border-border bg-surface p-4 text-left text-sm leading-relaxed transition-colors hover:border-gold hover:bg-background"
                >
                  {starter}
                </button>
              ))}
            </div>
          )}

          <div
            className="min-h-[15rem] space-y-4 pb-36"
            aria-busy={isStreaming}
          >
            {messages.map((message) => (
              <article
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-2xl bg-ink p-4 text-background"
                    : "max-w-3xl border border-border bg-background p-5"
                }
              >
                <p className="mono mb-2 text-[10px] uppercase tracking-[0.22em] opacity-70">
                  {message.role === "user" ? "You" : "Ask A.J."}
                </p>
                <AskAjAnswerContent
                  content={message.content}
                  isPending={message.role === "assistant" && isStreaming}
                />
                {message.sources.length > 0 && (
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
                      Sources
                    </p>
                    <ul className="mt-3 space-y-3">
                      {message.sources.map((source) => (
                        <li key={source.id}>
                          <a
                            href={source.url}
                            className="group block border border-border bg-surface p-4 transition-colors hover:border-gold hover:bg-background"
                          >
                            <span className="flex items-center justify-between gap-4">
                              <span className="font-semibold text-ink">
                                {source.title}
                              </span>
                              <ArrowUpRight className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
                            {source.section && (
                              <span className="mono mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                {source.section} · {source.sourceId}
                              </span>
                            )}
                            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                              {source.excerpt}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          {error && (
            <div
              className="border border-oxblood/40 bg-oxblood/5 p-4 text-sm text-oxblood"
              role="alert"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            className="sticky bottom-0 z-10 -mx-5 border-y border-border bg-card/95 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur"
          >
            <label className="sr-only" htmlFor="ask-aj-question">
              Ask A.J. a question
            </label>
            <Textarea
              id="ask-aj-question"
              ref={questionInputRef}
              value={question}
              onChange={(event) => onQuestionChange(event.target.value)}
              placeholder="Ask how AJ builds AI-powered products, reliable AI interfaces, or frontend platforms..."
              className="min-h-24 resize-none bg-background"
              disabled={isStreaming}
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <AskAjStatus
                label={statusLabel}
                isLoading={isStreaming}
                reducedMotion={reducedMotion}
              />
              <div className="flex gap-2">
                {isStreaming && (
                  <Button
                    type="button"
                    variant="outline"
                    className="min-h-11"
                    onClick={onStop}
                  >
                    <Square className="h-4 w-4" />
                    Stop
                  </Button>
                )}
                <Button
                  type="submit"
                  className="min-h-11"
                  disabled={isStreaming || !question.trim()}
                >
                  <Send className="h-4 w-4" />
                  Ask
                </Button>
              </div>
            </div>
          </form>
          <p className="sr-only" aria-live="polite">
            {completionAnnouncement}
          </p>
        </div>
      </section>

      <aside className="h-fit border border-border bg-surface p-5 lg:sticky lg:top-24">
        <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
          Recruiter contact
        </p>
        <h2 className="mt-3 font-display text-2xl text-ink">
          Want to talk with AJ?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Reach out with your role, company, and what you would like to discuss.
        </p>
        <AskAjContactForm {...contactForm} />
      </aside>
    </main>
  );
}
