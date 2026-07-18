import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type UIEvent,
} from "react";
import { z } from "zod";
import {
  AskAjExperience,
  type AskAjMessage,
} from "@/features/ask-aj/ask-aj-experience";
import {
  contactFormValuesSchema,
  contactResponseSchema,
  emptyContactFormValues,
  getContactFieldErrors,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/features/ask-aj/contact-contracts";
import {
  askAjStreamEventSchema,
  type AskAjStreamEvent,
} from "@/features/ask-aj/contracts";
import { askAjSuggestedQuestions } from "@/content/knowledge/ask-aj";

const waitingStatusLabels = [
  "Thinking through AJ's experience...",
  "Reviewing the relevant details...",
  "Organizing a concise answer...",
  "Almost ready...",
];

const starterQuestions = askAjSuggestedQuestions.slice(0, 6);

export function AskAjInterface() {
  const [question, setQuestion] = useState("");
  const [conversationId, setConversationId] = useState<string>();
  const [messages, setMessages] = useState<AskAjMessage[]>([]);
  const [statusLabel, setStatusLabel] = useState("Ready");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasReceivedFirstDelta, setHasReceivedFirstDelta] = useState(false);
  const [waitingStatusIndex, setWaitingStatusIndex] = useState(0);
  const [streamSession, setStreamSession] = useState(0);
  const [parseError, setParseError] = useState<string>();
  const [contactValues, setContactValues] = useState<ContactFormValues>(
    emptyContactFormValues,
  );
  const [contactErrors, setContactErrors] = useState<ContactFieldErrors>({});
  const [contactState, setContactState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [contactError, setContactError] = useState<string>();
  const [completionAnnouncement, setCompletionAnnouncement] = useState("");
  const abortRef = useRef<AbortController | undefined>(undefined);
  const requestIdRef = useRef(0);
  const questionInputRef = useRef<HTMLTextAreaElement>(null);
  const conversationScrollRef = useRef<HTMLDivElement>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);
  const shouldFollowScrollRef = useRef(true);
  const scrollFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (scrollFrameRef.current != null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isStreaming || hasReceivedFirstDelta) return;

    const intervalId = window.setInterval(() => {
      setWaitingStatusIndex(
        (current) => (current + 1) % waitingStatusLabels.length,
      );
    }, 2_500);

    return () => window.clearInterval(intervalId);
  }, [hasReceivedFirstDelta, isStreaming, streamSession]);

  useEffect(() => {
    if (!shouldFollowScrollRef.current) return;
    queueScrollToBottom();
  }, [messages, parseError]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isStreaming) return;

    const trimmed = question.trim();
    if (!trimmed) return;

    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    abortRef.current?.abort();

    const controller = new AbortController();
    abortRef.current = controller;

    const assistantId = crypto.randomUUID();
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", content: trimmed, sources: [] },
      { id: assistantId, role: "assistant", content: "", sources: [] },
    ]);
    shouldFollowScrollRef.current = true;
    setQuestion("");
    setHasReceivedFirstDelta(false);
    setWaitingStatusIndex(0);
    setStreamSession((current) => current + 1);
    setParseError(undefined);
    setCompletionAnnouncement("");
    setIsStreaming(true);

    try {
      const response = await fetch("/api/ask-aj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed, conversationId }),
        signal: controller.signal,
      });

      if (!response.body) {
        throw new Error("The Ask A.J. stream did not open.");
      }

      await readAskAjStream(response.body, controller.signal, (streamEvent) => {
        if (requestIdRef.current !== requestId || controller.signal.aborted)
          return;
        applyStreamEvent(streamEvent, assistantId);
      });
    } catch (error) {
      if (controller.signal.aborted) return;
      setParseError(
        error instanceof Error ? error.message : "Ask A.J. could not respond.",
      );
    } finally {
      if (requestIdRef.current === requestId) {
        if (abortRef.current === controller) abortRef.current = undefined;
        setIsStreaming(false);
        if (!controller.signal.aborted) {
          setStatusLabel("Ready for a follow-up");
          questionInputRef.current?.focus();
        }
      }
    }
  }

  function applyStreamEvent(event: AskAjStreamEvent, assistantId: string) {
    if (event.type === "conversation.started") {
      setConversationId(event.conversationId);
      return;
    }
    if (event.type === "agent.status") {
      return;
    }
    if (event.type === "message.delta") {
      setHasReceivedFirstDelta(true);
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? { ...message, content: `${message.content}${event.delta}` }
            : message,
        ),
      );
      return;
    }
    if (event.type === "message.completed") {
      setCompletionAnnouncement("Answer complete. You can ask a follow-up.");
      return;
    }
    if (event.type === "citation") {
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? { ...message, sources: [...message.sources, event.citation] }
            : message,
        ),
      );
      return;
    }
    if (event.type === "error") {
      setParseError(event.message);
    }
  }

  function stopStream() {
    abortRef.current?.abort();
    abortRef.current = undefined;
    setIsStreaming(false);
    setHasReceivedFirstDelta(false);
    setStatusLabel("Stopped");
    setCompletionAnnouncement(
      "Response stopped. You can ask another question.",
    );
    questionInputRef.current?.focus();
  }

  function updateContactField(field: keyof ContactFormValues, value: string) {
    setContactValues((current) => ({ ...current, [field]: value }));
    setContactErrors((current) => ({ ...current, [field]: undefined }));
    if (contactState !== "idle") setContactState("idle");
  }

  function handleConversationScroll(event: UIEvent<HTMLDivElement>) {
    shouldFollowScrollRef.current = isNearScrollBottom(event.currentTarget);
  }

  function queueScrollToBottom() {
    if (scrollFrameRef.current != null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = undefined;
      conversationEndRef.current?.scrollIntoView({ block: "end" });
    });
  }

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contactState === "submitting") return;

    const parsed = contactFormValuesSchema.safeParse(contactValues);

    if (!parsed.success) {
      setContactErrors(getContactFieldErrors(parsed.error));
      setContactState("error");
      setContactError("Please review the highlighted fields and try again.");
      return;
    }

    setContactState("submitting");
    setContactError(undefined);
    setContactErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = contactResponseSchema.safeParse(await response.json());

      if (!body.success || !response.ok || !body.data.success) {
        throw new Error(
          body.success
            ? body.data.message
            : "Your message could not be sent. Please try again shortly.",
        );
      }

      setContactValues(emptyContactFormValues);
      setContactState("success");
    } catch (error) {
      setContactState("error");
      setContactError(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again shortly.",
      );
    }
  }

  return (
    <AskAjExperience
      question={question}
      messages={messages}
      statusLabel={
        isStreaming
          ? hasReceivedFirstDelta
            ? "Writing a concise response..."
            : waitingStatusLabels[waitingStatusIndex]
          : statusLabel
      }
      isStreaming={isStreaming}
      error={parseError}
      completionAnnouncement={completionAnnouncement}
      starterQuestions={starterQuestions}
      contactForm={{
        values: contactValues,
        errors: contactErrors,
        state: contactState,
        error: contactError,
        onChange: updateContactField,
        onSubmit: submitContact,
      }}
      questionInputRef={questionInputRef}
      conversationScrollRef={conversationScrollRef}
      conversationEndRef={conversationEndRef}
      onQuestionChange={setQuestion}
      onStarterQuestion={setQuestion}
      onSubmit={handleSubmit}
      onStop={stopStream}
      onConversationScroll={handleConversationScroll}
    />
  );
}

function isNearScrollBottom(element: HTMLDivElement) {
  const distanceFromBottom =
    element.scrollHeight - element.scrollTop - element.clientHeight;
  return distanceFromBottom < 96;
}

async function readAskAjStream(
  body: ReadableStream<Uint8Array>,
  signal: AbortSignal,
  onEvent: (event: AskAjStreamEvent) => void,
) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (!signal.aborted) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.trim() || signal.aborted) continue;
        parseAndApplyLine(line, onEvent);
      }
    }

    buffer += decoder.decode();
    if (buffer.trim() && !signal.aborted) {
      parseAndApplyLine(buffer, onEvent);
    }
  } finally {
    reader.releaseLock();
  }
}

function parseAndApplyLine(
  line: string,
  onEvent: (event: AskAjStreamEvent) => void,
) {
  try {
    onEvent(askAjStreamEventSchema.parse(JSON.parse(line)));
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error("Ask A.J. received an invalid stream event.");
    }
    throw error;
  }
}
