import React from 'react'
import { Button } from '@ui/button'
import { ScrollArea, ScrollBar } from '@ui/scroll-area'
import clsx from 'clsx'
import Link from 'next/link'

import { MENU_LINKS } from '@/common/page-links'
import DishCategory from '@/types/enums/dish-category'

import Filters from './Filters'

interface Props {
  currentCategory: DishCategory
}

const Categories = (props: Props) => {
  const { currentCategory } = props

  return (
    <ScrollArea className="h-12 w-full rounded-md">
      <div className="flex w-max gap-2">
        <Filters />

        {MENU_LINKS.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            className={clsx(
              'font-unbounded text-brown hover:text-brown overflow-anchor-none transition duration-300',
              currentCategory === link.routeName &&
                'bg-light-goldenrod-yellow hover:bg-light-goldenrod-yellow/70 active:bg-light-goldenrod-yellow/50'
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
