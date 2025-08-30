'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './top-bar.module.css'
import Image from 'next/image'
import { User } from '@/gql/types.generated'
import { PageNav } from '@/ui/page-nav'


export type Props = {
  bettingUser: User | null
}

function TopBar({ bettingUser }: Props) {


  // const { user, isLoading } = useUser()
  const [userMenuVisible, setUserMenuVisible] = useState(false)
  const [toggleHorizontalTimeout, setToggleHorizontalTimeout] = useState<NodeJS.Timeout | null>(
    null
  )
  const menuRef = useRef<HTMLDivElement>(null) // Specify the type for the ref
  const toggleRef = useRef<HTMLAnchorElement>(null) // Specify the type for the ref

  const handleUserMenuClick = () => {
    setUserMenuVisible(!userMenuVisible)
  }

  const toggleMenu = useCallback(() => {
    const toggleHorizontal = () => {
      if (!menuRef.current) return
      menuRef.current.classList.remove('closing')
      Array.from(menuRef.current.querySelectorAll('.custom-can-transform')).forEach((el) => {
        el.classList.toggle('pure-menu-horizontal')
      })
    }
    console.log('toggleMenu()')
    if (!menuRef.current || !toggleRef.current) return
    if (menuRef.current.classList.contains(styles.open)) {
      menuRef.current.classList.add('closing')
      setToggleHorizontalTimeout(setTimeout(toggleHorizontal, 500))
    } else {
      if (menuRef.current.classList.contains('closing')) {
        if (toggleHorizontalTimeout) clearTimeout(toggleHorizontalTimeout)
      } else {
        toggleHorizontal()
      }
    }
    menuRef.current.classList.toggle(styles.open)
    toggleRef.current.classList.toggle(styles.x)
  }, [toggleHorizontalTimeout])

  useEffect(() => {
    const closeMenu = () => {
      if (menuRef.current && menuRef.current.classList.contains(styles.open)) {
        toggleMenu()
      }
    }
    const windowChangeEvent = 'onorientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(windowChangeEvent, closeMenu)
    return () => {
      window.removeEventListener(windowChangeEvent, closeMenu)
    }
  }, [toggleHorizontalTimeout, toggleMenu])

  return (
    <nav ref={menuRef} className={styles.container} id="topmenu" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#1e7e34',
      color: '#fff',
      height: '64px',
      padding: '0 2rem',
      boxShadow: '0 2px 8px rgba(30,126,52,0.08)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100
    }}>
      {/* Logo on the left */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <Image src="/ultrabet-logo.svg" alt="Ultrabet Logo" width={40} height={40} style={{ display: 'block' }} />
        <span style={{ fontWeight: 700, fontSize: 24, color: '#ffc107', letterSpacing: 1 }}>Ultrabet</span>
      </Link>
      {/* Center navigation */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <PageNav />
      </div>
      {/* Sign in options on the right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {bettingUser ? (
          <>
            <span style={{ fontWeight: 500, color: '#ffc107', marginRight: 16 }}>{bettingUser.username || bettingUser.email || 'User'}</span>
            <span style={{ background: '#ffc107', color: '#1e7e34', borderRadius: 16, padding: '0.3em 1em', fontWeight: 600, marginRight: 8 }}>
              €{bettingUser?.wallet?.balance ?? 0}
            </span>
            <button style={{ background: 'transparent', color: '#fff', border: '1px solid #ffc107', borderRadius: 8, padding: '0.4em 1.2em', fontWeight: 600, cursor: 'pointer' }}>Sign Out</button>
          </>
        ) : (
          <>
            <Link href="/login" style={{ color: '#ffc107', fontWeight: 600, textDecoration: 'none', marginRight: 8 }}>Sign In</Link>
            <Link href="/register" style={{ background: '#ffc107', color: '#1e7e34', borderRadius: 16, padding: '0.4em 1.2em', fontWeight: 600, textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default TopBar;
