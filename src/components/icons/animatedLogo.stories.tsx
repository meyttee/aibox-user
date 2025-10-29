import type { Meta, StoryObj } from "@storybook/nextjs";
import AnimatedLogo from "./animatedLogo";

const meta: Meta<typeof AnimatedLogo> = {
  component: AnimatedLogo,
  title: "icons/AnimatedLogo",
};
export default meta;
type Story = StoryObj<typeof AnimatedLogo>;

export const General: Story = {
  args: {},
};
