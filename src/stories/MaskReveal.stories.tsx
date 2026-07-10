import type { Meta, StoryObj } from "@storybook/react";
import { MaskReveal } from "@/components/mask-reveal";

/**
 * # MaskReveal
 *
 * Clip-path wipe reveal triggered when the element enters the viewport.
 * Once revealed, the content stays visible — it never re-masks.
 *
 * ## When to use
 * Hero images, diagram figures, and editorial artifacts on the Work
 * page. Pair with a direction that follows the reader's eye
 * (left-to-right for LTR narratives).
 *
 * ## When not to use
 * Body text — clip-path animations can cause layout jitter on long
 * paragraphs. Prefer `Reveal` for text.
 *
 * ## Accessibility
 * Motion-reduced users see the final unmasked state immediately (CSS
 * handles the fallback). Content stays selectable throughout.
 *
 * ## Related
 * - `Reveal`, `FloatLayer`, `ScrollDrift3D`
 */
const meta = {
  title: "Foundations/MaskReveal",
  component: MaskReveal,
  parameters: { layout: "centered" },
  argTypes: {
    direction: {
      control: "inline-radio",
      options: ["left", "right", "top", "bottom"],
    },
    delay: { control: { type: "number", min: 0, max: 1000, step: 50 } },
    className: { control: false },
  },
} satisfies Meta<typeof MaskReveal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Demo = () => (
  <figure className="w-[26rem] border border-border bg-card">
    <div
      aria-hidden
      className="aspect-[4/3] w-full"
      style={{
        background:
          "radial-gradient(120% 90% at 20% 20%, color-mix(in oklab, var(--gold) 24%, transparent), transparent 60%), linear-gradient(135deg, color-mix(in oklab, var(--ink) 92%, transparent), color-mix(in oklab, var(--ink) 70%, transparent))",
      }}
    />
    <figcaption className="border-t border-border p-4">
      <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
        Figure 01
      </p>
      <p className="mt-2 text-sm text-foreground/80">
        Wipes in from the chosen direction, then stays.
      </p>
    </figcaption>
  </figure>
);

export const LeftToRight: Story = {
  args: { direction: "left", delay: 0, children: <Demo /> },
  parameters: {
    docs: {
      source: {
        code: `<MaskReveal direction="left">
  <figure>…</figure>
</MaskReveal>`,
      },
    },
  },
};

export const TopDown: Story = {
  args: { direction: "top", delay: 0, children: <Demo /> },
  parameters: {
    docs: {
      source: {
        code: `<MaskReveal direction="top">
  <figure>…</figure>
</MaskReveal>`,
      },
    },
  },
};
