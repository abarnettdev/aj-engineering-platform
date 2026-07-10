import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

/**
 * Base action primitive. Composition-first: pass an icon as a child,
 * wrap in an anchor for links, or use `asChild` to render as any element
 * without changing the API.
 *
 * Accessibility: renders a native `<button>` with visible focus ring
 * (`focus-visible:ring`), keyboard-activated, respects reduced motion.
 */
const meta = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Consumer JSX: `<Button variant=\"default\">Ship it</Button>`.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Ship it", variant: "default" },
  parameters: {
    docs: { source: { code: `<Button>Ship it</Button>` } },
  },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
  parameters: {
    docs: {
      source: { code: `<Button variant="secondary">Secondary</Button>` },
    },
  },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
  parameters: {
    docs: { source: { code: `<Button variant="outline">Outline</Button>` } },
  },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
  parameters: {
    docs: { source: { code: `<Button variant="ghost">Ghost</Button>` } },
  },
};

export const Link: Story = {
  args: { children: "Read the spec", variant: "link" },
  parameters: {
    docs: { source: { code: `<Button variant="link">Read the spec</Button>` } },
  },
};

export const Sizes: Story = {
  args: { children: "Ship it" },
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`,
      },
    },
  },
};
