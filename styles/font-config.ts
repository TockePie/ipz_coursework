import { Geist, Geist_Mono, Unbounded } from 'next/font/google'
import localFont from 'next/font/local'

export const meila = localFont({
  src: [
    {
      path: './fonts/MeilaDEMO-LineBold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/MeilaDEMO-LineLight.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/MeilaDEMO-LineRegular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/MeilaDEMO-Solid.woff',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-meila'
})

export const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin', 'cyrillic']
})

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})
