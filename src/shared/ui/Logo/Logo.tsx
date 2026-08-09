import styles from './Logo.module.scss'

export type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  const logoClassName = [
    styles['logo'],
    compact && styles['logo--compact'],
    className,
  ].filter(Boolean).join(' ')

  return (
    <span className={logoClassName}>
      <span className={styles['logo-mark']} aria-hidden='true'>
        <span className={styles['letter-l']} />
        <span className={styles['letter-i']} />
      </span>

      {!compact && (
        <span className={styles['wordmark']}>
          <span className={styles['wordmark-name']}>Leneli</span>
          <span className={styles['wordmark-role']}>Developer</span>
        </span>
      )}
    </span>
  )
}
