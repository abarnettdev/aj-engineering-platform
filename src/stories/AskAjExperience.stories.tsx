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
    id: "cdw-legato-work",
    sourceId: "work-case:cdw-legato",
    title: "Legato Design System",
    url: "/work#cdw-legato",
    section: "Work",
    excerpt:
      "Evolved an enterprise design system supporting 10+ product teams and 15+ applications across the CDW portfolio.",
  },
  {
    id: "cdw-timeline",
    sourceId: "timeline:cdw-legato",
    title: "CDW, Legato Design System",
    url: "/timeline#cdw-legato",
    section: "Journey",
    excerpt:
      "Senior Software Engineer I / Technical Lead working with React, TypeScript, Stencil, Web Components, Storybook, Nx, design tokens, and accessibility.",
  },
  {
    id: "engineering-principles",
    sourceId: "page:engineering",
    title: "How I think",
    url: "/engineering",
    section: "Engineering principles",
    excerpt:
      "The operating system underneath the work: framing problems, weighing tradeoffs, naming risk, and treating AI as leverage without ceding judgment.",
  },
];

const completedAnswer =
  "At CDW, AJ worked on Legato, an enterprise design system serving 10+ product teams and 15+ applications. As a Senior Software Engineer I and Technical Lead, he helped make a shared UI foundation practical for product teams through React, TypeScript, Stencil Web Components, Storybook, Nx, design tokens, and accessibility.\n\nThe system was treated as product infrastructure:\n- It reduced repeated interface decisions.\n- It gave product teams a shared foundation.\n- It let engineering and design teams focus on product work.";

const starterQuestions = [
  "What did AJ build at CDW?",
  "How does AJ think about design systems?",
  "What is AJ's React and TypeScript experience?",
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
  id: "assistant-cdw",
  role: "assistant",
  content,
  sources: messageSources,
});

export const Empty: Story = {};

export const InitialThinking: Story = {
  args: {
    question: "What did AJ build at CDW?",
    isStreaming: true,
    statusLabel: "Thinking through AJ's experience...",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(""),
    ],
  },
};

export const RotatingWaiting: Story = {
  args: {
    question: "What did AJ build at CDW?",
    isStreaming: true,
    statusLabel: "Reviewing the relevant details...",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(""),
    ],
  },
};

export const Writing: Story = {
  args: {
    question: "What did AJ build at CDW?",
    isStreaming: true,
    statusLabel: "Writing a concise response...",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(
        "At CDW, AJ worked on Legato, an enterprise design system",
      ),
    ],
  },
};

export const ReducedMotion: Story = {
  args: {
    question: "What did AJ build at CDW?",
    isStreaming: true,
    reducedMotion: true,
    statusLabel: "Almost ready...",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
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
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(completedAnswer, sources),
    ],
  },
};

export const FollowUpConversation: Story = {
  args: {
    question: "What did that mean for product teams?",
    statusLabel: "Ready for a follow-up",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(completedAnswer, sources),
      {
        id: "user-follow-up",
        role: "user",
        content: "What did that mean for product teams?",
        sources: [],
      },
      assistantMessage(
        "It gave product teams a shared, documented set of interface patterns and implementation primitives. Instead of solving accessibility, token usage, and component behavior from scratch in each application, teams could compose a stable foundation and direct their effort toward the workflow their customers actually needed.",
        [sources[0]],
      ),
    ],
  },
};

export const Error: Story = {
  args: {
    question: "What did AJ build at CDW?",
    error: "Ask A.J. received an invalid stream event. Please try again.",
  },
};

export const Aborted: Story = {
  args: {
    statusLabel: "Stopped",
    messages: [
      {
        id: "user-cdw",
        role: "user",
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(
        "At CDW, AJ worked on Legato, an enterprise design system.",
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
        content: "What did AJ build at CDW?",
        sources: [],
      },
      assistantMessage(`${completedAnswer}\n\n${completedAnswer}`, sources),
    ],
  },
  render: (args) => (
    <div className="h-[42rem] max-w-sm overflow-y-auto border border-border">
      <AskAjExperience {...args} />
    </div>
  ),
};
