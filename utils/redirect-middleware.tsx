'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'

const redirectTo = (href: string) => {
  const baseUrl = window.location.origin

  switch (true) {
    case href.startsWith('/#'):
      window.location.href = `${baseUrl}${href}`
      break
    case href.startsWith('#'):
      const currentPath = window.location.pathname
      window.location.href = `${baseUrl}${currentPath}${href}`
      break
    case href.startsWith('/'):
      window.location.href = `${baseUrl}${href}`
      break
    case href.startsWith('http'):
      window.open(href, '_blank', 'noopener,noreferrer')
    default:
      console.warn('Invalid or unhandled link:', href)
  }
}

const RedirectMiddleware = ({
  label,
  href,
  className,
  children
}: {
  label?: string
  href: string
  className?: string
  children?: ReactNode
}) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        redirectTo(href)
      }}
    >
      {children || label}
    </Link>
  )
}

export default RedirectMiddleware
