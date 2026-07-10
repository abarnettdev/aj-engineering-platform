import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: { reactDocgen: "react-docgen" },
  core: { disableTelemetry: true },
  async viteFinal(cfg) {
    const merged = mergeConfig(cfg, {
      plugins: [
        tsconfigPaths({ projects: ["./tsconfig.json"] }),
        tailwindcss(),
      ],
    }) as Record<string, unknown>;
    // Prevent Vite from auto-loading the app's vite.config.ts (TanStack
    // Start plugin). Assigned AFTER merge so it survives.
    merged.configFile = false;
    return merged as never;
  },

};

export default config;

