import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "paper",
      values: [
        { name: "paper", value: "#f5f4ef" },
        { name: "ink", value: "#0b0b0b" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

