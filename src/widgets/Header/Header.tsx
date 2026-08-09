import type { FC } from 'react'

import { Logo } from '@/shared/ui'

export const Header: FC = () => {
  return (
    <div>
      <Logo />

      <span>About</span>
      <span>Skills</span>
      <span>Portfolio</span>
      <span>Contacts</span>

      <span>Resume</span>

      <span>Theme</span>
      <span>Lang</span>

      <span>Mobile menu</span>
    </div>
  )
}
