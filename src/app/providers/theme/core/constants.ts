import type { ThemeBreakpoint } from './types'

export const THEME_BREAKPOINTS: Record<ThemeBreakpoint, string> = {
  sm: '36rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
}

export const THEME_ID_PATTERN = /^[a-z][a-z0-9-]*$/
export const THEME_PREFIX_PATTERN = /^[a-z][a-z0-9-]*$/
export const MAX_THEME_PREFIX_LENGTH = 16
export const MAX_THEME_ID_LENGTH = 64