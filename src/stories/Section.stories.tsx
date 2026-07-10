import type { Meta, StoryObj } from "@storybook/react";
import { Section, Eyebrow } from "@/components/section";

/**
 * Section — the editorial container.
 *
 * Standard `container-page` width, vertical rhythm (`py-20 md:py-28`),
 * and an optional header with eyebrow / title / description. Compose
 * children freely; the shell does not enforce a layout.
 */
const meta = {
  title: "Primitives/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeader: Story = {
  render: () => (
    <Section
      eyebrow="Chapter · Principles"
      title="Six rules I keep coming back to"
      description="Working principles — earned, re-tested, and still useful after twenty-five years of shipping."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="border border-border bg-card p-6">A</div>
        <div className="border border-border bg-card p-6">B</div>
        <div className="border border-border bg-card p-6">C</div>
      </div>
    </Section>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Section
  eyebrow="Chapter · Principles"
  title="Six rules I keep coming back to"
  description="Working principles — earned, re-tested, and still useful."
>
  {children}
</Section>`,
      },
    },
  },
};

export const EyebrowOnly: Story = {
  render: () => (
    <div className="container-page py-20">
      <Eyebrow>Figure 03 · Practice</Eyebrow>
    </div>
  ),
  parameters: {
    docs: { source: { code: `<Eyebrow>Figure 03 · Practice</Eyebrow>` } },
  },
};
