'use client'

import { renderToStaticMarkup } from 'react-dom/server'

import BackgroundPattern from './bg-pattern'

export default function TileableBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-45"
      style={styles}
      aria-hidden="true"
    />
  )
}

const styles: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(<BackgroundPattern />)
  )}")`,
  backgroundRepeat: 'repeat',
  backgroundSize: '250px 150px'
}
