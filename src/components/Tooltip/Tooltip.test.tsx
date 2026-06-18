import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger element', () => {
    render(
      <Tooltip content="Helpful tip">
        <Button>Hover me</Button>
      </Tooltip>,
    );

    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
  });

  it('shows tooltip on focus', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(
      <Tooltip content="Keyboard accessible" delay={0}>
        <Button>Focus me</Button>
      </Tooltip>,
    );

    await user.tab();
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Keyboard accessible');
    });

    vi.useRealTimers();
  });

  it('shows tooltip on hover', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(
      <Tooltip content="Hover tip" delay={0}>
        <Button>Hover target</Button>
      </Tooltip>,
    );

    await user.hover(screen.getByRole('button', { name: 'Hover target' }));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Hover tip');
    });

    vi.useRealTimers();
  });

  it('hides tooltip on mouse leave', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(
      <Tooltip content="Temporary" delay={0}>
        <Button>Leave me</Button>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button', { name: 'Leave me' });
    await user.hover(trigger);
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    await user.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    vi.useRealTimers();
  });
});
