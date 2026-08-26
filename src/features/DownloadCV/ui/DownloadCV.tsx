import { DownloadIcon } from '@radix-ui/react-icons'

import { Button } from '@/shared/ui'

export function DownloadCV() {
  return (
    <Button
      as='a'
      href='/Elena-Kuklina-CV.pdf'
      variant='secondary'
      download
    >
      <DownloadIcon aria-hidden='true' />
      Download CV
    </Button>
  )
}
