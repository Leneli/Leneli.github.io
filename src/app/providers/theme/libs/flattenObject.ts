export type FlattenedObject = Record<string, unknown>

export function flattenObject(
  baseObject: object,
  keySeparator: string = '-',
): FlattenedObject {
  const result: FlattenedObject = {}

  for (const [key, value] of Object.entries(baseObject)) {
    if (typeof value === 'object' && value !== null) {
      const flatten = flattenObject(value, keySeparator)

      for (const [k, v] of Object.entries(flatten)) {
        result[`${key}${keySeparator}${k}`] = v
      }
    } else {
      result[key] = value
    }
  }

  return result
}