import type { Meta, StoryObj } from "@storybook/react";
import { ProjectShowcase } from "@/components/project-showcase";

const meta = {
  title: "Components/Project Showcase",
  component: ProjectShowcase,
  parameters: { layout: "padded" },
  args: {
    screenshots: [
      {
        src: "/projects/lsi-current-reference.webp",
        alt: "LSI Companies homepage",
        label: "LSI Companies",
      },
      {
        src: "/projects/artisan-current-reference.webp",
        alt: "Artisan Eatery homepage",
        label: "Artisan Eatery",
      },
      {
        src: "/projects/hope-current-reference.webp",
        alt: "Hope Hospice homepage",
        label: "Hope Hospice",
      },
    ],
  },
} satisfies Meta<typeof ProjectShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeSites: Story = {};

export const SingleSite: Story = {
  args: { screenshots: [meta.args.screenshots[0]] },
};
