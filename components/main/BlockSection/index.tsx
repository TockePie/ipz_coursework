import React, { ReactNode } from 'react'

interface Props {
  title: string
  className?: string
  children: ReactNode
  id?: string
}

const BlockSection = ({ title, children, id }: Props) => (
  <div
    className="flex w-full max-w-2xl flex-col gap-6 lg:max-w-5xl lg:gap-10"
    id={id}
  >
    <h1 className="text-center">{title}</h1>
    {children}
  </div>
)

export default BlockSection
