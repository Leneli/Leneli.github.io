import { THEME_BREAKPOINTS } from './constants'
import { createThemeVariables } from './create-theme-variables'
import type { CssVariables, Theme, ThemeBreakpoint, ThemeVariables } from './types'

export function createThemeCss(theme: Theme): string {
  const variables = createThemeVariables(theme)

  const blocks: string[] = [
    createRootBlock(variables.light),
    createDarkModeBlock(variables.dark),
    createSystemDarkModeBlock(variables.dark),
    ...createResponsiveBlocks(variables.responsive),
  ]

  return blocks
    .filter(Boolean)
    .join('\n\n')
}

function serializeVariables(
  variables: CssVariables,
  indent = '  ',
): string {
  return Object.entries(variables)
    .map(([name, value]) => {
      return `${indent}${name}: ${String(value)};`
    })
    .join('\n')
}

function createRootBlock(
  variables: CssVariables,
): string {
  return `:root {
    color-scheme: light;
    ${serializeVariables(variables)}
  }`
}

function createDarkModeBlock(
  variables: CssVariables,
): string {
  return `:root[data-color-mode='dark'] {
    color-scheme: dark;
    ${serializeVariables(variables)}
  }`
}

function createSystemDarkModeBlock(
  variables: CssVariables,
): string {
  return `@media (prefers-color-scheme: dark) {
    :root:not([data-color-mode]) {
      color-scheme: dark;
      ${serializeVariables(variables, '    ')}
    }
  }`
}

function createResponsiveBlocks(
  responsive: ThemeVariables['responsive'],
): string[] {
  return Object.entries(responsive).flatMap(
    ([breakpoint, variables]) => {
      if (
        !variables ||
        Object.keys(variables).length === 0
      ) {
        return []
      }

      const minWidth = THEME_BREAKPOINTS[breakpoint as ThemeBreakpoint]

      return [
        `@media (min-width: ${minWidth}) {
            :root {
              ${serializeVariables(variables, '    ')}
            }
          }`,
      ]
    },
  )
}