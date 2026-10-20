import type { Meta, StoryObj } from "@storybook/react";
import { Choreograph, ReadingProgress } from "@/components/scroll-scene";

const meta = {
  title: "Foundations/Scroll Choreography",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Progressive scroll behavior used by the live site. Motion is disabled when reduced motion is requested.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ReadingIndicator: Story = {
  render: () => (
    <div className="min-h-[60vh] bg-background p-12">
      <ReadingProgress />
      <p className="text-muted-foreground">
        The coral line at the top tracks reading progress.
      </p>
    </div>
  ),
};

export const ChoreographedContent: Story = {
  render: () => (
    <Choreograph>
      <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10">
        <h2 className="text-3xl">Content enters with the reading flow.</h2>
      </div>
    </Choreograph>
  ),
};
