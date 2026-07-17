import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  AskAjExperience,
  type AskAjMessage,
} from "@/features/ask-aj/ask-aj-experience";
import { emptyContactFormValues } from "@/features/ask-aj/contact-contracts";
import type { AskAjCitation } from "@/features/ask-aj/contracts";

const sources: AskAjCitation[] = [
  {
    id: "ask-aj-work",
    sourceId: "work-case:ask-aj",
    title: "Ask A.J. AI Portfolio Agent",
    url: "/work/ask-aj",
    section: "Work",
    excerpt:
      "A production-minded AI portfolio agent with server-side provider calls, streamed application events, and recruiter-facing interaction design.",
  },
  {
    id: "architecture-principles",
    sourceId: "page:engineering",
    title: "Engineering Principles",
    url: "/engineering",
    section: "Engineering",
    excerpt:
      "Framing problems, weighing tradeoffs, naming risk, and using AI as leverage while keeping human judgment responsible for final decisions.",
  },
  {
    id: "platform-thinking",
    sourceId: "page:systems",
    title: "Systems and Platform Thinking",
    url: "/systems",
    section: "Architecture",
    excerpt:
      "Reusable architecture, component contracts, accessibility, documentation, and developer experience treated as product infrastructure.",
  },
];

const completedAnswer =
  "Ask A.J. is a live AI portfolio agent built by AJ Barnett to show how he approaches production-minded AI application engineering. It uses a TanStack Start server boundary for model calls, streams application-owned NDJSON events to the browser, and keeps provider keys out of client code.\n\nThe implementation emphasizes small product-shaped decisions:\n- recruiter-facing answers instead of a generic chatbot frame\n- visible streaming and graceful waiting states\n- clear boundaries between implemented behavior and future retrieval work\n- supporting evidence from AJ's enterprise design-system and frontend platform background";

const starterQuestions = [
  "What is Ask A.J. and how was it engineered?",
  "How does AJ build AI-powered products?",
  "How does AJ think about design systems?",
];

const meta = {
  title: "Features/Ask A.J./Experience",
  component: AskAjExperience,
  parameters: { layout: "fullscreen" },
  argTypes: {
    question: { control: "text" },
    messages: { control: "object" },
    statusLabel: { control: "text" },
    isStreaming: { control: "boolean" },
    error: { control: "text" },
    reducedMotion: { control: "boolean" },
    starterQuestions: { control: "object" },
    onQuestionChange: { action: "question changed" },
    onStarterQuestion: { action: "starter selected" },
    onSubmit: { action: "question submitted" },
    onStop: { action: "stream stopped" },
  },
  args: {
    question: "",
    messages: [],
    statusLabel: "Ready",
    isStreaming: false,
    reducedMotion: false,
    starterQuestions,
    onQuestionChange: fn(),
    onStarterQuestion: fn(),
    onSubmit: fn(),
    onStop: fn(),
    contactForm: {
      values: emptyContactFormValues,
      errors: {},
      state: "idle",
      onChange: fn(),
      onSubmit: fn(),
    },
  },
} satisfies Meta<typeof AskAjExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

const assistantMessage = (
  content: string,
  messageSources: AskAjCitation[] = [],
): AskAjMessage => ({
  id: "assistant-engineering",
  role: "assistant",
  content,
  sources: messageSources,
});

export const Empty: Story = {};

export const InitialThinking: Story = {
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    isStreaming: true,
    statusLabel: "Thinking through AJ's experience...",
    messages: [
      {
        id: "user-ask-aj",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(""),
    ],
  },
};

export const RotatingWaiting: Story = {
  args: {
    question: "How does AJ build AI-powered products?",
    isStreaming: true,
    statusLabel: "Reviewing the relevant details...",
    messages: [
      {
        id: "user-ai-products",
        role: "user",
        content: "How does AJ build AI-powered products?",
        sources: [],
      },
      assistantMessage(""),
    ],
  },
};

