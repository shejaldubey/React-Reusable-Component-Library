import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: 'This action saves your changes',
    placement: 'top',
    children: <Button variant="secondary">Save</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Additional details appear here',
    placement: 'bottom',
    children: <Button variant="secondary">Info</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Navigate back',
    placement: 'left',
    children: <Button variant="secondary">Back</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Proceed to next step',
    placement: 'right',
    children: <Button variant="secondary">Next</Button>,
  },
};
