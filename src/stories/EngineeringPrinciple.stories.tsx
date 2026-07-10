import type { Meta, StoryObj } from "@storybook/react";

/**
 * Engineering Principle — a two-tone editorial card used on the Engineering
 * page. Not a component export; documented here as a canonical pattern so
 * new principles land with the same rhythm and typography.
 */
const meta = {
  title: "Patterns/Engineering Principle",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Featured principles render as an inverted card with a large accent numeral; supporting principles render as bordered cards on `bg-card`. Both share the same eyebrow, title, and dek slots.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Featured: Story = {
  render: () => (
    <article className="edge-gold relative flex w-[42rem] flex-col justify-between overflow-hidden border border-ink bg-ink p-8 text-background md:min-h-[16rem] md:flex-row md:items-end md:gap-10 md:p-12">
      <div className="relative z-10">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Principle 01 · Featured
        </p>
        <h3 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-background md:text-5xl">
          Solve the system before the code
        </h3>
      </div>
      <p className="relative z-10 mt-6 max-w-md text-[17px] leading-relaxed text-background/80 md:mt-0">
        Most bugs are architectural bugs in disguise. The cheapest fix is a
        decision made two layers up.
      </p>
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-4 font-display text-[10rem] font-black leading-none tracking-[-0.06em] text-gold/20 md:text-[18rem]"
      >
        01
      </span>
    </article>
  ),
  parameters: {
    docs: {
      source: {
        code: `<article className="edge-gold relative flex flex-col overflow-hidden border border-ink bg-ink p-12 text-background md:flex-row md:items-end md:gap-10">
  <div>
    <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
      Principle 01 · Featured
    </p>
    <h3 className="mt-6 font-display text-5xl font-medium tracking-tight text-background">
      Solve the system before the code
    </h3>
  </div>
  <p className="text-[17px] leading-relaxed text-background/80">
    Most bugs are architectural bugs in disguise…
  </p>
</article>`,
      },
    },
  },
};

export const Supporting: Story = {
  render: () => (
    <article className="edge-gold relative flex w-[22rem] flex-col border border-border bg-card p-7 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]">
      <div className="flex items-baseline justify-between border-b border-border pb-3">
        <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Principle 02
        </span>
        <span
          aria-hidden
          className="font-display text-3xl font-black leading-none tracking-tight"
          style={{ color: "color-mix(in oklab, var(--foreground) 8%, transparent)" }}
        >
          02
        </span>
      </div>
      <h3 className="mt-5 font-display text-[1.6rem] font-medium leading-[1.05] tracking-tight text-ink">
        Composition over configuration
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/85">
        Fewer props, sharper primitives. Let composition carry the weight.
      </p>
    </article>
  ),
  parameters: {
    docs: {
      source: {
        code: `<article className="edge-gold border border-border bg-card p-7">
  <div className="flex items-baseline justify-between border-b border-border pb-3">
    <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
      Principle 02
    </span>
    <span className="font-display text-3xl font-black">02</span>
  </div>
  <h3 className="mt-5 font-display text-[1.6rem] font-medium tracking-tight text-ink">
    Composition over configuration
  </h3>
  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/85">
    Fewer props, sharper primitives.
  </p>
</article>`,
      },
    },
  },
};
