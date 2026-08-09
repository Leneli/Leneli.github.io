import { Link, NavLink, Outlet } from 'react-router'

import { Logo } from '@/shared/ui'

import styles from './AppLayout.module.scss'

export function AppLayout() {
  return (
    <div className={styles['app-layout']}>
      <header className={styles['app-header']}>
        <div className={styles['app-header-content']}>
          <Link
            className={styles['brand-link']}
            to='/'
            aria-label='Leneli — home'
          >
            <Logo />
          </Link>

          <nav className={styles['app-navigation']} aria-label='Main navigation'>
            <NavLink to='/' end>
              Home
            </NavLink>

            <NavLink to='/dev'>
              Dev
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles['app-main']}>
        <Outlet />
      </main>

      <footer className={styles['app-footer']}>
        <div className={styles['app-footer-content']}>
          Footer
        </div>
      </footer>
    </div>
  )
}
