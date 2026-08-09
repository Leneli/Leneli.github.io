import type { FC } from 'react'

import { Logo } from '@/shared/ui'

export const Footer: FC = () => {
  return (
    <div>
      <Logo compact />
      <p>FOOTER!!!</p>
    </div>
  )
}
