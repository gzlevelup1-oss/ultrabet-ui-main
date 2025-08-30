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
  const [login, setLogin] = useState({ username: '', password: '' });
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, width: '100%' }}>
      {/* Top row: login/register */}
      <div style={{ background: '#184e25', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: 38, padding: '0 2rem', borderBottom: '1px solid #1e7e34' }}>
        <form style={{ display: 'flex', alignItems: 'center', gap: 8 }} onSubmit={e => e.preventDefault()}>
          <input

            placeholder="Username"
            value={login.username}
            onChange={e => setLogin(l => ({ ...l, username: e.target.value }))}
            style={{ padding: '0.3em 0.8em', borderRadius: 6, border: '1px solid #ccc', fontSize: 14, outline: 'none', marginRight: 4 }}
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={e => setLogin(l => ({ ...l, password: e.target.value }))}
            style={{ padding: '0.3em 0.8em', borderRadius: 6, border: '1px solid #ccc', fontSize: 14, outline: 'none', marginRight: 4 }}
          />
          <button type="submit" style={{ background: '#ffc107', color: '#1e7e34', border: 'none', borderRadius: 6, padding: '0.3em 1.2em', fontWeight: 700, fontSize: 14, cursor: 'pointer', marginRight: 8 }}>Login</button>
        </form>
        <Link href="/register" style={{ color: '#ffc107', fontWeight: 600, textDecoration: 'none', marginRight: 12, marginLeft: 8 }}>Register</Link>
        <Link href="/forgot-password" style={{ color: '#fff', fontWeight: 400, textDecoration: 'underline', marginRight: 8 }}>Forgot?</Link>
      </div>
      {/* Bottom row: logo and nav */}
      <nav className={styles.container} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#1e7e34',
        color: '#fff',
        height: 64,
        padding: '0 2rem',
        boxShadow: '0 2px 8px rgba(30,126,52,0.08)'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image src="/ultrabet-logo.svg" alt="Ultrabet Logo" width={40} height={40} style={{ display: 'block' }} />
          <span style={{ fontWeight: 700, fontSize: 24, color: '#ffc107', letterSpacing: 1 }}>Ultrabet</span>
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <PageNav />
        </div>
      </nav>
    </div>
  )
}

