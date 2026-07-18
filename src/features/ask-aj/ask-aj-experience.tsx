import type { FormEvent, KeyboardEvent, RefObject, UIEvent } from "react";
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
import { cn } from "@/lib/utils";

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
  conversationScrollRef?: RefObject<HTMLDivElement | null>;
  conversationEndRef?: RefObject<HTMLDivElement | null>;
  onQuestionChange: (question: string) => void;
  onStarterQuestion: (question: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onStop: () => void;
  onConversationScroll?: (event: UIEvent<HTMLDivElement>) => void;
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
  conversationScrollRef,
  conversationEndRef,
  onQuestionChange,
  onStarterQuestion,
  onSubmit,
  onStop,
  onConversationScroll,
}: AskAjExperienceProps) {
  function handleQuestionKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (
      event.nativeEvent.isComposing ||
      event.shiftKey ||
      event.key !== "Enter"
    )
      return;

    event.preventDefault();
    if (isStreaming || !question.trim()) return;
    event.currentTarget.form?.requestSubmit();
  }

  const visibleStarterQuestions = starterQuestions.slice(0, 4);
  const visibleFollowUpQuestions = starterQuestions.slice(0, 3);
  const hasConversation = messages.length > 0;

  return (
    <main className="grid h-full min-h-0 gap-4 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-stretch">
      <section
        className="grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)_auto] border border-border bg-card"
        aria-labelledby="ask-aj-heading"
      >
        <div
          className={cn(
            "border-b border-border transition-[padding] duration-200 motion-reduce:transition-none",
            hasConversation ? "p-3 md:p-4" : "p-4 md:p-5",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
                Ask A.J.
              </p>
              <h1
                id="ask-aj-heading"
                className={cn(
                  "mt-1.5 font-display leading-tight text-ink transition-[font-size,line-height] duration-200 motion-reduce:transition-none",
                  hasConversation
                    ? "text-2xl md:text-3xl"
                    : "text-3xl md:text-4xl",
                )}
              >
                Ask about how I build.
              </h1>
            </div>
            <Badge
              variant="outline"
              className="mono max-w-[9rem] text-right text-[10px] uppercase tracking-[0.16em] sm:max-w-none"
            >
              Production AI Agent
            </Badge>
          </div>
          <p
            className={cn(
              "mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground transition-opacity duration-200 motion-reduce:transition-none md:text-base",
              hasConversation ? "hidden" : "block",
            )}
          >
            Ask A.J. is a production agent I designed and engineered so
            recruiters and engineering leaders can explore how I build software,
            architect systems, and solve complex problems.
          </p>
        </div>

        <div
          ref={conversationScrollRef}
          onScroll={onConversationScroll}
          className="min-h-0 overflow-y-auto overscroll-contain scroll-smooth p-4 [scroll-padding-bottom:2rem] md:p-5"
          aria-busy={isStreaming}
        >
          {messages.length === 0 && (
            <div className="space-y-3 transition-opacity duration-200 motion-reduce:transition-none">
              <div className="border border-border bg-surface p-3 md:p-4">
                <p className="text-sm leading-relaxed text-foreground/85">
                  Start with architecture, AI products, frontend platforms,
                  design systems, accessibility, or engineering philosophy.
                </p>
              </div>
              <div
                className="flex gap-2 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4"
                aria-label="Starter questions"
              >
                {visibleStarterQuestions.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => onStarterQuestion(starter)}
                    className="min-h-11 w-[15rem] shrink-0 border border-border bg-surface p-3 text-left text-sm leading-relaxed transition-colors hover:border-gold hover:bg-background md:w-auto"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 pb-6">
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
            {hasConversation && !isStreaming && (
              <div
                className="flex gap-2 overflow-x-auto pb-2 pt-1"
                aria-label="Follow-up suggestions"
              >
                {visibleFollowUpQuestions.map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => onStarterQuestion(starter)}
                    className="min-h-10 w-[13rem] shrink-0 border border-border bg-surface px-3 py-2 text-left text-xs leading-relaxed text-muted-foreground transition-colors hover:border-gold hover:bg-background hover:text-ink"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            )}
            <div ref={conversationEndRef} aria-hidden="true" />
          </div>

          {error && (
            <div
              className="border border-oxblood/40 bg-oxblood/5 p-4 text-sm text-oxblood"
              role="alert"
            >
              {error}
            </div>
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="border-t border-border bg-card px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:px-5 md:pb-[max(1rem,env(safe-area-inset-bottom))]"
        >
          <label className="sr-only" htmlFor="ask-aj-question">
            Ask A.J. a question
          </label>
          <Textarea
            id="ask-aj-question"
            ref={questionInputRef}
            value={question}
            rows={2}
            onChange={(event) => onQuestionChange(event.target.value)}
            onKeyDown={handleQuestionKeyDown}
            placeholder="Ask about AI products, architecture, or frontend platforms..."
            className="max-h-32 min-h-16 resize-none overflow-y-auto bg-background leading-relaxed"
            disabled={isStreaming}
          />
          <div className="mt-3 grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0 space-y-1">
              <AskAjStatus
                label={statusLabel}
                isLoading={isStreaming}
                reducedMotion={reducedMotion}
              />
              <p className="min-h-4 text-xs leading-none text-muted-foreground">
                Press Enter to send · Shift + Enter for a new line
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="outline"
                className={`min-h-11 w-20 ${isStreaming ? "" : "invisible"}`}
                onClick={onStop}
                disabled={!isStreaming}
                aria-hidden={!isStreaming}
                tabIndex={isStreaming ? undefined : -1}
              >
                <Square className="h-4 w-4" />
                Stop
              </Button>
              <Button
                type="submit"
                className="min-h-11 w-20"
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
      </section>

      <aside className="hidden min-h-0 overflow-y-auto overscroll-contain border border-border bg-surface p-5 lg:block">
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
