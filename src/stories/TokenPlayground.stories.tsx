import type { Meta, StoryObj } from "@storybook/react";
import { TokenPlayground } from "@/components/token-playground";

/**
 * # TokenPlayground
 *
 * A live, in-page demonstration of the "tokens as intent" thesis.
 * Sliders drive four design tokens (accent hue, base radius, spacing
 * density, padding) and a demo card responds in real time.
 *
 * ## When to use
 * Once, on the Design System page, to prove the token contract to
 * visiting engineers and designers. Not a general-purpose component.
 *
 * ## When not to use
 * As a real settings panel. It is an editorial artifact — no persistence,
 * no theming side-effects on the surrounding page.
 *
 * ## Accessibility
 * Native `<input type="range">` sliders with visible labels and current
 * values. Keyboard-operable end to end. Motion-free.
 *
 * ## Related
 * - Design tokens defined in `src/styles.css`
 */
const meta = {
  title: "Composites/TokenPlayground",
  component: TokenPlayground,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TokenPlayground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="container-page py-12">
      <TokenPlayground />
    </div>
  ),
  parameters: {
    docs: { source: { code: `<TokenPlayground />` } },
  },
};
