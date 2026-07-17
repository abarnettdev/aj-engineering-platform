import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AskAjContactForm } from "@/features/ask-aj/ask-aj-contact-form";
import { emptyContactFormValues } from "@/features/ask-aj/contact-contracts";

const meta = {
  title: "Features/Ask A.J./Contact Form",
  component: AskAjContactForm,
  parameters: { layout: "centered" },
  argTypes: {
    state: {
      control: "select",
      options: ["idle", "submitting", "success", "error"],
    },
    error: { control: "text" },
    values: { control: "object" },
    errors: { control: "object" },
    onChange: { action: "field changed" },
    onSubmit: { action: "submitted" },
  },
  args: {
    values: emptyContactFormValues,
    errors: {},
    state: "idle",
    onChange: fn(),
    onSubmit: fn(),
  },
  decorators: [
    (Story) => (
      <div className="w-[min(100vw-2rem,26rem)] border border-border bg-surface p-5">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AskAjContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const KeyboardSubmissionReady: Story = {
  args: {
    values: {
      ...emptyContactFormValues,
      name: "Morgan Lee",
      email: "morgan@example.com",
      roleCompany: "Engineering recruiter, Northstar",
      message:
        "I'd like to discuss a senior engineering role.\n\nShift + Enter keeps this second paragraph in the message.",
    },
  },
};

export const Submitting: Story = {
  args: {
    state: "submitting",
    values: {
      ...emptyContactFormValues,
      name: "Morgan Lee",
      email: "morgan@example.com",
      roleCompany: "Engineering recruiter, Northstar",
      message: "I'd like to discuss a staff engineering opportunity.",
    },
  },
};

export const Success: Story = {
  args: { state: "success" },
};

export const ValidationError: Story = {
  args: {
    state: "error",
    error: "Please review the highlighted fields and try again.",
    errors: {
      email: "Enter a valid email address.",
      message: "Add a short message so AJ has useful context.",
    },
  },
};

export const ServerError: Story = {
  args: {
    state: "error",
    error: "Your message could not be sent. Please try again shortly.",
  },
};
