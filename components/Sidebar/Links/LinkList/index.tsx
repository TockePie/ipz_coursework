import React, { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import { SheetClose } from '@/components/ui/sheet'

type LinkItem = {
  href: string
  label: string
  icon: ReactNode
  bgColor?: string
}

interface Props {
  title: string
  links: LinkItem[]
  className?: string
}

const LinkList = ({ title, links, className }: Props) => (
  <div className={clsx('mt-0 flex flex-col gap-4', className)}>
    <h2 className="font-unbounded text-brown text-2xl font-medium">{title}</h2>

    {links.map((link, index) => (
      <SheetClose key={index} asChild>
        <Link
          href={link.href}
          className={clsx(
            link.bgColor,
            'flex w-full items-center gap-2.5 rounded-3xl p-4'
          )}
        >
          {link.icon}
          <span className="text-brown font-unbounded text-lg">
            {link.label}
          </span>
        </Link>
      </SheetClose>
    ))}
  </div>
)

export default LinkList
