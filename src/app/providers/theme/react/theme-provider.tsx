import { useInsertionEffect, useLayoutEffect, useMemo } from 'react'

import type { ResolvedThemeMode, ThemeContextValue, ThemeProviderProps } from '../core/types'
import { ThemeContext } from './theme-context'
import { config } from '../config'
import { createThemeCss } from '../core/create-theme-css'
import { createThemeStyleElement } from '../core/create-theme-style-element'
import { applyThemeMode } from '../core/apply-theme-mode'

export function ThemeProvider({
  children,
  theme,
  mode = config.defaultMode,
  nonce,
  onModeChange,
}: ThemeProviderProps) {
  const value = useMemo<ThemeContextValue>(() => ({
    themeName: theme.id,
    theme,
    mode,
    resolvedMode: 'light' as ResolvedThemeMode,
    setMode: onModeChange ?? (() => {}),
    toggleMode: () => {
      const newMode = mode === 'light' ? 'dark' : 'light'
      onModeChange?.(newMode)
    }
  }), [mode, onModeChange, theme])

  const css = useMemo(
    () => createThemeCss(theme),
    [theme],
  )

  useInsertionEffect(() => {
    const styleElement = createThemeStyleElement(
      theme,
      css,
    )

    if (nonce) {
      styleElement.nonce = nonce
    }

    document.head.append(styleElement)

    return () => {
      styleElement.remove()
    }
  }, [css, theme.id])

  useLayoutEffect(() => {
    applyThemeMode(mode)
  }, [mode])

  return (
    <ThemeContext value={value}>
      {children}
    </ThemeContext>
  )
}