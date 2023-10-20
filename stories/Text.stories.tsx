import type { Meta, StoryObj } from "@storybook/react";
import Text from "../app/components/Text";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {
  render: () => <Text/>,
};
