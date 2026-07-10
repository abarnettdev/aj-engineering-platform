import type { Meta, StoryObj } from "@storybook/react";
import { PageHero } from "@/components/page-hero";
import heroImage from "@/assets/hero-engineering.jpg";

/**
 * # PageHero
 *
 * The editorial hero used at the top of interior routes (Work, Journey,
 * Engineering, Systems, Contact, Field Notes). Composes an eyebrow,
 * chapter mark, headline, description, actions, and an anchored image
 * with a blueprint backdrop.
 *
 * ## When to use
 * The first block of any interior route. Sets the reading contract
 * (chapter number, page identity) before the reader scrolls.
 *
 * ## When not to use
 * The homepage — it uses its own bespoke hero composition.
 *
 * ## Accessibility
 * - Headline renders as `<h1>`; only one `PageHero` per page.
 * - Image requires `imageAlt`. Decorative backdrop grid is `aria-hidden`.
 * - Motion (parallax, tilt) no-ops under reduced motion.
 *
 * ## Responsive
 * Stacks on mobile (image below headline), splits on md+. Chips wrap.
 *
 * ## Related
 * - `Reveal`, `Parallax`, `Tilt3D`, `FloatLayer`
 */
const meta = {
  title: "Composites/PageHero",
  component: PageHero,
  parameters: { layout: "fullscreen" },
  argTypes: {
    eyebrow: { control: "text" },
    chapter: { control: "text" },
    chapterLabel: { control: "text" },
    headline: { control: false },
    description: { control: false },
    image: { control: false },
    imageAlt: { control: "text" },
    imageCaption: { control: "text" },
    imageMeta: { control: "text" },
    actions: { control: false },
    chips: { control: "object" },
  },
} satisfies Meta<typeof PageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

const source = `<PageHero
  eyebrow="Chapter"
  chapter="03"
  chapterLabel="Engineering Judgment"
  headline={<>The craft of shipping <em>with taste</em>.</>}
  description="How I choose what to build, what to postpone, and what to refuse."
  image={hero}
  imageAlt="Studio workspace"
  imageCaption="Studio, mid-review"
  imageMeta="2026"
  chips={["Systems", "Editorial", "Motion"]}
/>`;

export const Default: Story = {
  args: {
    eyebrow: "Chapter",
    chapter: "03",
    chapterLabel: "Engineering Judgment",
    headline: (
      <>
        The craft of shipping <em className="italic text-gold/90">with taste</em>.
      </>
    ),
    description:
      "How I choose what to build, what to postpone, and what to refuse.",
    image: heroImage,
    imageAlt: "Studio workspace, mid-review",
    imageCaption: "Studio, mid-review",
    imageMeta: "2026",
    chips: ["Systems", "Editorial", "Motion"],
  },
  parameters: { docs: { source: { code: source } } },
};
