import type { Meta, StoryObj } from "@storybook/react";

/**
 * Spacing — a single scale, applied consistently.
 *
 * Tailwind's 4px baseline drives every gap, padding, and margin on the
 * site. Section rhythm uses `py-20 md:py-28`; card padding uses `p-7`
 * (comfortable) or `p-4` (compact); editorial columns use `gap-12`
 * to `gap-20`.
 */

const scale = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32] as const;

function Ruler() {
  return (
    <div className="space-y-10 p-8">
      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Scale · 4px baseline
        </p>
        <div className="space-y-2">
          {scale.map((n) => (
            <div key={n} className="flex items-center gap-4">
              <span className="mono w-16 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {n} · {n * 4}px
              </span>
              <div
                className="h-3 bg-gold"
                style={{ width: `${n * 4}px` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Section rhythm
        </p>
        <div className="border border-border">
          <div className="border-b border-border bg-card px-6 py-20 md:py-28">
            <p className="mono text-[10px] uppercase tracking-[0.24em] text-gold">
              Section · py-20 md:py-28
            </p>
            <p className="mt-3 text-sm text-foreground/80">
              The default vertical rhythm on every page section.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundations/Spacing",
  component: Ruler,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: `<section className="container-page py-20 md:py-28">…</section>
<article className="p-7">…</article>
<div className="grid gap-12 md:gap-20">…</div>`,
      },
    },
  },
} satisfies Meta<typeof Ruler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {};
