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
    <li className="pure-menu-item">
      <Link
        className={classnames(styles.navLink, className, isActive && styles.navLinkActive)}
        href={slug}
      >
        {label}
      </Link>
    </li>
  )
}

export function MarketNav({ prefix }: { prefix: string }) {
  const selectionResolver: SelectionResolver = (slug, path) => {
    const pathHasMarket = path.split('/').length >= 3
    return path.includes(slug) || (slug.includes('h2h') && !pathHasMarket)
  }

  return (
    <nav className={classnames(styles.marketNav, 'pure-menu pure-menu-horizontal')}>
      <ul className={'pure-menu-list'}>
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/h2h`} label="1x2" />
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/spreads`} label="Spreads" />
        <NavLink selectionResolver={selectionResolver} slug={`${prefix}/totals`} label="Totals" />
      </ul>
    </nav>
  )
}

export function PageNav() {
  const selectionResolver: SelectionResolver = (slug, path) => {
    return slug.replace('/', '') == path.replace('/', '')
  }

  return (
    <ul className="pure-menu-list" style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0 }}>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/'} label="Home" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/league'} label="League" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/aviator'} label="Aviator" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/virtuals'} label="Virtuals" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/games'} label="Games" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/jackpot'} label="Jackpot" /></li>
      <li className="pure-menu-item"><NavLink selectionResolver={selectionResolver} className="pure-menu-link" activeClassName="pure-menu-selected" slug={'/promotions'} label="Promotions" /></li>
    </ul>
  )
}
