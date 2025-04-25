import { Geist, Geist_Mono, Unbounded } from 'next/font/google'
import localFont from 'next/font/local'

const meila = localFont({
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

export { geistMono, geistSans, meila, unbounded }
