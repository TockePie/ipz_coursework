import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
}

export default function InnerContainer({ title, children }: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-4.5">
      <h2>{title}</h2>
      <div className="flex w-full flex-col gap-3.5">{children}</div>
    </div>
  )
}
