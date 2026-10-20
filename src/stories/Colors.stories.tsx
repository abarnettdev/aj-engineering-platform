import type { Meta, StoryObj } from "@storybook/react";

const groups = [
  {
    label: "Surfaces",
    items: [
      { name: "background", var: "--background" },
      { name: "surface", var: "--surface" },
      { name: "card", var: "--card" },
      { name: "ink", var: "--ink" },
    ],
  },
  {
    label: "Text",
    items: [
      { name: "foreground", var: "--foreground" },
      { name: "muted-foreground", var: "--muted-foreground" },
    ],
  },
  {
    label: "Accent",
    items: [
      { name: "accent", var: "--accent" },
      { name: "accent ink", var: "--accent-ink" },
      { name: "accent soft", var: "--accent-soft" },
      { name: "primary", var: "--primary" },
    ],
  },
  {
    label: "Structure",
    items: [
      { name: "border", var: "--border" },
      { name: "border-strong", var: "--border-strong" },
      { name: "muted", var: "--muted" },
      { name: "destructive", var: "--destructive" },
    ],
  },
];

function Palette() {
  return (
    <div className="space-y-10 p-6">
      {groups.map((g) => (
        <section key={g.label}>
          <p className="mono mb-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            {g.label}
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {g.items.map((s) => (
              <div
                key={s.name}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div
                  className="h-20 border-b border-border"
                  style={{ background: `var(${s.var})` }}
                />
                <div className="p-3">
                  <div className="font-mono text-xs text-ink">{s.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    {s.var}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta = {
  title: "Foundations/Colors",
  component: Palette,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The site and Storybook use the same semantic color tokens from `src/styles.css`. Components use names such as `bg-card`, `text-ink`, and `text-accent-ink` so a token change updates the full system.",
      },
      source: {
        code: `<div className="bg-card text-ink border border-border" />
<span className="text-accent-ink" />
<p className="text-muted-foreground" />`,
      },
    },
  },
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Semantic: Story = {};
