import React from 'react'
import Image from 'next/image'

interface Props {
  image: string | undefined
  name: string
  isLoading: boolean
}

const DishImage = (props: Props) => {
  const { image, name, isLoading } = props

  if (isLoading) {
    return (
      <div className="bg-mistyrose h-36 w-full animate-pulse rounded-2xl transition duration-300" />
    )
  }

  return (
    <div className="flex h-full max-h-36 w-full max-w-36 items-center justify-center">
      <Image
        src={image ?? '/fallback.png'}
        alt={name}
        width={150}
        height={150}
        className="rounded-xl object-cover transition duration-300"
      />
    </div>
  )
}

export default DishImage
