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
 * # Card
 *
 * Surface primitive composed of six named slots. The parent stays a tiny
 * shell; consumers own the layout by placing `CardHeader`, `CardTitle`,
 * `CardDescription`, `CardContent`, and `CardFooter` inside.
 *
 * ## When to use
 * - Grouping related content into a discrete visual unit.
 * - Presenting a self-contained resource (project, article preview, metric).
 *
 * ## When not to use
 * - Body copy that flows in a document — use `<article>` + prose classes.
 * - Full-page hero surfaces — use `PageHero` instead.
 *
 * ## Accessibility
 * - Renders a `<div>` by default. When the card is a self-contained
 *   resource, wrap it in `<article>` or use the semantic slot components.
 * - Ensure the highest heading inside the card follows the outer heading
 *   order (do not skip levels).
 *
 * ## Related components
 * - `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
 * - `Button`, `Badge`, `Section`
 */
const meta = {
  title: "Primitives/Card/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const fullCode = `<Card className="w-80">
  <CardHeader>
    <CardTitle>Design tokens</CardTitle>
    <CardDescription>Semantic, themeable, versioned.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Tokens describe intent. Components consume them. Themes swap them.
    </p>
  </CardContent>
  <CardFooter className="justify-end">
    <Button>Read spec</Button>
  </CardFooter>
</Card>`;

export const AllSlots: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Design tokens</CardTitle>
        <CardDescription>Semantic, themeable, versioned.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Tokens describe intent. Components consume them. Themes swap them.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button>Read spec</Button>
      </CardFooter>
    </Card>
  ),
  parameters: { docs: { source: { code: fullCode } } },
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-80">
      <CardContent className="p-6">
        <p className="text-sm">
          Card with a single content slot — no header, no footer.
        </p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Card className="w-80">
  <CardContent className="p-6">
    <p className="text-sm">Card with a single content slot.</p>
  </CardContent>
</Card>`,
      },
    },
  },
};
