import React from 'react'
import { cx } from 'class-variance-authority'

interface Props {
  className?: string
  content: string
}

const BlockQuote = ({ className, content }: Props) => (
  <div
    className={cx(
      'bg-mistyrose relative max-w-md rounded-3xl p-4 py-5',
      className
    )}
  >
    <p className="font-unbounded text-brown font-base text-sm">{content}</p>
    <p className="font-unbounded text-brown/30 absolute top-[-2.25rem] text-9xl">
      “
    </p>
  </div>
)

export default BlockQuote
