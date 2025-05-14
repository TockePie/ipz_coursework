import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@ui/card'
import clsx from 'clsx'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Props {
  number: number
  is_available?: boolean
  capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  onClick: () => void
  className?: string
  image?: string
}

const getPeopleText = (capacity: number) => {
  if (capacity === 1) {
    return 'На 1 особу'
  } else if (capacity >= 5) {
    return `На ${capacity} осіб`
  } else {
    return `На ${capacity} особи`
  }
}

const TableCard = ({
  number,
  is_available,
  capacity,
  onClick,
  className = '',
  image
}: Props) => (
  <Card
    className={cn(
      'bg-mistyrose border-brown flex h-full w-full max-w-xl cursor-pointer flex-col justify-between rounded-lg border shadow-md transition-all duration-200 hover:shadow-lg',
      className
    )}
    onClick={onClick}
  >
    <CardHeader>
      <CardTitle className="flex w-full items-center justify-between">
        <span className="font-unbounded text-brown text-lg">
          Столик №{number}
        </span>
        <span
          className={clsx(
            'font-unbounded text-sm',
            is_available ? 'text-strong-cyan' : 'text-red-500'
          )}
        >
          {is_available ? 'Доступний' : 'Зайнятий'}
        </span>
      </CardTitle>

      <CardDescription>
        <span className="text-brown/80 font-unbounded text-xs">
          {capacity && getPeopleText(capacity)}
        </span>
      </CardDescription>
    </CardHeader>

    <CardContent className="flex h-full items-center justify-center">
      <div className="relative h-36 w-full md:h-56">
        <Image
          src={image ?? '/fallback.png'}
          alt="table"
          objectFit="cover"
          fill
          className="border-brown/40 rounded-xl border"
        />
      </div>
    </CardContent>
  </Card>
)

export default TableCard
