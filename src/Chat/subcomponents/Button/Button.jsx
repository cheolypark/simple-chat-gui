import clsx from 'clsx'
import styles from './Button.module.scss'
import {LoadingDots} from '../LoadingDots'
import {forwardRef} from 'react'

export const Button = forwardRef(function Button(
  {
    children,
    type,
    className,
    onClick,
    size,
    variant = 'invert',
    loading,
    disabled,
  },
  ref
) {
  return (
    <button
      className={clsx(
        styles.button,
        type && styles[type],
        size && styles[size],
        styles[variant],
        className
      )}
      ref={ref}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && <LoadingDots className={styles.loading}/>}
      <span>{children}</span>
    </button>
  )
})

export const ButtonLink = forwardRef(function Button(
  {children, type, popUp, className, href, onClick, size, variant = 'invert'},
  ref
) {
  return (
    <div
      className={clsx(
        styles.button,
        type && styles[type],
        size && styles[size],
        variant && styles[variant],
        className
      )}
      ref={ref}
      href={href}
      onClick={onClick}
      rel={popUp && "noopener noreferrer"}
      target={popUp && "_blank"}
    >
      <span>{children}</span>
    </div>
  )
})
