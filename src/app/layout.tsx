import { Inter } from 'next/font/google'
import './msw-init'
import TopBar from '@/ui/top-bar/top-bar'
// import { UserProvider } from '@auth0/nextjs-auth0/client'
import React from 'react'
import { Analytics } from '@vercel/analytics/react'
// import { getClient } from '@/lib/client'
// import { MeDocument } from '@/gql/documents.generated'
// import { User } from '@/gql/types.generated'
// import { redirect } from 'next/navigation'
import './global-layout.css'
import './design-tokens.css'
import './utilities.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use a mock user or null for bettingUser
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
        <div id="layout">
          <div id="layout">{children}</div>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
