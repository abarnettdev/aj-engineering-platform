import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AskAjLauncherContent } from "@/components/ask-aj-launcher";

const meta = {
  title: "Components/Ask A.J./Launcher",
  component: AskAjLauncherContent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
  },
  args: {
    description: "AI agent built by AJ Barnett",
    label: "Ask A.J.",
  },
} satisfies Meta<typeof AskAjLauncherContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <a
      href="/ask-aj"
      onClick={fn()}
      className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-3 border border-gold/50 bg-ink px-4 py-3 text-background shadow-[0_18px_45px_-25px_rgba(0,0,0,0.55)] transition-colors hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <AskAjLauncherContent {...args} />
    </a>
  ),
};

export const LongContent: Story = {
  args: {
    description:
      "Production-minded AI portfolio agent engineered by AJ Barnett",
    label: "Ask A.J. about AI systems",
  },
  render: Default.render,
};
