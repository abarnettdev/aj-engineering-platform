import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@/components/composites/article-card";

/**
 * # ArticleCard.Meta
 *
 * Small mono-uppercase chip that carries an article's tag and read-time.
 * Rendered above the title inside an `ArticleCard`.
 *
 * ## When to use
 * As the first child of every `ArticleCard`. Sets the reading contract
 * (topic and length) before the eye reaches the headline.
 *
 * ## When not to use
 * On non-article surfaces. Use `Badge` for generic labels.
 *
 * ## Accessibility
 * Purely visual metadata. The values are announced inside the enclosing
 * `<article>` region.
 *
 * ## Related
 * - `ArticleCard` (parent), `ArticleCard.Title`, `Badge`
 */
const meta: Meta = {
  title: "Composites/ArticleCard/ArticleCard.Meta",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="w-[22rem]">
      <ArticleCard href="/writing/tokens-are-a-language">
        <ArticleCard.Meta tag="Design Systems" read="6 min" />
        <ArticleCard.Title>Preview title</ArticleCard.Title>
        <ArticleCard.Dek>Preview dek.</ArticleCard.Dek>
        <ArticleCard.Footer>Read</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ArticleCard.Meta tag="Design Systems" read="6 min" />`,
      },
    },
  },
};
