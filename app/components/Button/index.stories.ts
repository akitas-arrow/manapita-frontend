import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/app/components/Button";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/LyV8GcyOISxhl9drHFokzG/Design?node-id=34-7&t=4FI5Jz632ClBLv68-1",
    },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "かぶとむし",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "かぶとむし",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    children: "かぶとむし",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "lg",
    children: "かぶとむし",
  },
};

export const Wrong: Story = {
  args: {
    variant: "wrong",
    size: "lg",
    children: "かぶとむし",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/LyV8GcyOISxhl9drHFokzG/Design?node-id=8-51&t=4ERPunZ8xOdEB0Mg-1",
    },
  },
};
