import React, { ReactNode } from 'react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Unbounded } from 'next/font/google'
import localFont from 'next/font/local'

import Navbar from './components/Navbar'
import Providers from './providers'

import './globals.css'

const meila = localFont({
  src: [
    {
      path: '../styles/fonts/MeilaDEMO-LineBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../styles/fonts/MeilaDEMO-LineLight.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../styles/fonts/MeilaDEMO-LineRegular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../styles/fonts/MeilaDEMO-Solid.woff',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-meila'
})

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin', 'cyrillic']
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          meila.variable,
          unbounded.variable,
          'antialiased'
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
