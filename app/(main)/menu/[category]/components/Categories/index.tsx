import React from 'react'
import { Button } from '@ui/button'
import { ScrollArea, ScrollBar } from '@ui/scroll-area'
import clsx from 'clsx'
import Link from 'next/link'

import { MENU_LINKS } from '@/common/page-links'

interface CategoriesProps {
  currentCategory: string
}

const Categories = (props: CategoriesProps) => {
  const { currentCategory } = props

  return (
    <ScrollArea className="h-12 w-full rounded-md">
      <div className="flex w-max">
        {MENU_LINKS.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            className={clsx(
              'font-unbounded text-brown overflow-anchor-none',
              currentCategory === link.routeName && 'bg-light-goldenrod-yellow'
            )}
            asChild
          >
            <Link href={link.href} scroll={false}>
              {link.label}
            </Link>
          </Button>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default Categories
