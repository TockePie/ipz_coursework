import React, { ReactNode } from 'react'

interface BlockSectionProps {
  title: string
  className?: string
  children: ReactNode
  id?: string
}

const BlockSection = ({ title, children, id }: BlockSectionProps) => (
  <div className="flex w-full max-w-2xl flex-col gap-6 lg:max-w-4xl" id={id}>
    <h1 className="text-center">{title}</h1>
    {children}
  </div>
)

export default BlockSection
