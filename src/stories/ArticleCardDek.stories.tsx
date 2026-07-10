import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@/components/composites/article-card";

/**
 * # ArticleCard.Dek
 *
 * A "dek" (deck) is editorial shorthand for a subtitle beneath a headline.
 * One or two sentences that expand on the title.
 *
 * ## When to use
 * Every `ArticleCard`. Aim for a single sentence, two at most.
 *
 * ## Accessibility
 * Renders as a `<p>` inside the enclosing article. Body copy — do not
 * hide critical information here.
 *
 * ## Related
 * - `ArticleCard`, `ArticleCard.Title`
 */
const meta: Meta = {
  title: "Composites/ArticleCard/ArticleCard.Dek",
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
        <ArticleCard.Dek>
          How tokens become the shared contract between design, engineering,
          and product.
        </ArticleCard.Dek>
        <ArticleCard.Footer>Read</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ArticleCard.Dek>
  How tokens become the shared contract between design, engineering,
  and product.
</ArticleCard.Dek>`,
      },
    },
  },
};
