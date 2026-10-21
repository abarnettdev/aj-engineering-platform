import type { Preview } from "@storybook/react";
import "../src/styles.css";

type DocumentedArgType = {
  table?: Record<string, unknown> & { category?: string };
  [key: string]: unknown;
};

const propCategories: Record<string, string> = {
  children: "Content",
  title: "Content",
  description: "Content",
  eyebrow: "Content",
  headline: "Content",
  image: "Media",
  imageAlt: "Accessibility",
  imageCaption: "Media",
  variant: "Appearance",
  size: "Appearance",
  tone: "Appearance",
  className: "Appearance",
  disabled: "State",
  open: "State",
  isStreaming: "State",
  error: "State",
  currentPath: "Navigation",
  onClick: "Events",
  onChange: "Events",
  onSubmit: "Events",
  onNavigate: "Events",
};

export const argTypesEnhancers = [
  ({ argTypes }: { argTypes: Record<string, DocumentedArgType> }) =>
    Object.fromEntries(
      Object.entries(argTypes).map(([name, config]) => [
        name,
        {
          ...config,
          table: {
            ...config.table,
            ...(propCategories[name]
              ? { category: propCategories[name] }
              : undefined),
          },
        },
      ]),
    ),
];

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
};

export default preview;
