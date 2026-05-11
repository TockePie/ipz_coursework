import { PropsWithChildren } from 'react'
import { cx } from 'class-variance-authority'

interface Props extends PropsWithChildren {
  title: string
  className?: string
}

const Container = ({ title, children, className = '' }: Props) => (
  <div className="flex flex-col items-center gap-5 lg:items-start">
    <h2 className="text-cornsilk cursor-default">{title}</h2>
    <div className={cx('flex', className)}>{children}</div>
  </div>
)

export default Container
