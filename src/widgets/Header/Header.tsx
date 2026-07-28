import type { FC } from 'react'

import { Logo } from '@/widgets/Logo'

export const Header: FC = () => {
  return (
    <div>
      <Logo width={124} height={124} />
      <span>LOGO</span>

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
