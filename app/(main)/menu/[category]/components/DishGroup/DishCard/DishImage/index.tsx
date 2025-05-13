import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Props {
  image: string | undefined
  name: string
  isLoading: boolean
  className?: string
  size?: number
}

const DishImage = (props: Props) => {
  const { image, name, isLoading, className, size = 150 } = props

  if (isLoading) {
    return (
      <div className="bg-mistyrose h-36 w-full animate-pulse rounded-2xl transition duration-300" />
    )
  }

  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        className
      )}
    >
      <Image
        src={image ?? '/fallback.png'}
        alt={name}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-xl object-cover transition duration-300"
      />
    </div>
  )
}

export default DishImage