export const Writing: Story = {
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    isStreaming: true,
    statusLabel: "Writing a concise response...",
    messages: [
      {
        id: "user-ask-aj",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(
        "Ask A.J. is a live AI portfolio agent built with a server-owned streaming boundary",
      ),
    ],
  },
};

export const ReducedMotion: Story = {
  args: {
    question: "How does AJ build AI-powered products?",
    isStreaming: true,
    reducedMotion: true,
    statusLabel: "Almost ready...",
    messages: [
      {
        id: "user-ai-products",
        role: "user",
        content: "How does AJ build AI-powered products?",
        sources: [],
      },
      assistantMessage(""),
    ],
  },
};

export const CompletedWithSources: Story = {
  args: {
    statusLabel: "Ready for a follow-up",
    messages: [
      {
        id: "user-ask-aj",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(completedAnswer, sources),
    ],
  },
};

export const FollowUpConversation: Story = {
  args: {
    question: "How does that connect to AJ's enterprise experience?",
    statusLabel: "Ready for a follow-up",
    messages: [
      {
        id: "user-ask-aj",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(completedAnswer, sources),
      {
        id: "user-follow-up",
        role: "user",
        content: "How does that connect to AJ's enterprise experience?",
        sources: [],
      },
      assistantMessage(
        "The same instincts show up across AI products and platform engineering: define stable contracts, make behavior visible, protect users from internal complexity, and design the system so teams can build on it safely. For Ask A.J., that means server-owned provider boundaries, streamed application events, honest fallback states, and a UI that makes the system's limits clear.",
        [sources[0]],
      ),
    ],
  },
};

export const Error: Story = {
  args: {
    question: "What is Ask A.J. and how was it engineered?",
    error: "Ask A.J. received an invalid stream event. Please try again.",
  },
};

export const Aborted: Story = {
  args: {
    statusLabel: "Stopped",
    messages: [
      {
        id: "user-ask-aj",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(
        "Ask A.J. is a live AI portfolio agent built by AJ Barnett.",
      ),
    ],
  },
};

export const LongContent: Story = {
  args: {
    statusLabel: "Ready for a follow-up",
    messages: [
      {
        id: "user-long",
        role: "user",
        content:
          "How does AJ approach a design-system architecture decision that affects several product teams?",
        sources: [],
      },
      assistantMessage(
        `${completedAnswer}\n\nAJ would begin by framing the decision as a product and adoption problem, not simply a component-library choice. The useful questions are who owns the system, which teams need to migrate, what contracts must stay stable, and where the system has to permit flexibility without making every team invent a new convention. That makes tradeoffs visible before implementation creates a costly path dependency.`,
        [
          {
            ...sources[0],
            excerpt:
              "A deliberately long source excerpt demonstrates wrapping, stable spacing, and readable citation cards when source material contains detail about adoption, governance, accessibility requirements, component contracts, design tokens, cross-team migration planning, and the everyday engineering decisions that turn a library into dependable shared infrastructure.",
          },
          ...sources.slice(1),
        ],
      ),
    ],
  },
  render: (args) => (
    <div className="max-w-sm">
      <AskAjExperience {...args} />
    </div>
  ),
};

export const MobileStickyComposer: Story = {
  args: {
    question: "How did AJ approach adoption across product teams?",
    statusLabel: "Ready for a follow-up",
    messages: [
      {
        id: "user-mobile",
        role: "user",
        content: "What is Ask A.J. and how was it engineered?",
        sources: [],
      },
      assistantMessage(`${completedAnswer}\n\n${completedAnswer}`, sources),
    ],
  },
  render: (args) => (
    <div className="h-[42rem] max-w-sm overflow-hidden border border-border bg-background">
      <div className="h-full overflow-y-auto pb-32">
        <AskAjExperience {...args} />
      </div>
    </div>
  ),
};
