import React from 'react'
import { Button } from '@ui/button'
import { ScrollArea, ScrollBar } from '@ui/scroll-area'
import Link from 'next/link'

import { MENU_LINKS } from '@/common/page-links'
import DishCategory from '@/types/enums/dish-category'

import Filters from './Filters'

interface Props {
  currentCategory?: keyof typeof DishCategory
}

const Categories = ({ currentCategory = 'main' }: Props) => (
  <ScrollArea className="h-12 w-full rounded-md">
    <div className="flex w-max gap-2">
      <Filters />

      {MENU_LINKS.map((link, index) => (
        <Button
          key={index}
          variant={currentCategory === link.routeName ? 'secondary' : 'ghost'}
          color={
            currentCategory === link.routeName
              ? 'light-goldenrod-yellow'
              : 'brown'
          }
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

export default Categories
