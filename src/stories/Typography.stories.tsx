import type { Meta, StoryObj } from "@storybook/react";

/**
 * Typography — three families, one rhythm.
 *
 * `font-display` for editorial headlines (serif), `font-sans` for body,
 * `font-mono` for eyebrow labels, metadata, and figure captions. Italic
 * accents use `font-accent` inside headlines only.
 */

function Specimen() {
  return (
    <div className="space-y-12 p-8">
      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Display · headlines
        </p>
        <h1 className="font-display text-6xl font-medium leading-[0.98] tracking-tight text-ink">
          Inputs in.{" "}
          <span className="font-accent italic normal-case text-gold">
            Production out.
          </span>
        </h1>
      </section>

      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Body · long-form
        </p>
        <p className="max-w-2xl text-[17px] leading-[1.7] text-foreground/90">
          Body copy is optimized for editorial reading — 17px at a 1.7 line
          height, sized to keep measures between 60 and 75 characters. Bold
          weights are reserved for emphasis inside a paragraph, not for
          hierarchy.
        </p>
      </section>

      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Mono · labels & captions
        </p>
        <div className="space-y-2">
          <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Fig. 01 · Engineering Judgment
          </p>
          <p className="mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Chapter · Practice
          </p>
        </div>
      </section>

      <section>
        <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Scale
        </p>
        <div className="space-y-3">
          {[
            ["text-6xl", "6xl · 3.75rem"],
            ["text-5xl", "5xl · 3rem"],
            ["text-4xl", "4xl · 2.25rem"],
            ["text-3xl", "3xl · 1.875rem"],
            ["text-2xl", "2xl · 1.5rem"],
            ["text-xl", "xl · 1.25rem"],
            ["text-lg", "lg · 1.125rem"],
            ["text-base", "base · 1rem"],
            ["text-sm", "sm · 0.875rem"],
          ].map(([cls, label]) => (
            <div
              key={cls}
              className="flex items-baseline gap-6 border-b border-border pb-2"
            >
              <span
                className={`font-display font-medium tracking-tight text-ink ${cls}`}
              >
                Aa
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Foundations/Typography",
  component: Specimen,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: `<h1 className="font-display text-6xl font-medium tracking-tight text-ink">
  Inputs in. <span className="font-accent italic text-gold">Production out.</span>
</h1>
<p className="text-[17px] leading-[1.7] text-foreground/90">Body copy…</p>
<p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">Fig. 01</p>`,
      },
    },
  },
} satisfies Meta<typeof Specimen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Specimens: Story = {};
