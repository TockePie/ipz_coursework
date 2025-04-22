import React, { FC } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

type LinkItem = {
  href: string
  name: string
  icon: React.ReactNode
  bgColor?: string
}

interface LinkListProps {
  title: string
  links: LinkItem[]
  className?: string
}

const LinkList: FC<LinkListProps> = ({ title, links, className }) => (
  <div className={clsx('mt-0 flex flex-col gap-4', className)}>
    <h2 className="font-unbounded text-brown text-2xl font-medium">{title}</h2>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className={clsx(
          link.bgColor,
          'flex w-full items-center gap-2.5 rounded-3xl p-4'
        )}
      >
        {link.icon}
        <span className="text-brown font-unbounded text-lg">{link.name}</span>
      </Link>
    ))}
  </div>
)

export default LinkList
