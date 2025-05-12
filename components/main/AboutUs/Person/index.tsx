import React from 'react'

import { cn } from '@/lib/utils'

import BlockQuote from './BlockQuote'

interface Props {
  className?: string
  name: string
  role: string
  roleColor?: 'text-strong-cyan' | 'text-coral' | 'text-moderate-orange'
  imgSrc?: string
  imgAlt: string
  quote: string
}

const Person = ({
  className,
  name,
  role,
  roleColor = 'text-coral',
  imgSrc,
  imgAlt,
  quote
}: Props) => (
  <div className="flex flex-col items-center gap-4">
    <div className="relative flex w-full items-center justify-center gap-6 lg:gap-10">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="ml-[-30px] h-full max-h-48 w-full max-w-48 lg:max-h-96 lg:max-w-96"
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1 lg:items-end">
          <h2 className="text-start lg:text-end">{name}</h2>
          <h3 className={roleColor}>{role}</h3>
        </div>

        <BlockQuote
          className={cn('max-lg:hidden', className)}
          content={quote}
        />
      </div>
    </div>

    <BlockQuote className={cn('lg:hidden', className)} content={quote} />
  </div>
)

export default Person
