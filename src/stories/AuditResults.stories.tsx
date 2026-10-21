import type { Meta, StoryObj } from "@storybook/react";
import {
  AuditResultsDialog,
  AxeResults,
  LighthouseResults,
  ScoreRing,
} from "@/components/audit-results";
import { QualityShowcase } from "@/components/quality-showcase";

const meta = {
  title: "Composites/Quality/Audit Results",
  component: AuditResultsDialog,
  parameters: {
    layout: "centered",
    controls: {
      include: ["initialView", "triggerLabel", "triggerClassName"],
    },
    docs: {
      description: {
        component:
          "Presents dated audit evidence without implying live telemetry or accessibility certification. The Radix dialog manages focus, Escape, and screen-reader naming. Score values remain real text, and reduced motion shows the final state immediately.",
      },
    },
  },
  args: { initialView: "lighthouse", triggerLabel: "Explore the results" },
  argTypes: {
    initialView: {
      control: "inline-radio",
      options: ["lighthouse", "accessibility"],
      description: "Chooses the result tab shown when the dialog opens.",
      table: { category: "State" },
    },
    triggerLabel: {
      control: "text",
      description: "Sets the visible action label.",
      table: { category: "Content" },
    },
    triggerClassName: {
      control: "text",
      description: "Adds layout or visual classes to the trigger.",
      table: { category: "Appearance" },
    },
  },
} satisfies Meta<typeof AuditResultsDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dialog: Story = {};
export const LighthouseDesktop: Story = { render: () => <LighthouseResults /> };
export const LighthouseMobile: Story = {
  render: () => <LighthouseResults defaultDevice="mobile" />,
};
export const AxeAutomatedScan: Story = { render: () => <AxeResults /> };
export const ScoreAnimation: Story = {
  render: () => <ScoreRing score={98} label="Performance" />,
};
export const HomepageExperience: Story = {
  render: () => (
    <div className="max-w-6xl">
      <QualityShowcase />
    </div>
  ),
};
