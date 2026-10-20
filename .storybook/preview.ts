import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#edf0f4" },
        { name: "card", value: "#ffffff" },
        { name: "ink", value: "#17181a" },
      ],
    },
    controls: {
      expanded: true,
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Foundations",
          "Primitives",
          "Navigation",
          "Composites",
          "Features",
          "Patterns",
        ],
      },
    },
  },
  argTypes: {
    children: { table: { category: "Content" } },
    title: { table: { category: "Content" } },
    description: { table: { category: "Content" } },
    eyebrow: { table: { category: "Content" } },
    headline: { table: { category: "Content" } },
    image: { table: { category: "Media" } },
    imageAlt: { table: { category: "Accessibility" } },
    imageCaption: { table: { category: "Media" } },
    variant: { table: { category: "Appearance" } },
    size: { table: { category: "Appearance" } },
    tone: { table: { category: "Appearance" } },
    className: { table: { category: "Appearance" } },
    disabled: { table: { category: "State" } },
    open: { table: { category: "State" } },
    isStreaming: { table: { category: "State" } },
    error: { table: { category: "State" } },
    currentPath: { table: { category: "Navigation" } },
    onClick: { table: { category: "Events" } },
    onChange: { table: { category: "Events" } },
    onSubmit: { table: { category: "Events" } },
    onNavigate: { table: { category: "Events" } },
  },
};

export default preview;
