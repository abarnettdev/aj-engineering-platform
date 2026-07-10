import type { Meta, StoryObj } from "@storybook/react";
import { CountUp } from "@/components/count-up";

/**
 * # CountUp
 *
 * Animates the numeric portion of a value the first time it scrolls into
 * view. Non-numeric prefix/suffix (e.g. `+`, ` years`, `x`) stay static.
 * Runs once, then holds the final value.
 *
 * ## When to use
 * Stat blocks in editorial hero rows — "170+ UI assets", "25 years",
 * "10x teams". Keep it to the biggest number in a section, not every number.
 *
 * ## When not to use
 * For real-time metrics or values that change after mount — this is a
 * one-shot entrance, not a live counter.
 *
 * ## Accessibility
 * The animation is decorative; screen readers announce the final DOM
 * text. Motion-reduced users see the final value without the tween.
 *
 * ## Related
 * - `Reveal`, `SplitReveal`
 */
const meta = {
  title: "Foundations/CountUp",
  component: CountUp,
  parameters: { layout: "centered" },
  argTypes: {
    value: { control: "text" },
    className: { control: false },
  },
} satisfies Meta<typeof CountUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: "170+" },
  render: (args) => (
    <div className="flex items-baseline gap-2">
      <CountUp
        {...args}
        className="font-display text-6xl font-medium tracking-tight text-ink"
      />
      <span className="mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        UI assets
      </span>
    </div>
  ),
  parameters: {
    docs: { source: { code: `<CountUp value="170+" />` } },
  },
};

export const WithSuffix: Story = {
  args: { value: "25 years" },
  render: (args) => (
    <CountUp
      {...args}
      className="font-display text-5xl font-medium tracking-tight text-ink"
    />
  ),
  parameters: {
    docs: { source: { code: `<CountUp value="25 years" />` } },
  },
};
