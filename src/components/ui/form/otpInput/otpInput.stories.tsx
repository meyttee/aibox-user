import type { Meta, StoryObj } from "@storybook/nextjs";
import OtpInput from "./otpInput";

const meta: Meta<typeof OtpInput> = {
  component: OtpInput,
  title: "OtpInput",
};
export default meta;
type Story = StoryObj<typeof OtpInput>;

export const General: Story = {
  args: {},
};
