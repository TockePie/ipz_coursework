import { ScrollArea } from '@ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet'
import { Menu } from 'lucide-react'

import { MENU_LINKS, PAGES_LINKS } from '../../common/page-links'

import Account from './Account'
import Buttons from './Buttons'
import LinkList from './Links'

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu color="#fbf3de" size="24" className="lg:hidden" />
      </SheetTrigger>

      <SheetContent className="bg-mistyrose flex w-full flex-col gap-8 p-6">
        <Account />
        <Buttons />

        <ScrollArea className="mb-3 h-[calc(100vh-218px)] w-full">
          <LinkList title="Меню" links={MENU_LINKS} />
          <LinkList title="Сторінки" links={PAGES_LINKS} className="mt-8" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
