import type { Meta, StoryObj } from "@storybook/react";
import { Reveal } from "@/components/reveal";
import { Tilt3D } from "@/components/motion";

/**
 * Motion — used as a narrator, never as decoration.
 *
 * The site's two active primitives:
 *
 *   • `Reveal` — enter animation on scroll, respects reduced motion.
 *   • `Tilt3D` — cursor-aware 3D tilt for editorial cards.
 *
 * Cursor-following buttons (previously `Magnetic`) were removed from the
 * site because they made hit targets feel unstable. The wrapper is still
 * exported as a no-op for API compatibility, but it is intentionally not
 * documented here.
 *
 * All primitives no-op under `prefers-reduced-motion: reduce` and clean
 * up their GSAP contexts on unmount (see `useGsap`).
 */

function Demo() {
  return (
    <div className="grid gap-6 p-8 md:grid-cols-2">
      <Reveal>
        <article className="border border-border bg-card p-6">
          <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Reveal
          </p>
          <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
            Enters on scroll
          </h3>
          <p className="mt-2 text-sm text-foreground/80">
            Fades and rises 12px into view. Once, then still.
          </p>
        </article>
      </Reveal>

      <Tilt3D max={6}>
        <article className="border border-border bg-card p-6">
          <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Tilt3D
          </p>
          <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink">
            Cursor-aware
          </h3>
          <p className="mt-2 text-sm text-foreground/80">
            Move your cursor across the card. Tilt is sub-degree, on
            purpose.
          </p>
        </article>
      </Tilt3D>
    </div>
  );
}

const meta = {
  title: "Foundations/Motion",
  component: Demo,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Motion primitives are opt-in wrappers. They compose over any child, degrade to identity under reduced motion, and never block interaction.",
      },
      source: {
        code: `<Reveal>
  <article>…</article>
</Reveal>

<Tilt3D max={6}>
  <article>…</article>
</Tilt3D>`,
      },
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primitives: Story = {};
