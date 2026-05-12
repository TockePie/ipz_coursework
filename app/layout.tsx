import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'

import { geistMono, geistSans, meila, unbounded } from '@/styles/font-config'

import Providers from './providers'

import './globals.css'

export const metadata: Metadata = {
  title: 'Bunnfee',
  description: 'Restaurant for everyone'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
}
