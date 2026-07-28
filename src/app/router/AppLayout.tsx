import { NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <>
      <header>
        <nav aria-label='Main navigation'>
          <NavLink to='/' end>
            Home
          </NavLink>

          <NavLink to='/dev'>
            Dev
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}