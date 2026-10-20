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
      className="inline-flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-ink py-2 pl-2 pr-4 text-white shadow-lift transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
