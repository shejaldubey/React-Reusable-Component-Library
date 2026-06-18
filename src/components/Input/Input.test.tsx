import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders label and associates it with the input', () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('accepts user typing', async () => {
    const user = userEvent.setup();
    render(<Input label="Username" />);

    const input = screen.getByLabelText('Username');
    await user.type(input, 'jane');

    expect(input).toHaveValue('jane');
  });

  it('shows error state and hint message', () => {
    render(
      <Input
        label="Password"
        hasError
        hint="Password is required"
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Password is required');
    expect(screen.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true');
  });

  it('calls onChange when value changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Input label="Name" onChange={handleChange} />);
    await user.type(screen.getByLabelText('Name'), 'a');

    expect(handleChange).toHaveBeenCalled();
  });
});
