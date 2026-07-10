import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * # CardContent
 *
 * The main body slot of a `Card`. Owns padding by default and inherits
 * typography from the surrounding surface.
 *
 * ## Expected placement
 * Between `CardHeader` and `CardFooter`. Either sibling is optional.
 *
 * ## Allowed children
 * Any body content — prose, lists, images, embedded components.
 *
 * ## Semantic HTML
 * Renders a `<div>`. Use semantic elements inside (`<p>`, `<ul>`, etc.)
 * so screen readers announce structure correctly.
 *
 * ## Related
 * - `Card`, `CardHeader`, `CardFooter`
 */
const meta: Meta<typeof CardContent> = {
  title: "Primitives/Card/CardContent",
  component: CardContent,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CardContent>;

export const InsideCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li>25+ years shipping</li>
          <li>170+ UI assets maintained</li>
          <li>10+ teams multiplied</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" variant="outline">
          Read more
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<CardContent>
  <ul className="space-y-2 text-sm">
    <li>25+ years shipping</li>
    <li>170+ UI assets maintained</li>
    <li>10+ teams multiplied</li>
  </ul>
</CardContent>`,
      },
    },
  },
};
