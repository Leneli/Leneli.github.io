import type { ThemeMode } from './types'

export function applyThemeMode(
  mode: ThemeMode,
): void {
  const root = document.documentElement

  if (mode === 'system') {
    delete root.dataset.colorMode
    return
  }

  root.dataset.colorMode = mode
}