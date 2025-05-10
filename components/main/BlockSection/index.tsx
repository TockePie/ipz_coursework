import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  title: string
  className?: string
  children: ReactNode
  id?: string
}

const BlockSection = ({ title, children, id, className }: Props) => (
  <div
    className={cn(
      'flex w-full max-w-2xl flex-col gap-6 lg:max-w-5xl lg:gap-10',
      className
    )}
    id={id}
  >
    <h1 className="text-center">{title}</h1>
    {children}
  </div>
)

export default BlockSection
