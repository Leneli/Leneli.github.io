import type { ComponentPropsWithoutRef, ElementType } from 'react'

import styles from './Button.module.scss'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: ButtonVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export function Button<T extends ElementType = 'button'>({
  as,
  className,
  variant = 'primary',
  ...props
}: ButtonProps<T>) {
  const Component = as ?? 'button'
  const buttonClassName = [
    styles['button'],
    styles[`button--${variant}`],
    className,
  ].filter(Boolean).join(' ')
  const defaultProps = Component === 'button' && !('type' in props)
    ? { type: 'button' as const }
    : {}

  return (
    <Component {...defaultProps} {...props} className={buttonClassName} />
  )
}
