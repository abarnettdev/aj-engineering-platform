import type { Meta, StoryObj } from "@storybook/react";
import { ArchitectureIllus, TokensIllus } from "@/components/illus";

const meta = {
  title: "Composites/System Illustrations",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Code-native illustrations used on the Design System page. They use current site tokens and remain decorative to assistive technology.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Tokens: Story = {
  render: () => <TokensIllus className="w-[36rem] max-w-full" />,
};

export const Architecture: Story = {
  render: () => <ArchitectureIllus className="w-[36rem] max-w-full" />,
};
