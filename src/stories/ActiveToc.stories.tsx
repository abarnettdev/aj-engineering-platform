import type { Meta, StoryObj } from "@storybook/react";
import { ActiveToc } from "@/components/composites/active-toc";

/**
 * ActiveToc — sticky table of contents. Uses an `IntersectionObserver` to
 * highlight the section whose top is closest to the viewport top.
 *
 * Accessibility: rendered as a `<nav aria-label="Table of contents">` on
 * the live page; keyboard focus advances through the anchor list; the
 * active state is announced by the anchor color.
 */
const meta = {
  title: "Composites/ActiveToc",
  component: ActiveToc,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ActiveToc>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: "intro", label: "Introduction" },
  { id: "principles", label: "Principles" },
  { id: "accessibility", label: "Accessibility" },
  { id: "ai", label: "AI-Assisted" },
];

export const Default: Story = {
  args: { items },
  render: (args) => (
    <div className="w-64 border border-border bg-card p-6">
      <ActiveToc {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ActiveToc
  items={[
    { id: "intro", label: "Introduction" },
    { id: "principles", label: "Principles" },
    { id: "accessibility", label: "Accessibility" },
    { id: "ai", label: "AI-Assisted" },
  ]}
/>`,
      },
    },
  },
};
