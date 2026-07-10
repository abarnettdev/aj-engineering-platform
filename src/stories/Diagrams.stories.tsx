import type { Meta, StoryObj } from "@storybook/react";
import { ComponentAnatomy } from "@/components/composites/component-anatomy";
import { BlueprintDiagram } from "@/components/composites/blueprint-diagram";
import { AiLifecycle } from "@/components/composites/ai-lifecycle";
import { MentalModels } from "@/components/composites/mental-models";
import { SystemsMap } from "@/components/composites/systems-map";

/**
 * The site's diagrams are real React components — not screenshots.
 * They share GSAP primitives, respect reduced motion, and mark all purely
 * decorative SVG geometry `aria-hidden` while keeping labels as text.
 */
const meta = {
  title: "Composites/Diagrams",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SystemsMap_Cinematic: Story = {
  name: "SystemsMap",
  render: () => (
    <div className="container-page py-16">
      <SystemsMap />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Inputs → Engineering Judgment → Production. Scroll-narrated on the live page; static here.",
      },
      source: { code: `<SystemsMap />` },
    },
  },
};

export const ComponentAnatomy_Compound: Story = {
  name: "ComponentAnatomy",
  render: () => (
    <div className="container-page py-16">
      <ComponentAnatomy />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Animated anatomy of the Card compound component. Slots assemble with gold connector lines that draw themselves on scroll.",
      },
      source: { code: `<ComponentAnatomy />` },
    },
  },
};

export const Blueprint_EngineeringGraph: Story = {
  name: "BlueprintDiagram",
  render: () => (
    <div className="container-page py-16">
      <BlueprintDiagram />
    </div>
  ),
  parameters: {
    docs: { source: { code: `<BlueprintDiagram />` } },
  },
};

export const AI_Lifecycle: Story = {
  name: "AiLifecycle",
  render: () => (
    <div className="container-page py-16">
      <AiLifecycle />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Four phases — Explore, Draft, Review, Ship — connected by a bezier gold path that draws itself on scroll.",
      },
      source: { code: `<AiLifecycle />` },
    },
  },
};

export const MentalModels_ThreeDiagrams: Story = {
  name: "MentalModels",
  render: () => (
    <div className="container-page py-16">
      <MentalModels />
    </div>
  ),
  parameters: {
    docs: { source: { code: `<MentalModels />` } },
  },
};
