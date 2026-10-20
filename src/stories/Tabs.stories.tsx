import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const meta = {
  title: "Primitives/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A keyboard-operable tab set built on Radix UI. Arrow keys move between tabs while each trigger remains connected to its panel.",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentDocumentation: Story = {
  args: { defaultValue: "overview" },
  render: (args) => (
    <Tabs {...args} className="w-[min(38rem,calc(100vw-2rem))]">
      <TabsList
        aria-label="Component documentation sections"
        className="h-auto flex-wrap"
      >
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="api">API</TabsTrigger>
        <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
      </TabsList>
      <TabsContent
        value="overview"
        className="border border-border bg-card p-5"
      >
        <h3 className="font-semibold text-ink">Tabs group related views</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Use tabs when people need to move between peer sections without
          leaving the current context.
        </p>
      </TabsContent>
      <TabsContent value="api" className="border border-border bg-card p-5">
        <h3 className="font-semibold text-ink">
          Composition keeps the API clear
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Tabs, TabsList, TabsTrigger, and TabsContent each own one part of the
          contract.
        </p>
      </TabsContent>
      <TabsContent
        value="accessibility"
        className="border border-border bg-card p-5"
      >
        <h3 className="font-semibold text-ink">
          Keyboard behavior is included
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Focus, arrow-key movement, selected state, and panel relationships
          come from the shared primitive.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const LongLabels: Story = {
  args: { defaultValue: "implementation" },
  render: (args) => (
    <Tabs {...args} className="w-[min(44rem,calc(100vw-2rem))]">
      <TabsList
        aria-label="Delivery documentation"
        className="h-auto flex-wrap justify-start"
      >
        <TabsTrigger value="specification">Design specification</TabsTrigger>
        <TabsTrigger value="implementation">
          Implementation guidance
        </TabsTrigger>
        <TabsTrigger value="limits">Known limitations</TabsTrigger>
      </TabsList>
      <TabsContent
        value="specification"
        className="border border-border bg-card p-5"
      >
        Anatomy, spacing, variants, and responsive behavior.
      </TabsContent>
      <TabsContent
        value="implementation"
        className="border border-border bg-card p-5"
      >
        Typed props, composition examples, and integration notes.
      </TabsContent>
      <TabsContent value="limits" className="border border-border bg-card p-5">
        Constraints are documented so product teams can plan around them.
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  args: { defaultValue: "available" },
  render: (args) => (
    <Tabs {...args} className="w-[min(32rem,calc(100vw-2rem))]">
      <TabsList aria-label="Feature availability">
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="planned" disabled>
          Planned
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="available"
        className="border border-border bg-card p-5"
      >
        This feature is ready to use.
      </TabsContent>
    </Tabs>
  ),
};
