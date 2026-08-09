export const toFirstLetterUpperCase = (value: string | undefined | null): string => {
  if (!value || typeof value !== 'string') {
    return ''
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}