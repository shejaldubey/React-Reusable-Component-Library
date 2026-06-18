import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import styles from './Input.module.scss';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label */
  label: string;
  /** Helper or error message */
  hint?: string;
  /** Marks the field as invalid */
  hasError?: boolean;
  /** Input size */
  size?: InputSize;
  /** Optional icon rendered before the input */
  startIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    hint,
    hasError = false,
    size = 'md',
    startIcon,
    id: providedId,
    disabled,
    required,
    type = 'text',
    className,
    ...rest
  },
  ref,
) {
  const generatedId = useId();
  const inputId = providedId ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
        {required && <span className={styles.srOnly}>(required)</span>}
      </label>

      <div
        className={[
          styles.inputContainer,
          styles[`size-${size}`],
          hasError ? styles.error : '',
          disabled ? styles.disabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {startIcon && (
          <span className={styles.startIcon} aria-hidden="true">
            {startIcon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          required={required}
          aria-invalid={hasError || undefined}
          aria-describedby={hintId}
          className={styles.input}
          {...rest}
        />
      </div>

      {hint && (
        <p
          id={hintId}
          className={[styles.hint, hasError ? styles.hintError : ''].filter(Boolean).join(' ')}
          role={hasError ? 'alert' : undefined}
        >
          {hint}
        </p>
      )}
    </div>
  );
});
