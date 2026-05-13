import { cx } from 'class-variance-authority'
import { LoaderCircle } from 'lucide-react'

import Colors from '@/types/enums/colors'

interface Props {
  className?: string
  color?: Colors
  size?: number
}

export default function Spinner({
  className,
  color = Colors.CORNSILK,
  size = 32
}: Props) {
  return (
    <LoaderCircle
      size={size}
      className={cx('animate-spin', className)}
      color={color}
    />
  )
}
