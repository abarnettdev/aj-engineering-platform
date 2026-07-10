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
      { name: "gold", var: "--gold" },
      { name: "primary", var: "--primary" },
      { name: "accent", var: "--accent" },
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
              <div key={s.name} className="border border-border">
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
          "All colors on the site resolve to CSS custom properties defined in `src/styles.css`. Components never hardcode hex values — they consume semantic tokens (`bg-card`, `text-ink`, `text-gold`) so theming stays a data change.",
      },
      source: {
        code: `<div className="bg-card text-ink border border-border" />
<span className="text-gold" />
<p className="text-muted-foreground" />`,
      },
    },
  },
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Semantic: Story = {};
