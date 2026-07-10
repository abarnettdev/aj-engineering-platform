import type { Meta, StoryObj } from "@storybook/react";
import { Badge, TechBadge } from "@/components/badge";

/**
 * # Badge (editorial)
 *
 * The site-native badge (distinct from the shadcn `ui/badge`). Mono,
 * uppercase, wide tracking — used for section eyebrows, chapter marks,
 * and status chips throughout editorial pages.
 *
 * ## Variants
 * - `default` — neutral surface, used for section eyebrows.
 * - `accent`  — gold, used sparingly for status ("Shipping", "Live").
 * - `outline` — quiet border-only, for tertiary metadata.
 *
 * ## When not to use
 * Body text tags inside prose — use inline `<code>` or plain text.
 *
 * ## Related
 * - `TechBadge` (below), `ArticleCard.Meta`
 */
const meta = {
  title: "Primitives/Badge (editorial)",
  component: Badge,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "accent", "outline"],
    },
    children: { control: "text" },
    className: { control: false },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default", children: "Design Systems" },
  parameters: {
    docs: { source: { code: `<Badge variant="default">Design Systems</Badge>` } },
  },
};

export const Accent: Story = {
  args: { variant: "accent", children: "Shipping" },
  parameters: {
    docs: { source: { code: `<Badge variant="accent">Shipping</Badge>` } },
  },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Draft" },
  parameters: {
    docs: { source: { code: `<Badge variant="outline">Draft</Badge>` } },
  },
};

/**
 * ## TechBadge
 * Small monospace chip for tech stack lists on project cards.
 */
export const Tech: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TechBadge>React</TechBadge>
      <TechBadge>TanStack</TechBadge>
      <TechBadge>Tailwind</TechBadge>
      <TechBadge>GSAP</TechBadge>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<TechBadge>React</TechBadge>
<TechBadge>TanStack</TechBadge>`,
      },
    },
  },
};
