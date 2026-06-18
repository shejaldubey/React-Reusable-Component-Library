import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Use a dark color scheme across the application',
  },
};

export const Checked: Story = {
  args: {
    label: 'Auto-save',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Beta features',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <Toggle
        label="Controlled toggle"
        description={enabled ? 'On' : 'Off'}
        checked={enabled}
        onChange={(event) => setEnabled(event.target.checked)}
      />
    );
  },
};
