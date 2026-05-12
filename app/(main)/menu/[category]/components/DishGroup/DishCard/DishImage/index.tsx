import { cx } from 'class-variance-authority'
import Image from 'next/image'

interface Props {
  image: string | undefined
  name: string
  isLoading: boolean
  className?: string
  size?: number
}

export default function DishImage({
  image,
  name,
  isLoading,
  className,
  size = 150
}: Props) {
  if (isLoading) {
    return (
      <div className="bg-mistyrose h-36 w-full animate-pulse rounded-2xl transition duration-300" />
    )
  }

  return (
    <div
      className={cx(
        'flex h-full w-full items-center justify-center',
        className
      )}
    >
      <Image
        src={image ?? '/fallback.png'}
        alt={name}
        width={size}
        height={size}
        unoptimized={true}
        style={{ width: size, height: size }}
        className="rounded-xl object-cover transition duration-300"
      />
    </div>
  )
}
