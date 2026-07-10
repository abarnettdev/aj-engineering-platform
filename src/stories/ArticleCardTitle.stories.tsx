import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@/components/composites/article-card";

/**
 * # ArticleCard.Title
 *
 * The headline of an article preview. Renders in the display serif at a
 * size that stays readable at card width.
 *
 * ## When to use
 * Every `ArticleCard`. One title per card.
 *
 * ## Accessibility
 * Renders as an `<h3>` inside the enclosing article. Preserves heading
 * order when the card sits inside an `<h2>`-anchored section.
 *
 * ## Related
 * - `ArticleCard`, `ArticleCard.Meta`, `ArticleCard.Dek`
 */
const meta: Meta = {
  title: "Composites/ArticleCard/ArticleCard.Title",
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
        <ArticleCard.Footer>Read</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ArticleCard.Title>Why tokens are a language</ArticleCard.Title>`,
      },
    },
  },
};
