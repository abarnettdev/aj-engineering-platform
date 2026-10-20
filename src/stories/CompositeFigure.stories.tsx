import type { Meta, StoryObj } from "@storybook/react";
import { CompositeFigure } from "@/components/composites/figure";

const meta = {
  title: "Composites/Editorial Figure",
  component: CompositeFigure,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Editorial evidence block shared by engineering and system diagrams. It combines a real visual, explanatory caption, and compact legend.",
      },
    },
  },
  argTypes: {
    eyebrow: { control: "text", table: { category: "Content" } },
    title: { control: "text", table: { category: "Content" } },
    image: { control: "text", table: { category: "Media" } },
    alt: { control: "text", table: { category: "Accessibility" } },
    caption: { control: false, table: { category: "Content" } },
    legend: { control: "object", table: { category: "Content" } },
  },
} satisfies Meta<typeof CompositeFigure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: "Fig. 01 · Product System",
    title: "Tokens · Components · Code",
    image: "/visuals/systems-map-studio.webp",
    alt: "Coral-red design tokens flowing into components and TypeScript code.",
    caption: (
      <>Product intent becomes reusable decisions and working software.</>
    ),
    legend: [
      { label: "Tokens", note: "shared visual decisions" },
      { label: "Components", note: "reusable interface contracts" },
      { label: "Code", note: "production implementation" },
    ],
  },
};
