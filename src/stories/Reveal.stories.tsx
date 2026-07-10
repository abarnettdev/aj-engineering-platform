import type { Meta, StoryObj } from "@storybook/react";
import { Reveal } from "@/components/reveal";

/**
 * # Reveal
 *
 * Scroll-triggered enter animation. The child fades and lifts into view
 * the first time it crosses the viewport threshold, then STAYS at rest.
 * It never animates back out.
 *
 * ## When to use
 * Wrap any section, card, or heading that should feel purposefully placed
 * as the reader scrolls to it. Prefer over ad-hoc GSAP for simple entrances.
 *
 * ## When not to use
 * For text that must be readable immediately at page-load (above the fold
 * on landing routes). For those, render statically.
 *
 * ## Accessibility
 * No-ops entirely under `prefers-reduced-motion: reduce`. Uses
 * `IntersectionObserver` — no JS-driven scroll listeners.
 *
 * ## Related
 * - `FloatLayer`, `ScrollDrift3D`, `SplitReveal`
 */
const meta = {
  title: "Foundations/Reveal",
  component: Reveal,
  parameters: { layout: "centered" },
  argTypes: {
    delay: { control: { type: "number", min: 0, max: 1000, step: 50 } },
    as: { control: false },
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { delay: 0, children: null },
  render: (args) => (
    <Reveal {...args}>
      <article className="w-80 border border-border bg-card p-6">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Reveal
        </p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
          Enters once, stays put
        </h3>
        <p className="mt-2 text-sm text-foreground/80">
          Scroll this card into view — it fades and lifts, then settles.
        </p>
      </article>
    </Reveal>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Reveal>
  <article>…</article>
</Reveal>`,
      },
    },
  },
};
