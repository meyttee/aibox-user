import React from "react";
import type { Preview, Decorator } from "@storybook/react";
import "../src/app/globals.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "sun",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const selected =
      context.globals?.theme || stored || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("class", selected);
    try {
      localStorage.setItem("theme", selected);
    } catch (e) {
      throw new Error((e as string).toString());
    }
  }

  return Story();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
