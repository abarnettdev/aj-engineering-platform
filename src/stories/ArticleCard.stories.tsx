import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "@/components/composites/article-card";

/**
 * # ArticleCard
 *
 * Compound editorial card composed of five named sub-components. Wraps
 * a `Tilt3D` shell and renders as a link when `to` (TanStack Router) or
 * `href` (external) is provided.
 *
 * ## Sub-components
 * - `ArticleCard.Meta` — tag + read-time chip
 * - `ArticleCard.Title` — headline
 * - `ArticleCard.Dek` — subtitle paragraph
 * - `ArticleCard.Footer` — trailing call-to-action row
 *
 * Each sub-component has its own documentation page under
 * `Composites/ArticleCard/`.
 *
 * ## When to use
 * - Field-note previews on `/writing`.
 * - Related-article rails at the bottom of an article page.
 *
 * ## When not to use
 * - Case study surfaces — use the Work Case Study pattern instead.
 * - Non-article resources (metrics, projects) — use `Card`.
 *
 * ## Accessibility
 * The whole card is a single tab stop with a focus ring. The inner
 * `<article>` gives assistive tech a landmark; the sub-slots keep the
 * announced content grouped.
 *
 * ## Related
 * - `ArticleCard.Meta`, `ArticleCard.Title`, `ArticleCard.Dek`, `ArticleCard.Footer`
 * - `Card`, `Badge`
 */
const meta: Meta = {
  title: "Composites/ArticleCard/ArticleCard",
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
        <ArticleCard.Footer>Read the note</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ArticleCard href="/writing/tokens-are-a-language">
  <ArticleCard.Meta tag="Design Systems" read="6 min" />
  <ArticleCard.Title>Why tokens are a language</ArticleCard.Title>
  <ArticleCard.Dek>
    How tokens become the shared contract between design, engineering,
    and product.
  </ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>`,
      },
    },
  },
};

export const Featured: Story = {
  render: () => (
    <div className="w-[36rem]">
      <ArticleCard href="/writing/composition-over-configuration" featured>
        <ArticleCard.Meta tag="Architecture" read="9 min" />
        <ArticleCard.Title>Composition over configuration</ArticleCard.Title>
        <ArticleCard.Dek>
          Small named slots outlive a monolithic parent with thirty flags.
        </ArticleCard.Dek>
        <ArticleCard.Footer>Read the note</ArticleCard.Footer>
      </ArticleCard>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ArticleCard href="/…" featured>
  <ArticleCard.Meta tag="Architecture" read="9 min" />
  <ArticleCard.Title>Composition over configuration</ArticleCard.Title>
  <ArticleCard.Dek>…</ArticleCard.Dek>
  <ArticleCard.Footer>Read the note</ArticleCard.Footer>
</ArticleCard>`,
      },
    },
  },
};
