import {
  ArrowRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

import { DownloadCV } from '@/features/DownloadCV'

import { PROFILE_CONFIG } from '@/shared/config'
import { Button } from '@/shared/ui'

import profileImage from '@/assets/images/2b0b927f-1d3c-47ce-a7cf-1a4655977dba.png'

import styles from './HomePage.module.scss'

const SOCIAL_ICONS = {
  email: EnvelopeClosedIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
} as const

const PROFESSIONAL_FACTS = [
  {
    label: 'Commercial experience',
    value: '10+ years',
  },
  {
    label: 'Product expertise',
    value: 'Web & Mobile',
  },
  {
    label: 'Core stack',
    value: 'React · Vue · RN',
  },
] as const

export function HomePage() {
  return (
    <div className={styles['home-page']}>
      <div className={styles['home-content']}>
        <section className={styles['hero']} aria-labelledby='hero-title'>
          <div className={styles['hero-copy']}>
            <p className={styles['availability']}>
              <span aria-hidden='true' />
              Open to meaningful projects
            </p>

            <h1 id='hero-title'>
              Frontend & Mobile
              <span> Developer.</span>
            </h1>

            <p className={styles['positioning']}>
              I create thoughtful digital products that balance clean
              interfaces, reliable engineering and real business needs.
            </p>

            <p className={styles['experience']}>
              <strong>10+</strong>
              <span>years of commercial experience</span>
            </p>

            <div className={styles['actions']}>
              <Button as='a' href='#projects' variant='primary'>
                View projects
                <ArrowRightIcon aria-hidden='true' />
              </Button>

              <DownloadCV />
            </div>

            <nav className={styles['social-links']} aria-label='Social links'>
              {PROFILE_CONFIG.socialLinks.map(({ href, id, label }) => {
                const Icon = SOCIAL_ICONS[id]

                return (
                  <a
                    href={href}
                    key={id}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <Icon aria-hidden='true' />
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>

          <figure className={styles['portrait']}>
            <div className={styles['portrait-frame']}>
              <img
                src={profileImage}
                alt={PROFILE_CONFIG.name}
                width='1122'
                height='1402'
                decoding='async'
                fetchPriority='high'
              />
            </div>

            <figcaption>
              <span aria-hidden='true' />
              {PROFILE_CONFIG.name}
            </figcaption>
          </figure>
        </section>

        <dl className={styles['professional-facts']}>
          {PROFESSIONAL_FACTS.map(({ label, value }, index) => (
            <div key={label}>
              <span aria-hidden='true'>0{index + 1}</span>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
