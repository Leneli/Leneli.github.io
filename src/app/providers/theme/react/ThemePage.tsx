import { useMemo } from 'react'

import { THEME_BREAKPOINTS } from '../core/constants'
import { createThemeVariables } from '../core/create-theme-variables'
import type {
  CssVariableName,
  CssVariables,
  CssVariableValue,
  ThemeBreakpoint,
} from '../core/types'
import { ThemeVariableCard } from './ThemeVariableCard'
import styles from './ThemePage.module.scss'
import { useTheme } from './use-theme'

type VariableEntry = [CssVariableName, CssVariableValue]

type VariablesSectionProps = {
  description: string
  id: string
  kicker: string
  scheme: 'light' | 'dark'
  title: string
  variables: VariableEntry[]
}

const BREAKPOINT_LABELS: Record<ThemeBreakpoint, string> = {
  sm: 'Small screens',
  md: 'Medium screens',
  lg: 'Large screens',
  xl: 'Extra large screens',
}

function getVariableEntries(variables: CssVariables): VariableEntry[] {
  return Object.entries(variables) as VariableEntry[]
}

function VariablesSection({
  description,
  id,
  kicker,
  scheme,
  title,
  variables,
}: VariablesSectionProps) {
  const colorVariablesCount = variables.filter(([name]) => (
    name.includes('-color-')
  )).length

  return (
    <section
      className={styles['variables-section']}
      data-scheme={scheme}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <header className={styles['section-header']}>
        <div>
          <p className={styles['section-kicker']}>{kicker}</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>

        <p>
          {description}{' '}
          {colorVariablesCount} color tokens and{' '}
          {variables.length - colorVariablesCount} foundation tokens.
        </p>
      </header>

      <div className={styles['variables-grid']}>
        {variables.map(([name, value]) => (
          <ThemeVariableCard key={name} name={name} value={value} />
        ))}
      </div>
    </section>
  )
}

export function ThemePage() {
  const { theme } = useTheme()

  const cssVariables = useMemo(() => createThemeVariables(theme), [theme])
  const lightVariables = getVariableEntries(cssVariables.light)
  const darkVariables = getVariableEntries(cssVariables.dark)
  const responsiveGroups = (
    Object.entries(THEME_BREAKPOINTS) as Array<[ThemeBreakpoint, string]>
  ).flatMap(([breakpoint, minWidth]) => {
    const variables = cssVariables.responsive[breakpoint]

    if (!variables) return []

    const entries = getVariableEntries(variables)

    if (entries.length === 0) return []

    return [{ breakpoint, entries, minWidth }]
  })
  const responsiveVariablesCount = responsiveGroups.reduce(
    (total, group) => total + group.entries.length,
    0,
  )
  const variablesCount = (
    lightVariables.length
    + darkVariables.length
    + responsiveVariablesCount
  )

  return (
    <div className={styles['theme-page']}>
      <header className={styles['hero']}>
        <div className={styles['hero-copy']}>
          <p className={styles['eyebrow']}>
            <span aria-hidden='true' />
            Token laboratory
          </p>

          <h1>Theme playground</h1>
          <p className={styles['hero-description']}>
            A live reference for the colors, typography and foundations that
            shape the interface.
          </p>
        </div>

        <dl className={styles['theme-summary']} aria-label='Theme summary'>
          <div>
            <dt>Theme</dt>
            <dd>{theme.label ?? theme.id}</dd>
          </div>
          <div>
            <dt>Variables</dt>
            <dd>{variablesCount}</dd>
          </div>
          <div>
            <dt>Breakpoints</dt>
            <dd>{responsiveGroups.length}</dd>
          </div>
          <div>
            <dt>Prefix</dt>
            <dd>
              <code>--{theme.prefix.replace(/^--/, '')}</code>
            </dd>
          </div>
        </dl>
      </header>

      <div className={styles['catalog']}>
        <nav className={styles['catalog-nav']} aria-label='Variable sections'>
          <a href='#light-variables'>
            Light
            <span>{lightVariables.length}</span>
          </a>
          <a href='#dark-variables'>
            Dark
            <span>{darkVariables.length}</span>
          </a>
          <a href='#responsive-variables'>
            Responsive
            <span>{responsiveVariablesCount}</span>
          </a>
        </nav>

        <VariablesSection
          description='The default values used in the light color scheme.'
          id='light-variables'
          kicker='Light palette'
          scheme='light'
          title='Light CSS variables'
          variables={lightVariables}
        />

        <VariablesSection
          description='Alternative values applied when the dark color scheme is active.'
          id='dark-variables'
          kicker='Dark palette'
          scheme='dark'
          title='Dark CSS variables'
          variables={darkVariables}
        />

        <section
          className={styles['variables-section']}
          data-scheme='responsive'
          id='responsive-variables'
          aria-labelledby='responsive-variables-title'
        >
          <header className={styles['section-header']}>
            <div>
              <p className={styles['section-kicker']}>Adaptive scale</p>
              <h2 id='responsive-variables-title'>Responsive variables</h2>
            </div>

            <p>
              {responsiveVariablesCount} overrides across{' '}
              {responsiveGroups.length} breakpoints. Each value becomes active
              from its specified minimum width.
            </p>
          </header>

          <div className={styles['breakpoints-list']}>
            {responsiveGroups.map(({ breakpoint, entries, minWidth }) => (
              <section
                className={styles['breakpoint-group']}
                key={breakpoint}
                aria-labelledby={`${breakpoint}-breakpoint-title`}
              >
                <header className={styles['breakpoint-header']}>
                  <span className={styles['breakpoint-badge']}>
                    {breakpoint}
                  </span>

                  <div>
                    <h3 id={`${breakpoint}-breakpoint-title`}>
                      {BREAKPOINT_LABELS[breakpoint]}
                    </h3>
                    <p>
                      <code>min-width: {minWidth}</code>
                      <span aria-hidden='true'>·</span>
                      {entries.length} overrides
                    </p>
                  </div>
                </header>

                <div className={styles['variables-grid']}>
                  {entries.map(([name, value]) => (
                    <ThemeVariableCard
                      key={`${breakpoint}-${name}`}
                      name={name}
                      value={value}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
