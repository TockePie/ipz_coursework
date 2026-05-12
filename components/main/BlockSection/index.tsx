import { PropsWithChildren } from 'react'
import { cx } from 'class-variance-authority'

interface Props extends PropsWithChildren {
  title: string
  className?: string
  id?: string
}

export default function BlockSection({
  title,
  children,
  id,
  className
}: Props) {
  return (
    <div
      className={cx(
        'flex w-full max-w-2xl flex-col gap-6 lg:max-w-5xl lg:gap-10',
        className
      )}
      id={id}
    >
      <h1 className="text-center">{title}</h1>
      {children}
    </div>
  )
}
