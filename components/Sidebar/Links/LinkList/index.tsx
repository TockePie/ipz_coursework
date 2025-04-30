import React, { FC } from 'react'
import clsx from 'clsx'

import { SheetClose } from '@/components/ui/sheet'
import RedirectMiddleware from '@/utils/redirect-middleware'

type LinkItem = {
  href: string
  label: string
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
      <SheetClose key={index} asChild>
        <RedirectMiddleware
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
        </RedirectMiddleware>
      </SheetClose>
    ))}
  </div>
)

export default LinkList
