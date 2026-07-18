import type { Meta, StoryObj } from "@storybook/react";
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

const requestSteps: AskAjFlowStep[] = [
  {
    title: "Recruiter asks",
    description:
      "The React interface captures a question through native form semantics.",
  },
  {
    title: "Server validates",
    description:
      "TanStack Start checks schema, origin, rate limits, and duplicate requests.",
  },
  {
    title: "Model streams",
    description:
      "Server code translates provider deltas into application-owned NDJSON events.",
  },
  {
    title: "Interface renders",
    description:
      "The browser updates status, answer text, abort behavior, and completion announcements.",
  },
];

const decisions: AskAjDecision[] = [
  {
    decision: "Keep model calls server-side",
    why: "Secrets, instructions, validation, fallback behavior, and token limits belong behind the application boundary.",
    tradeoff:
      "The server has to translate provider streams into a stable browser contract.",
    result:
      "The client receives only application-owned events, never raw provider objects or secrets.",
  },
  {
    decision: "Document states in Storybook",
    why: "Streaming, waiting, long content, errors, and mobile sticky states are easier to inspect as deterministic examples.",
    tradeoff: "Stories need updates when the UI contract changes.",
    result:
      "The important states are independently renderable without network calls.",
  },
];

const signals: AskAjSignal[] = [
  {
    label: "Fallback layers",
    value: "4",
    detail:
      "Primary model, fallback model, cached answer, and static fallback.",
  },
  {
    label: "Architecture flows",
    value: "3",
    detail: "Request lifecycle, reliability flow, and contact delivery.",
  },
  {
    label: "Theme support",
    value: "2",
    detail: "Light and dark semantic token support.",
  },
  {
    label: "Input modes",
    value: "2",
    detail: "Enter submits and Shift + Enter inserts a newline.",
  },
];

const milestones: AskAjMilestone[] = [
  {
    label: "Streaming interface",
    detail:
      "Ask A.J. gained waiting, writing, completed, aborted, and error states.",
  },
  {
    label: "Server safeguards",
    detail:
      "Request guards, fallback behavior, structured logging, and circuit breaking made failure paths visible.",
  },
  {
    label: "Recruiter contact",
    detail:
      "The contact flow validates input, sends through Resend, and reports safe status messages.",
  },
  {
    label: "Architecture case study",
    detail:
      "The implementation is now documented for recruiters and engineering leaders.",
  },
];

const meta = {
  title: "Features/Ask A.J./Architecture",
  component: AskAjFlowDiagram,
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    steps: { control: "object" },
    tone: {
      control: "select",
      options: ["default", "accent"],
    },
  },
  args: {
    title: "Request lifecycle",
    description: "The successful path from question entry to streamed answer.",
    steps: requestSteps,
    tone: "default",
  },
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-foreground md:p-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const RequestLifecycle: Story = {
  render: (args) => <AskAjFlowDiagram {...args} />,
};

export const ReliabilityFlow: Story = {
  render: () => (
    <AskAjFlowDiagram
      title="Reliability and fallback flow"
      description="The implemented recovery path before Ask A.J. shows a safe error."
      steps={[
        {
          title: "Guard request",
          description: "Reject unsafe shape, size, origin, or noisy clients.",
        },
        {
          title: "Retry primary",
          description:
            "Retry transient provider failures before output starts.",
        },
        {
          title: "Fallback",
          description:
            "Try fallback model, cached answer, then static fallback.",
        },
        {
          title: "Report safely",
          description:
            "Log structured diagnostics and show a safe user message.",
        },
      ]}
      tone="accent"
    />
  ),
};

export const Decisions: Story = {
  render: () => <AskAjDecisionGrid decisions={decisions} />,
};

export const EngineeringSignals: Story = {
  render: () => <AskAjSignalGrid signals={signals} />,
};

export const ProductEvolution: Story = {
  render: () => <AskAjMilestoneTimeline milestones={milestones} />,
};
