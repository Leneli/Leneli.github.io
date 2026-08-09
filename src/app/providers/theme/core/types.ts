import type { PropsWithChildren } from 'react'

import type { DeepPartial } from '@/shared/types'

export interface ThemeConfig {
  id: string

  label?: string

  /**
   * Префикс CSS-переменных.
   * По умолчанию берётся короткая форма name.
   */
  prefix?: string

  schemes?: {
    light?: DeepPartial<ThemeSchema>
    dark?: DeepPartial<ThemeSchema>
  }

  responsive?: DeepPartial<ThemeResponsiveConfig>
}

export interface Theme {
  readonly id: string
  readonly label?: string
  readonly prefix: string
  readonly schemes: {
    light: ThemeSchema
    dark: ThemeSchema
  }
  readonly responsive: ThemeResponsiveConfig
}

export type ThemeProviderProps = PropsWithChildren<{
  theme: Theme

  mode?: ThemeMode

  onModeChange?: (mode: ThemeMode) => void

  /**
   * Для Content Security Policy.
   */
  nonce?: string
}>

export interface ThemeContextValue {
  themeName: string
  theme: Theme

  /**
   * Выбор пользователя: light, dark или system.
   */
  mode: ThemeMode

  /**
   * Фактически отображаемая схема.
   */
  resolvedMode: ResolvedThemeMode

  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedThemeMode = Exclude<ThemeMode, 'system'>
export type BreakpointName = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Colors and Tokens
 */
export interface ThemeColors {
  canvas: string

  surface: {
    default: string
    muted: string
    raised: string
    hover: string
  }

  text: {
    primary: string
    secondary: string
    inverse: string
  }

  border: {
    default: string
    strong: string
  }

  brand: {
    default: string
    hover: string
    contrast: string
  }

  status: {
    info: string
    success: string
    warning: string
    danger: string
  }

  focus: string
  overlay: string
}

export interface TypographyTokens {
  family: {
    body: string
    heading: string
    mono: string
  }

  size: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    display: string
  }

  weight: {
    regular: number
    medium: number
    semibold: number
    bold: number
  }

  lineHeight: {
    tight: number | string
    normal: number | string
    relaxed: number | string
  }
}

export interface SpacingTokens {
  '2xs': string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export interface RadiusTokens {
  sm: string
  md: string
  lg: string
  full: string
}

export interface BorderTokens {
  thin: string
  strong: string
}

export interface ShadowTokens {
  sm: string
  md: string
  lg: string
}

export interface MotionTokens {
  duration: {
    fast: string
    normal: string
    slow: string
  }

  easing: {
    standard: string
    emphasized: string
  }
}

export interface LayoutTokens {
  contentMaxWidth: string
  pagePaddingInline: string
  pagePaddingBlock: string
  sectionGap: string
}

/**
 * Schema
 */
export interface ThemeSchema {
  color: ThemeColors
  typography: TypographyTokens
  spacing: SpacingTokens
  radius: RadiusTokens
  border: BorderTokens
  shadow: ShadowTokens
  motion: MotionTokens
  layout: LayoutTokens
}

/**
 * Adaptive
 */
export type ThemeBreakpoint = 'sm' | 'md' | 'lg' | 'xl'

export interface AdaptiveThemeOverrides {
  typography?: {
    size?: Partial<TypographyTokens['size']>
  }

  layout?: Partial<LayoutTokens>

  spacing?: Partial<SpacingTokens>
}

export type ThemeResponsiveConfig = Partial<Record<ThemeBreakpoint, AdaptiveThemeOverrides>>

/**
 * CSS
 */
export type CssVariableName = `--${string}`
export type CssVariableValue = string | number

export type CssVariables = Record<CssVariableName, CssVariableValue>

export interface ThemeVariables {
  light: CssVariables
  dark: CssVariables
  responsive: Partial<Record<ThemeBreakpoint, CssVariables>>
}