import { toKebabCase } from '../libs/toKebabCase'
import { deepMerge } from '../libs/deepMerge'
import { DARK_SCHEMA, LIGHT_SCHEMA, RESPONSIVE_SCHEME } from './default-schemas'
import { validateThemeId } from '../libs/validateThemeId'
import { validateThemePrefix } from '../libs/validateThemePrefix'
import type { Theme, ThemeConfig, ThemeResponsiveConfig, ThemeSchema } from './types'

/**
 * Нормализация конфигурации темы
 *
 * @param config [ThemeConfig]
 * @returns [Theme]
 */

export function createTheme(config: ThemeConfig): Theme {
  validateThemeId(config.id)

  const prefix = config.prefix ?? toKebabCase(config.id)

  validateThemePrefix(prefix)

  const light = deepMerge<ThemeSchema>(LIGHT_SCHEMA, config.schemes?.light)
  const dark = deepMerge<ThemeSchema>(DARK_SCHEMA, config.schemes?.dark)
  const responsive = deepMerge<ThemeResponsiveConfig>(RESPONSIVE_SCHEME, config.responsive)

  const theme: Theme = {
    id: config.id,
    label: config.label,
    prefix,
    schemes: {
      light,
      dark,
    },
    responsive,
  }

  return theme
}
