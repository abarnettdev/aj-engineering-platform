import type { Meta, StoryObj } from "@storybook/react";
import { Badge, TechBadge } from "@/components/badge";

/**
 * Badge — mono uppercase micro-label used across the site for metadata,
 * eyebrow tags, and technology chips. Three tones: `default`, `accent`,
 * `outline`. Use `TechBadge` for technology chips inside case studies.
 */
const meta = {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["default", "accent", "outline"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Stable" },
  parameters: {
    docs: { source: { code: `<Badge>Stable</Badge>` } },
  },
};

export const Accent: Story = {
  args: { children: "Featured", variant: "accent" },
  parameters: {
    docs: { source: { code: `<Badge variant="accent">Featured</Badge>` } },
  },
};

export const Outline: Story = {
  args: { children: "Draft", variant: "outline" },
  parameters: {
    docs: { source: { code: `<Badge variant="outline">Draft</Badge>` } },
  },
};

export const Technology: Story = {
  args: { children: "Technology" },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TechBadge>TypeScript</TechBadge>
      <TechBadge>React 19</TechBadge>
      <TechBadge>TanStack Start</TechBadge>
      <TechBadge>Tailwind v4</TechBadge>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<TechBadge>TypeScript</TechBadge>
<TechBadge>React 19</TechBadge>
<TechBadge>TanStack Start</TechBadge>
<TechBadge>Tailwind v4</TechBadge>`,
      },
    },
  },
};
