import type { FC } from 'react'

import type { ILogo } from './ILogo'

export const Logo: FC<ILogo> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' {...props}>
    <defs>
      <radialGradient id='b'>
        <stop
          offset='0%'
          style={{
            stopColor: '#f44',
            stopOpacity: 1,
          }}
        />
        <stop
          offset='100%'
          style={{
            stopColor: '#dc143c',
            stopOpacity: 1,
          }}
        />
      </radialGradient>
      <radialGradient id='c'>
        <stop
          offset='0%'
          style={{
            stopColor: '#ffed4e',
            stopOpacity: 1,
          }}
        />
        <stop
          offset='100%'
          style={{
            stopColor: 'gold',
            stopOpacity: 1,
          }}
        />
      </radialGradient>
      <linearGradient id='a' x1='0%' x2='100%' y1='0%' y2='100%'>
        <stop
          offset='0%'
          style={{
            stopColor: 'transparent',
            stopOpacity: 0,
          }}
        />
        <stop
          offset='100%'
          style={{
            stopColor: 'transparent',
            stopOpacity: 0,
          }}
        />
      </linearGradient>
    </defs>
    <rect width={64} height={64} fill='url(#a)' rx={10} />
    <g transform='translate(22 38)'>
      <circle cy={-18} r={3.5} fill='url(#b)' />
      <circle cx={12.7} cy={-12.7} r={3.5} fill='url(#b)' />
      <circle cx={18} r={3.5} fill='url(#b)' />
      <circle cx={12.7} cy={12.7} r={3.5} fill='url(#b)' />
      <circle cy={18} r={3.5} fill='url(#b)' />
      <circle cx={-12.7} cy={12.7} r={3.5} fill='url(#b)' />
      <circle cx={-18} r={3.5} fill='url(#b)' />
      <circle cx={-12.7} cy={-12.7} r={3.5} fill='url(#b)' />
      <circle r={14} fill='url(#b)' stroke='#a00' />
      <circle r={6} fill='#1a1a1a' opacity={0.7} />
      <circle r={3} fill='url(#b)' />
    </g>
    <g transform='translate(44 24)'>
      <circle cy={-14} r={2.8} fill='url(#c)' />
      <circle cx={9.9} cy={-9.9} r={2.8} fill='url(#c)' />
      <circle cx={14} r={2.8} fill='url(#c)' />
      <circle cx={9.9} cy={9.9} r={2.8} fill='url(#c)' />
      <circle cy={14} r={2.8} fill='url(#c)' />
      <circle cx={-9.9} cy={9.9} r={2.8} fill='url(#c)' />
      <circle cx={-14} r={2.8} fill='url(#c)' />
      <circle cx={-9.9} cy={-9.9} r={2.8} fill='url(#c)' />
      <circle r={11} fill='url(#c)' stroke='#ca0' />
      <circle r={5} fill='#1a1a1a' opacity={0.6} />
      <circle r={2.5} fill='url(#c)' />
    </g>
    <circle cx={12} cy={15} r={1.5} fill='gold' opacity={0.8} />
    <circle cx={52} cy={48} r={1.2} fill='#dc143c' opacity={0.7} />
    <circle cx={18} cy={52} r={1} fill='gold' opacity={1} />
  </svg>
  )
}
