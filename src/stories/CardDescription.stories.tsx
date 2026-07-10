import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

/**
 * # CardDescription
 *
 * A single-sentence subtitle for the card. Sets context or purpose
 * beneath the title in muted foreground color.
 *
 * ## Expected placement
 * Inside `CardHeader`, directly after `CardTitle`.
 *
 * ## Allowed children
 * Plain text. Keep it to one sentence; long descriptions belong in
 * `CardContent`.
 *
 * ## Semantic HTML
 * Renders a `<div>` styled as small muted body text.
 *
 * ## Accessibility
 * Complements the title, not a replacement. Do not put critical
 * information here that must be read before the body content.
 *
 * ## Related
 * - `Card`, `CardHeader`, `CardTitle`
 */
const meta: Meta<typeof CardDescription> = {
  title: "Primitives/Card/CardDescription",
  component: CardDescription,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CardDescription>;

export const InsideCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">…</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<CardHeader>
  <CardTitle>Design tokens</CardTitle>
  <CardDescription>Semantic, themeable, versioned.</CardDescription>
</CardHeader>`,
      },
    },
  },
};
