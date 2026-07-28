import { Link } from 'react-router'

import { ROUTE_PATHS } from '@/shared/routes'

export function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <p>Diese Seite wurde nicht gefunden.</p>

      <Link to={ROUTE_PATHS.HOME}>Zur Startseite</Link>
    </>
  )
}