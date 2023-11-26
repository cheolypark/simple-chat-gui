import clsx from 'clsx'
import {forwardRef} from 'react'
import styles from './Input.module.scss'

const Textarea = forwardRef(function TextArea(
  {
    label,
    placeholder,
    className,
    htmlType,
    autoComplete,
    ariaLabel,
    value,
    required,
    disabled,
    onChange
  },
  ref
) {
  return (
    <div className={clsx(styles.root)}>
      <label>
        {label && <div className={styles.label}>{label}</div>}
        <textarea
          type={htmlType}
          autoComplete={autoComplete}
          placeholder={placeholder}
          ref={ref}
          className={clsx(styles.textarea, className)}
          aria-label={ariaLabel}
          required={required}
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  )
})

export default Textarea
