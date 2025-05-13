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

interface Props {
  number: number
  is_available?: boolean
  people?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const getPeopleText = (people: number) => {
  if (people === 1) {
    return 'На 1 особу'
  } else if (people >= 5) {
    return `На ${people} осіб`
  } else {
    return `На ${people} особи`
  }
}

const TableCard = ({ number, is_available, people }: Props) => {
  return (
    <Card className="bg-mistyrose border-brown flex h-full w-full max-w-xl flex-col justify-between rounded-lg border shadow-md">
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
            {people && getPeopleText(people)}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex h-full items-center justify-center">
        <div className="relative h-36 w-full md:h-56">
          <Image
            src="/fallback.png"
            alt="table"
            objectFit="cover"
            fill
            className="border-brown/40 rounded-xl border"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default TableCard
