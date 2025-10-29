import { Meta, StoryObj } from "@storybook/nextjs";
import ToggleSwitch from "./toggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  component: ToggleSwitch,
  title: "ToggleSwitch",
};
export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const General: Story = {
  args: {
    mode: "on/off",
    items: [
      { key: "string", title: "string" },
      { key: 123, title: "number" },
    ],
  },
};
