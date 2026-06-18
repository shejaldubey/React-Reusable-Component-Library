import { useId, type InputHTMLAttributes } from 'react';
import styles from './Toggle.module.scss';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Accessible label for the toggle */
  label: string;
  /** Optional description shown below the label */
  description?: string;
}

export function Toggle({
  label,
  description,
  id: providedId,
  checked,
  defaultChecked,
  disabled,
  className,
  onChange,
  ...rest
}: ToggleProps) {
  const generatedId = useId();
  const inputId = providedId ?? generatedId;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <label htmlFor={inputId} className={styles.labelRow}>
        <span className={styles.textContent}>
          <span className={styles.label}>{label}</span>
          {description && (
            <span id={descriptionId} className={styles.description}>
              {description}
            </span>
          )}
        </span>

        <span className={styles.switch}>
          <input
            id={inputId}
            type="checkbox"
            role="switch"
            className={styles.input}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            aria-describedby={descriptionId}
            onChange={onChange}
            {...rest}
          />
          <span className={styles.track} aria-hidden="true">
            <span className={styles.thumb} />
          </span>
        </span>
      </label>
    </div>
  );
}
