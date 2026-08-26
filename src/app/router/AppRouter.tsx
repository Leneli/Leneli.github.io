import { Routes, Route } from 'react-router'

import { HomePage } from '@/pages/Home'
import { ProjectsPage } from '@/pages/Projects'
import { ExperiencePage } from '@/pages/Experience'
import { AboutPage } from '@/pages/About'
import { ContactPage } from '@/pages/Contact'
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
        <RouteTyped path={ROUTE_PATHS.PROJECTS} element={<ProjectsPage />} />
        <RouteTyped
          path={ROUTE_PATHS.EXPERIENCE}
          element={<ExperiencePage />}
        />
        <RouteTyped path={ROUTE_PATHS.ABOUT} element={<AboutPage />} />
        <RouteTyped path={ROUTE_PATHS.CONTACT} element={<ContactPage />} />

        {/* For Development */}
        <RouteTyped path={ROUTE_PATHS.DEV} element={<DevPage />} />
        <RouteTyped path={ROUTE_PATHS.DEV_THEME} element={<ThemePage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
