import React, { ReactNode } from 'react'

interface BlockSectionProps {
  title: string
  className?: string
  children: ReactNode
}

const BlockSection = ({ title, className, children }: BlockSectionProps) => (
  <div className="flex w-full max-w-2xl flex-col gap-6">
    <h1 className="text-center">{title}</h1>
    <div className={className}>{children}</div>
  </div>
)

export default BlockSection
