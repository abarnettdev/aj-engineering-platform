import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A native input with visible focus, disabled styling, and support for labels, descriptions, and validation messages.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[min(24rem,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter a project name",
    "aria-label": "Project name",
  },
};

export const WithLabelAndHelp: Story = {
  args: { type: "email" },
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="storybook-email">Email address</Label>
      <Input
        {...args}
        id="storybook-email"
        placeholder="name@example.com"
        aria-describedby="storybook-email-help"
      />
      <p id="storybook-email-help" className="text-xs text-muted-foreground">
        Used for product notifications you choose to receive.
      </p>
    </div>
  ),
};

export const Invalid: Story = {
  args: { type: "email" },
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="storybook-invalid-email">Email address</Label>
      <Input
        {...args}
        id="storybook-invalid-email"
        defaultValue="missing-domain"
        aria-invalid="true"
        aria-describedby="storybook-invalid-error"
        className="border-destructive"
      />
      <p id="storybook-invalid-error" className="text-xs text-destructive">
        Enter an email address with a domain.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    type: "text",
    defaultValue: "Managed by your organization",
    disabled: true,
    "aria-label": "Organization setting",
  },
};

export const LongContent: Story = {
  args: {
    type: "text",
    defaultValue:
      "A long value that demonstrates how the native input scrolls without breaking the surrounding layout",
    "aria-label": "Long project description",
  },
};
