import type { Meta, StoryObj } from "@storybook/react";
import { AskAjStatus } from "@/features/ask-aj/ask-aj-status";

const meta = {
  title: "Features/Ask A.J./Status",
  component: AskAjStatus,
  argTypes: {
    label: { control: "text" },
    isLoading: { control: "boolean" },
    reducedMotion: { control: "boolean" },
  },
  args: {
    label: "Thinking through AJ's experience...",
    isLoading: true,
    reducedMotion: false,
  },
} satisfies Meta<typeof AskAjStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Waiting: Story = {};

export const Writing: Story = {
  args: { label: "Writing a concise response..." },
};

export const ReducedMotion: Story = {
  args: { label: "Almost ready...", reducedMotion: true },
};

export const Ready: Story = {
  args: { label: "Ready for a follow-up", isLoading: false },
};
