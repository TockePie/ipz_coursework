import React, { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface Props {
  title: string
  children: ReactNode
  className?: string
}

const Container = ({ title, children, className = '' }: Props) => (
  <div className="flex flex-col items-center gap-5 lg:items-start">
    <h2 className="text-cornsilk cursor-default">{title}</h2>
    <div className={cn(className, 'flex')}>{children}</div>
  </div>
)

export default Container
