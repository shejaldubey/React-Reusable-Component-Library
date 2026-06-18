import {
  cloneElement,
  isValidElement,
  useCallback,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import styles from './Tooltip.module.scss';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

type TooltipTriggerProps = {
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
  onFocus?: (event: FocusEvent<HTMLElement>) => void;
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  'aria-describedby'?: string;
};

export interface TooltipProps {
  /** Element that triggers the tooltip on hover and focus */
  children: ReactElement<TooltipTriggerProps>;
  /** Tooltip content */
  content: ReactNode;
  /** Preferred placement relative to the trigger */
  placement?: TooltipPlacement;
  /** Delay before showing the tooltip (ms) */
  delay?: number;
}

export function Tooltip({
  children,
  content,
  placement = 'top',
  delay = 200,
}: TooltipProps) {
  const tooltipId = useId();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  }, []);

  if (!isValidElement(children)) {
    throw new Error('Tooltip requires a single valid React element as its child.');
  }

  const trigger = cloneElement<TooltipTriggerProps>(children, {
    'aria-describedby': isVisible ? tooltipId : undefined,
    onMouseEnter: (event: MouseEvent<HTMLElement>) => {
      children.props.onMouseEnter?.(event);
      showTooltip();
    },
    onMouseLeave: (event: MouseEvent<HTMLElement>) => {
      children.props.onMouseLeave?.(event);
      hideTooltip();
    },
    onFocus: (event: FocusEvent<HTMLElement>) => {
      children.props.onFocus?.(event);
      showTooltip();
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      children.props.onBlur?.(event);
      hideTooltip();
    },
  });

  return (
    <span className={styles.wrapper}>
      {trigger}
      {isVisible && (
        <span
          id={tooltipId}
          role="tooltip"
          className={[styles.tooltip, styles[`placement-${placement}`]].join(' ')}
        >
          {content}
        </span>
      )}
    </span>
  );
}
