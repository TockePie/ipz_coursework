import React, { ReactNode } from 'react'

interface BlockSectionProps {
  title: string
  className?: string
  children: ReactNode
}

const BlockSection = ({ title, children }: BlockSectionProps) => (
  <div className="flex w-full max-w-2xl flex-col gap-6">
    <h1 className="text-center">{title}</h1>
    {children}
  </div>
)

export default BlockSection
