import React, { ReactNode } from 'react'
import clsx from 'clsx'
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
  children: ReactNode
}>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={clsx(
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
