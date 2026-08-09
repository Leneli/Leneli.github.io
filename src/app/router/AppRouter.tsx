import { Routes, Route } from 'react-router'

import { HomePage } from '@/pages/Home'
import { DevPage } from '@/pages/Dev'
import { NotFoundPage } from '@/pages/Error'

import { ROUTE_PATHS } from '@/shared/routes'

import { RouteTyped } from './RouteTyped'
import { AppLayout } from './AppLayout'
import { ThemePage } from '../providers/theme'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <RouteTyped path={ROUTE_PATHS.HOME} element={<HomePage />} />

        {/* For Development */}
        <RouteTyped path={ROUTE_PATHS.DEV} element={<DevPage />} />
        <Route path='theme' element={<ThemePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}