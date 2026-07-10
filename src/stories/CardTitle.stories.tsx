import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

/**
 * # CardTitle
 *
 * The primary label of a card. Short, noun-first, no trailing period.
 *
 * ## Expected placement
 * Inside `CardHeader`, before `CardDescription`.
 *
 * ## Allowed children
 * Plain text and small inline emphasis. No links, no icons — those belong
 * in `CardHeader` alongside the title.
 *
 * ## Semantic HTML
 * Renders a `<div>` styled as a heading. When the card is a landmark
 * section (e.g. an article preview), wrap the title text in the
 * appropriate `<h2>`–`<h4>` inside `CardTitle` to preserve heading order.
 *
 * ## Accessibility
 * Keep titles under ~60 characters. Screen readers announce the whole
 * card region; a shorter title reduces friction.
 *
 * ## Related
 * - `Card`, `CardHeader`, `CardDescription`
 */
const meta: Meta<typeof CardTitle> = {
  title: "Primitives/Card/CardTitle",
  component: CardTitle,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CardTitle>;

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
</CardHeader>`,
      },
    },
  },
};
