import { Link } from 'react-router'

import { ArrowTopRightIcon, TokensIcon } from '@radix-ui/react-icons'

import { ROUTE_PATHS } from '@/shared/routes'

import styles from './DevPage.module.scss'

const DEV_PAGES = [
  {
    description: 'Explore the active color, typography and layout tokens.',
    eyebrow: 'Design system',
    icon: TokensIcon,
    title: 'Theme',
    to: ROUTE_PATHS.DEV_THEME,
  },
] as const

export function DevPage() {
  return (
    <div className={styles['dev-page']}>
      <header className={styles['hero']}>
        <p className={styles['eyebrow']}>
          <span aria-hidden='true' />
          Developer space
        </p>

        <h1>
          Dev
          <span> playground.</span>
        </h1>

        <p className={styles['hero-description']}>
          A small collection of internal tools, visual references and
          experiments used while building this site.
        </p>
      </header>

      <section className={styles['directory']} aria-labelledby='dev-pages-title'>
        <header className={styles['directory-header']}>
          <div>
            <p>01 / Directory</p>
            <h2 id='dev-pages-title'>Explore the playground</h2>
          </div>

          <span>
            {DEV_PAGES.length} {DEV_PAGES.length === 1 ? 'page' : 'pages'}
          </span>
        </header>

        <ul className={styles['page-list']}>
          {DEV_PAGES.map(({ description, eyebrow, icon: Icon, title, to }) => (
            <li key={to}>
              <Link className={styles['page-card']} to={to}>
                <span className={styles['card-icon']} aria-hidden='true'>
                  <Icon />
                </span>

                <span className={styles['card-copy']}>
                  <span className={styles['card-eyebrow']}>{eyebrow}</span>
                  <span className={styles['card-title']}>{title}</span>
                  <span className={styles['card-description']}>
                    {description}
                  </span>
                </span>

                <span className={styles['card-action']}>
                  <span>Open page</span>
                  <ArrowTopRightIcon aria-hidden='true' />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
