export const ROUTE_PATHS = {
  HOME: '/',
  PROJECTS: '/projects',
  EXPERIENCE: '/experience',
  ABOUT: '/about',
  CONTACT: '/contact',
  DEV: '/dev',
  DEV_THEME: '/dev/theme',
} as const

export type TRouteName = keyof typeof ROUTE_PATHS

export type TRoutePath = (typeof ROUTE_PATHS)[keyof typeof ROUTE_PATHS]
