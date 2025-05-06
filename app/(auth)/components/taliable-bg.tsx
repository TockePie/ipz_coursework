'use client'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import BackgroundPattern from './bg-pattern'

const TileableBackground: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[1] opacity-45 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          renderToStaticMarkup(<BackgroundPattern />)
        )}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '250px 150px'
      }}
      aria-hidden="true"
    />
  )
}

export default TileableBackground
