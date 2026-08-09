export function toKebabCase(name: string): string {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/([a-z\d])([A-Z])/g, '-$1')
    .toLowerCase()
}