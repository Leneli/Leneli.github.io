import { MAX_THEME_ID_LENGTH, THEME_ID_PATTERN } from '../core/constants'

export function validateThemeId(id: string): void {
  if (id.length > MAX_THEME_ID_LENGTH) {
    throw new Error(
      `Theme id must not exceed ${MAX_THEME_ID_LENGTH} characters`,
    )
  }

  if (!THEME_ID_PATTERN.test(id)) {
    throw new Error(
      'Theme id must start with a lowercase letter and contain only lowercase letters, numbers, and hyphens',
    )
  }
}