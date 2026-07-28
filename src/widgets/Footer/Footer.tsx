import type { FC } from 'react'

import { Logo } from '@/widgets/Logo'

export const Footer: FC = () => {
  return (
    <div>
      <Logo width={100} height={100} />
      <p>FOOTER!!!</p>
    </div>
  )
}
