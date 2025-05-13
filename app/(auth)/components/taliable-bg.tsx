'use client'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { cn } from '@/lib/utils'

import BackgroundPattern from './bg-pattern'

interface Props {
  className?: string
}

const TileableBackground = (props: Props) => {
  const { className } = props

  const styles = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      renderToStaticMarkup(<BackgroundPattern />)
    )}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '250px 150px'
  }

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-[1] opacity-45',
        className
      )}
      style={styles}
      aria-hidden="true"
    />
  )
}

export default TileableBackground
