import styles from "./Button.module.scss"

export const IconButton = ({
                             bordered,
                             className,
                             classNameIcon,
                             shadow,
                             onClick,
                             title,
                             disabled,
                             noDark,
                             icon,
                             text,
                           }) => {
  return (
    <button
      className={
        styles.icon_button +
        ` ${bordered && styles.border} ${shadow && styles.shadow} ${className ?? ""} clickable`
      }
      onClick={onClick}
      title={title}
      disabled={disabled}
      role="button"
    >
      <div className={styles.icon_button_icon + ` ${noDark && "no-dark"} ${classNameIcon ?? ""} `}>
        {icon}
      </div>
      {text && (
        <div className={styles.icon_button_text}>{text}</div>
      )}
    </button>
  )
}
