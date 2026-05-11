import React from 'react'
import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'

import { geistMono, geistSans, meila, unbounded } from '@/styles/font-config'

import Providers from './providers'

import './globals.css'

const metadata: Metadata = {
  title: 'Bunnfee',
  description: 'Restaurant for everyone'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cx(
        geistSans.variable,
        geistMono.variable,
        meila.variable,
        unbounded.variable,
        'antialiased'
      )}
    >
      <Providers>{children}</Providers>
    </body>
  </html>
)

export { metadata }
export default RootLayout
