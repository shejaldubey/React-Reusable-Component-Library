import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders with switch role and label', () => {
    render(<Toggle label="Enable notifications" />);
    expect(screen.getByRole('switch', { name: 'Enable notifications' })).toBeInTheDocument();
  });

  it('toggles checked state on click', async () => {
    const user = userEvent.setup();
    render(<Toggle label="Dark mode" />);

    const toggle = screen.getByRole('switch', { name: 'Dark mode' });
    expect(toggle).not.toBeChecked();

    await user.click(toggle);
    expect(toggle).toBeChecked();

    await user.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  it('calls onChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Toggle label="Sync" onChange={handleChange} />);
    await user.click(screen.getByRole('switch', { name: 'Sync' }));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Toggle label="Disabled toggle" disabled onChange={handleChange} />,
    );
    await user.click(screen.getByRole('switch', { name: 'Disabled toggle' }));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
