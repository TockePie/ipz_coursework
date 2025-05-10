import React from 'react'
import { ScrollArea } from '@ui/scroll-area'

import { MENU_LINKS, PAGES_LINKS } from '@/common/page-links'

import LinkList from './LinkList'

const Links = () => (
  <ScrollArea className="mb-3 h-[calc(100vh-218px)] w-full">
    <LinkList title="Меню" links={MENU_LINKS} />
    <LinkList title="Сторінки" links={PAGES_LINKS} className="mt-8" />
  </ScrollArea>
)

export default Links
