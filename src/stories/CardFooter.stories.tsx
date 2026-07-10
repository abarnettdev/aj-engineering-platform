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
 * # CardFooter
 *
 * The bottom slot of a `Card`. Reserved for actions and metadata — never
 * for body copy.
 *
 * ## Expected placement
 * Last child of `Card`. Typically holds a single primary action, or an
 * action-plus-meta pair aligned to opposite edges.
 *
 * ## Allowed children
 * `Button`, links, small `Badge`s, timestamps. Keep the count to three or
 * fewer to avoid competing calls to action.
 *
 * ## Semantic HTML
 * Renders a `<div>` with flex layout. Add `justify-end` for a single
 * trailing action; `justify-between` for action-plus-meta pairs.
 *
 * ## Accessibility
 * Buttons in a footer must have meaningful labels — avoid "Learn more"
 * with no context. Prefer "Read the spec" or "Open the case study".
 *
 * ## Related
 * - `Card`, `CardHeader`, `Button`
 */
const meta: Meta<typeof CardFooter> = {
  title: "Primitives/Card/CardFooter",
  component: CardFooter,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof CardFooter>;

export const TrailingAction: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Read the spec</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Design tokens · v4.2 · WCAG 2.1 AA.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm">Open spec</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<CardFooter className="justify-end">
  <Button size="sm">Open spec</Button>
</CardFooter>`,
      },
    },
  },
};

export const ActionAndMeta: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Field note</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Why tokens are a language.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          6 min · Design Systems
        </span>
        <Button size="sm" variant="outline">
          Read
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<CardFooter className="justify-between">
  <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
    6 min · Design Systems
  </span>
  <Button size="sm" variant="outline">Read</Button>
</CardFooter>`,
      },
    },
  },
};
