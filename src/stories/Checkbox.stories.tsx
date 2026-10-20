import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A keyboard-operable checkbox built on Radix UI. Pair it with a visible label and place supporting copy beside the control.",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

function CheckboxExample({
  id,
  label,
  description,
  defaultChecked,
  disabled,
}: {
  id: string;
  label: string;
  description: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex w-[min(26rem,calc(100vw-2rem))] items-start gap-3">
      <Checkbox id={id} defaultChecked={defaultChecked} disabled={disabled} />
      <div>
        <Label htmlFor={id}>{label}</Label>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export const Unchecked: Story = {
  args: {},
  render: () => (
    <CheckboxExample
      id="checkbox-updates"
      label="Product updates"
      description="Receive a monthly summary of new features and service changes."
    />
  ),
};

export const Checked: Story = {
  args: {},
  render: () => (
    <CheckboxExample
      id="checkbox-security"
      label="Security alerts"
      description="Receive important account and security notifications."
      defaultChecked
    />
  ),
};

export const Disabled: Story = {
  args: {},
  render: () => (
    <CheckboxExample
      id="checkbox-managed"
      label="Required account notices"
      description="This setting is managed by your organization."
      defaultChecked
      disabled
    />
  ),
};

export const LongContent: Story = {
  args: {},
  render: () => (
    <CheckboxExample
      id="checkbox-long"
      label="Detailed weekly project and delivery summary"
      description="Receive a longer weekly message covering milestones, open decisions, accessibility findings, delivery risks, and the next planned release."
    />
  ),
};
