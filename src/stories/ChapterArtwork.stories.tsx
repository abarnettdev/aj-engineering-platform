import type { Meta, StoryObj } from "@storybook/react";
import { ChapterArtwork } from "@/components/composites/chapter-artwork";

const meta = {
  title: "Composites/Journey/Chapter Artwork",
  component: ChapterArtwork,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Responsive evidence image used by each journey chapter. The caption gives the artifact its place in the chronology.",
      },
    },
  },
  argTypes: {
    src: { control: "text", table: { category: "Media" } },
    alt: { control: "text", table: { category: "Accessibility" } },
    caption: { control: "text", table: { category: "Content" } },
  },
} satisfies Meta<typeof ChapterArtwork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AgencyChapter: Story = {
  args: {
    src: "/visuals/timeline-affinitiv.webp",
    alt: "Affinitiv campaign modules presented across desktop and mobile.",
    caption: "03 · Agency speed became repeatable systems",
  },
};

export const LongCaption: Story = {
  args: {
    src: "/visuals/timeline-legato.webp",
    alt: "CDW commerce components across product journeys.",
    caption:
      "06 · Enterprise design-system leadership across shared commerce experiences",
  },
};
