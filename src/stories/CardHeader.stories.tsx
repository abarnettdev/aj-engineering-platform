import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * # CardHeader
 *
 * The top slot of a `Card`. Groups the title, description, and any
 * eyebrow / meta content into a single hairline-separated block.
 *
 * ## Expected placement
 * Immediately inside `<Card>`, before `CardContent`.
 *
 * ## Allowed children
 * `CardTitle`, `CardDescription`, custom eyebrow spans, and small meta
 * elements. Avoid buttons or long-form copy here — use `CardFooter` or
 * `CardContent` respectively.
 *
 * ## Semantic HTML
 * Renders a `<div>`. Headings inside remain semantic (`CardTitle` is a
 * `<div>` styled as a heading — replace with an explicit heading element
 * when the card represents a landmark section).
 *
 * ## Accessibility
 * Keep the title concise so screen readers announce the card's purpose in
 * a single phrase. Descriptions should be single sentences.
 *
 * ## Related
 * - `Card` (parent)
 * - `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
 */
const meta: Meta<typeof CardHeader> = {
  title: "Primitives/Card/CardHeader",
  component: CardHeader,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const InsideCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Body content.</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Read spec</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Card>
  <CardHeader>
    <CardTitle>Design tokens</CardTitle>
    <CardDescription>Semantic, themeable, versioned.</CardDescription>
  </CardHeader>
  {/* … */}
</Card>`,
      },
    },
  },
};
