'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './top-bar.module.css'
import Image from 'next/image'
import { User } from '@/gql/types.generated'
import { PageNav } from '../page-nav'

export type Props = {
  bettingUser: User | null
}

export default function TopBar({ bettingUser }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [login, setLogin] = useState({ username: '', password: '' })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top utility bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span className={styles.welcomeText}>Welcome to Ultrabet</span>
            <div className={styles.languageSelector}>
              <select className={styles.langSelect}>
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
              </select>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <form className={styles.loginForm} onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Username"
                value={login.username}
                onChange={e => setLogin(l => ({ ...l, username: e.target.value }))}
                className={styles.loginInput}
              />
              <input
                type="password"
                placeholder="Password"
                value={login.password}
                onChange={e => setLogin(l => ({ ...l, password: e.target.value }))}
                className={styles.loginInput}
              />
              <button type="submit" className={styles.loginBtn}>Login</button>
            </form>
            <Link href="/register" className={styles.registerLink}>Register</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/ultrabet-logo.svg" 
              alt="Ultrabet" 
              width={45} 
              height={45} 
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Ultrabet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <PageNav />
          </nav>

          {/* Header Actions */}
          <div className={styles.headerActions}>
            <div className={styles.balanceInfo}>
              <span className={styles.balanceLabel}>Balance:</span>
              <span className={styles.balanceAmount}>ETB 0.00</span>
            </div>
            <button className={styles.depositBtn}>Deposit</button>
            
            {/* Mobile menu toggle */}
            <button 
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <PageNav />
          <div className={styles.mobileActions}>
            <button className={styles.mobileDepositBtn}>Deposit</button>
            <div className={styles.mobileBalance}>
              <span>Balance: ETB 0.00</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}