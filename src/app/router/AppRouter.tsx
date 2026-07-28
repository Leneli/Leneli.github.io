import { Routes, Route } from 'react-router'

import { HomePage } from '@/pages/Home'
import { DevPage } from '@/pages/Dev'
import { NotFoundPage } from '@/pages/Error'

import { ROUTE_PATHS } from '@/shared/routes'

import { RouteTyped } from './RouteTyped'
import { AppLayout } from './AppLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <RouteTyped path={ROUTE_PATHS.HOME} element={<HomePage />} />
        <RouteTyped path={ROUTE_PATHS.DEV} element={<DevPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}