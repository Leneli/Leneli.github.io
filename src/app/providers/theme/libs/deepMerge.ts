import type { DeepPartial } from '@/shared/types'

type PlainObject = Record<string, unknown>

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  )
}

function cloneValue<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(cloneValue) as T
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        cloneValue(nestedValue),
      ]),
    ) as T
  }

  return value
}

function mergeInto(
  target: PlainObject,
  source: PlainObject,
): void {
  for (const [key, sourceValue] of Object.entries(source)) {
    /**
     * undefined означает:
     * «значение не переопределено».
     */
    if (sourceValue === undefined) {
      continue
    }

    const targetValue = target[key]

    if (
      isPlainObject(targetValue) &&
      isPlainObject(sourceValue)
    ) {
      mergeInto(targetValue, sourceValue)
      continue
    }

    /**
     * Массивы и примитивы заменяются целиком.
     * Значение source тоже клонируется, чтобы результат
     * не разделял вложенные ссылки с overrides.
     */
    target[key] = cloneValue(sourceValue)
  }
}

export function deepMerge<T = object>(
  baseObject: T,
  overrides?: DeepPartial<T>,
): T {
  const result = cloneValue(baseObject)

  if (!overrides)
    return result

  mergeInto(
    result as PlainObject,
    overrides as PlainObject,
  )

  return result
}
