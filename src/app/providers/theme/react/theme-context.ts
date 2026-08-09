import { createContext } from 'react'

import type { ThemeContextValue } from '../core/types'

export const ThemeContext = createContext<ThemeContextValue | null>(null)