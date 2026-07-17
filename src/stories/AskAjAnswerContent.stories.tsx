import type { Meta, StoryObj } from "@storybook/react";
import { AskAjAnswerContent } from "@/features/ask-aj/ask-aj-answer-content";

const meta = {
  title: "Features/Ask A.J./Answer Content",
  component: AskAjAnswerContent,
  argTypes: {
    content: { control: "text" },
    isPending: { control: "boolean" },
  },
  args: {
    content:
      "AJ worked on Legato at CDW.\n\n- Shared UI foundations\n- Accessible components\n- Design tokens and documentation",
    isPending: false,
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl border border-border bg-card p-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AskAjAnswerContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParagraphsAndList: Story = {};

export const Streaming: Story = {
  args: {
    content: "AJ worked on Legato, an enterprise design system",
    isPending: true,
  },
};
