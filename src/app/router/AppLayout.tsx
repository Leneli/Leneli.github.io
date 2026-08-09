import { NavLink, Outlet } from 'react-router'

import styles from './AppLayout.module.scss'

export function AppLayout() {
  return (
    <div className={styles['app-layout']}>
      <header className={styles['app-header']}>
        <div className={styles['app-header-content']}>
          <nav aria-label='Main navigation'>
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
