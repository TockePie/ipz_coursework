import React, { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const InnerContainer = ({ title, children }: Props) => (
  <div className="flex w-full flex-col items-center gap-4.5">
    <h2>{title}</h2>
    <div className="flex w-full flex-col gap-3.5">{children}</div>
  </div>
)

export default InnerContainer
