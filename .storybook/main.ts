import { mergeConfig } from "vite";
import path from "path";

export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config: any) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          postcss: {
            plugins: [
              require("tailwindcss")(
                path.resolve(__dirname, "../tailwind.config.js")
              ),
              require("autoprefixer"),
            ],
          },
        },
      },
    });
  },
};
