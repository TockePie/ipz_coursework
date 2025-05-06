'use client'

import React, { FC } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import clsx from 'clsx'

import BackgroundPattern from './bg-pattern'

const TileableBackground: FC<{ className?: string }> = ({ className }) => {
  const styles = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      renderToStaticMarkup(<BackgroundPattern />)
    )}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '250px 150px'
  }

  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-0 z-[1] opacity-45',
        className
      )}
      style={styles}
      aria-hidden="true"
    />
  )
}

export default TileableBackground
