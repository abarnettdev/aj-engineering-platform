import type { Meta, StoryObj } from "@storybook/react";

/**
 * AI as Engineering Amplifier
 *
 * AI widens the surface an engineer can hold at one time. Judgment —
 * architecture, tradeoffs, the last read before ship — stays with the
 * engineer. The lifecycle is Explore → Draft → Review → Ship, with AI
 * as expander, scaffolder, and second pair; the human as decider.
 */
const meta = {
  title: "Philosophy/AI as Engineering Amplifier",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "This site treats AI as an accelerant inside the engineering loop, not a replacement for it. Every tool has a role — Claude for architecture, Copilot for in-editor completion, ChatGPT for exploration, MCP for real repo context, Figma AI to shorten the design-to-code loop.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const helps = [
  "Widening the option space before a decision",
  "Boilerplate, migrations, and refactors at scale",
  "Test scaffolding and edge-case enumeration",
  "Documentation and changelog drafting",
  "Onboarding into unfamiliar codebases",
];

const owns = [
  "System architecture and long-term tradeoffs",
  "Product framing and outcome definition",
  "Accessibility and inclusive-design decisions",
  "Security, privacy, and data boundaries",
  "The last read before ship",
];

export const RolesOfAI: Story = {
  render: () => (
    <div className="grid max-w-4xl gap-6 md:grid-cols-2">
      <article className="edge-gold h-full border border-border bg-card p-8">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Where AI helps
        </p>
        <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-foreground/85">
          {helps.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-gold" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="edge-gold h-full border border-ink bg-ink p-8 text-background">
        <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
          Where judgment stays
        </p>
        <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-background/85">
          {owns.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-4 shrink-0 bg-gold" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<article className="border border-border bg-card p-8">
  <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
    Where AI helps
  </p>
  <ul>{/* … */}</ul>
</article>

<article className="border border-ink bg-ink p-8 text-background">
  <p className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
    Where judgment stays
  </p>
  <ul>{/* … */}</ul>
</article>`,
      },
    },
  },
};
