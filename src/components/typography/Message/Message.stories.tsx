import type { Meta, StoryObj } from "@storybook/react";
import { Message as MessageComponent } from "@typography/Message";

const meta = {
  component: MessageComponent,
} satisfies Meta<typeof MessageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Message: Story = {};
