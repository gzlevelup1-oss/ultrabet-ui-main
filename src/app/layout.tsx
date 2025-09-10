import { Inter } from 'next/font/google'
import './msw-init'
import TopBar from '@/ui/top-bar/top-bar'
import Footer from '@/components/footer/footer'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import './global-layout.css'
import './design-tokens.css'
import './utilities.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const me = null;
  return (
    <html lang="en">
      <head>
        <title>Parabolic Bet</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/base-min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
          integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"
        />
      </head>

      <body className={inter.className}>
        <TopBar bettingUser={me} />
        <div id="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f8f9fa' }}>
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
