'use client'

import styles from './page-nav.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classnames from 'classnames'

type SelectionResolver = (slug: string, path: string) => boolean

export function NavLink({
  label,
  slug,
  className,
  activeClassName,
  selectionResolver,
}: {
  label: string
  slug: string
  className?: string
  activeClassName?: string
  selectionResolver?: SelectionResolver
}) {
  const path = usePathname()
  const isActive = selectionResolver?.(slug, path)

  return (
    <Link
      className={classnames(styles.navLink, className, isActive && styles.navLinkActive)}
      href={slug}
    >
      {label}
    </Link>
  )
}

export function MarketNav({ prefix }: { prefix: string }) {
  const selectionResolver: SelectionResolver = (slug, path) => {
    const pathHasMarket = path.split('/').length >= 3
    return path.includes(slug) || (slug.includes('h2h') && !pathHasMarket)
  }

  return (
    <nav className={styles.marketNav}>
      <div className={styles.marketNavList}>
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/h2h`} label="Match Winner" />
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/spreads`} label="Handicap" />
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/totals`} label="Over/Under" />
      </div>
    </nav>
  )
}

export function PageNav() {
  const selectionResolver: SelectionResolver = (slug, path) => {
    return slug.replace('/', '') == path.replace('/', '')
  }

  return (
    <nav className={styles.mainNav}>
      <NavLink selectionResolver={selectionResolver} slug={'/'} label="Sports" />
      <NavLink selectionResolver={selectionResolver} slug={'/live'} label="Live Betting" />
      <NavLink selectionResolver={selectionResolver} slug={'/virtuals'} label="Virtual Sports" />
      <NavLink selectionResolver={selectionResolver} slug={'/casino'} label="Casino" />
      <NavLink selectionResolver={selectionResolver} slug={'/promotions'} label="Promotions" />
      <NavLink selectionResolver={selectionResolver} slug={'/results'} label="Results" />
    </nav>
  )
}