import { MAX_THEME_PREFIX_LENGTH, THEME_PREFIX_PATTERN } from '../core/constants'

export function validateThemePrefix(prefix: string): void {
  if (prefix.length > MAX_THEME_PREFIX_LENGTH) {
    throw new Error(
      `Theme prefix must not exceed ${MAX_THEME_PREFIX_LENGTH} characters`,
    )
  }

  if (!THEME_PREFIX_PATTERN.test(prefix)) {
    throw new Error(
      'Theme prefix must start with a lowercase letter and contain only lowercase letters, numbers, and hyphens',
    )
  }
}