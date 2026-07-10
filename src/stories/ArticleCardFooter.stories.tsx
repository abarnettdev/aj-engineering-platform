import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@/components/composites/article-card";

/**
 * # ArticleCard.Footer
 *
 * Trailing call-to-action row for an `ArticleCard`. Holds the "Read"
 * affordance with an inline arrow that animates on hover.
 *
 * ## When to use
 * Every `ArticleCard`. Keep the label to a single verb phrase — "Read the
 * note", "Open the case study", "Continue reading".
 *
 * ## Accessibility
 * The whole card is a single link; the footer text is announced as part
 * of the accessible name. Prefer specific verbs over generic "Learn more".
 *
 * ## Related
 * - `ArticleCard`, `Button`
 */
const meta: Meta = {
  title: "Composites/ArticleCard/ArticleCard.Footer",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[22rem]">
      <ArticleCard href="/writing/tokens-are-a-language">
        <ArticleCard.Meta tag="Design Systems" read="6 min" />
        <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
        <ArticleCard.Dek>Preview dek.</ArticleCard.Dek>
        <ArticleCard.Footer>Read the note</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: { code: `<ArticleCard.Footer>Read the note</ArticleCard.Footer>` },
    },
  },
};
