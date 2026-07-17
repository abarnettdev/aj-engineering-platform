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
      "A reliable AI product is more than a model call.\n\n- Keep provider calls server-side\n- Stream application-owned events\n- Design failure states intentionally\n- Make accessibility part of the interaction contract",
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
    content: "A reliable AI product starts with clear boundaries",
    isPending: true,
  },
};
