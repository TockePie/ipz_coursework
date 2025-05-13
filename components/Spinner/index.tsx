import React from 'react'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import Colors from '@/types/enums/colors'

interface Props {
  className?: string
  color?: Colors
  size?: number
}

const Spinner = ({ className, color = Colors.CORNSILK, size = 32 }: Props) => (
  <LoaderCircle
    size={size}
    className={cn('animate-spin', className)}
    color={color}
  />
)

export default Spinner
