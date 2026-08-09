import { flattenObject, type FlattenedObject } from '../libs/flattenObject'
import type { CssVariableName, CssVariables, Theme, ThemeVariables } from './types'

export function createThemeVariables(theme: Theme) {
  const lightVariables = createVariablesBlock(flattenObject(theme.schemes.light), theme.prefix)
  const darkVariables = createVariablesBlock(flattenObject(theme.schemes.dark), theme.prefix)
  const responsiveVariables: ThemeVariables['responsive'] = Object.fromEntries(
    Object.entries(theme.responsive).map(([breakpoint, value]) => {
      if (value) return [breakpoint, createVariablesBlock(flattenObject(value), theme.prefix)]
      return []
    })
  )

  return {
    light: lightVariables,
    dark: darkVariables,
    responsive: responsiveVariables,
  }
}

function createVariablesBlock(valuesObject: FlattenedObject, prefix: string): CssVariables {
  const cssPrefix: CssVariableName = prefix.startsWith('--') ? prefix as CssVariableName : `--${prefix}`
  const variables: CssVariables = {}

  Object.entries(valuesObject)
    .forEach(([name, value]) => {
      variables[`${cssPrefix}-${name}`] = String(value)
    })

  return variables
}