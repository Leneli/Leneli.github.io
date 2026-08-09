import type { Theme } from '../core/types'

export function createThemeStyleElement(
  theme: Theme,
  css: string,
): HTMLStyleElement {
  const element = document.createElement('style')

  element.dataset.theme = theme.id
  element.textContent = css

  return element
}