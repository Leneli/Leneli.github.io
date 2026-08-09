import { useCallback, useState } from 'react'

import type { CssVariableName, CssVariableValue } from '../core/types'
import styles from './ThemePage.module.scss'

type ThemeVariableCardProps = {
  name: CssVariableName
  value: CssVariableValue
}

const TOKEN_KINDS = [
  'color',
  'typography',
  'spacing',
  'radius',
  'border',
  'shadow',
  'motion',
  'layout',
] as const

type TokenKind = typeof TOKEN_KINDS[number] | 'other'
type CopyState = 'idle' | 'copied' | 'failed'

const TOKEN_KIND_LABELS: Record<TokenKind, string> = {
  color: 'Color',
  typography: 'Type',
  spacing: 'Spacing',
  radius: 'Radius',
  border: 'Border',
  shadow: 'Shadow',
  motion: 'Motion',
  layout: 'Layout',
  other: 'Token',
}

const TOKEN_PREVIEW_LABELS: Record<TokenKind, string> = {
  color: '',
  typography: 'Aa',
  spacing: '',
  radius: '',
  border: '',
  shadow: '',
  motion: '↗',
  layout: '',
  other: '•',
}

function getTokenKind(name: CssVariableName): TokenKind {
  return TOKEN_KINDS.find((kind) => name.includes(`-${kind}-`)) ?? 'other'
}

export function ThemeVariableCard({ name, value }: ThemeVariableCardProps) {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const tokenKind = getTokenKind(name)
  const setCardElement = useCallback((element: HTMLElement | null) => {
    element?.style.setProperty('--token-value', String(value))
  }, [value])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(name)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
  }

  return (
    <article
      ref={setCardElement}
      className={styles['theme-variable-card']}
      data-kind={tokenKind}
    >
      <header className={styles['card-header']}>
        <code title={name}>{name}</code>
        <button
          type='button'
          data-copy-state={copyState}
          aria-label={`Copy ${name}`}
          aria-live='polite'
          onClick={() => void handleCopy()}
        >
          {copyState === 'copied' && 'Copied'}
          {copyState === 'failed' && 'Try again'}
          {copyState === 'idle' && 'Copy'}
        </button>
      </header>

      <div className={styles['token-preview']}>
        <span className={styles['token-visual']} aria-hidden='true'>
          {TOKEN_PREVIEW_LABELS[tokenKind]}
        </span>

        <div className={styles['token-details']}>
          <span>{TOKEN_KIND_LABELS[tokenKind]}</span>
          <code title={String(value)}>{String(value)}</code>
        </div>
      </div>
    </article>
  )
}
