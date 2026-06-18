import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    hint: 'Must be at least 3 characters',
    placeholder: 'Enter username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    hasError: true,
    hint: 'Password must be at least 8 characters',
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'Read only',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    required: true,
    placeholder: 'Jane Doe',
  },
};
