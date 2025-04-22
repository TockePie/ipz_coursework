import React from 'react'
import { ScrollArea } from '@ui/scroll-area'

import { menuLinks, pagesLinks } from '@/common/page-links'

import LinkList from './LinkList'

const Links = () => (
  <ScrollArea className="h-[calc(100vh-178px)] w-full">
    <LinkList title="Меню" links={menuLinks} />
    <LinkList title="Сторінки" links={pagesLinks} className="mt-8" />
  </ScrollArea>
)

export default Links
