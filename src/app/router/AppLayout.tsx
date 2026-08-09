import { NavLink, Outlet } from 'react-router'

import styles from './AppLayout.module.scss'

export function AppLayout() {
  return (
    <>
      <header className={styles['app-header']}>
        <nav aria-label='Main navigation'>
          <NavLink to='/' end>
            Home
          </NavLink>

          <NavLink to='/dev'>
            Dev
          </NavLink>
        </nav>
      </header>

      <main className={styles['app-main']}>
        <Outlet />
      </main>

      <footer className={styles['app-footer']}>
        Footer
      </footer>
    </>
  )
}