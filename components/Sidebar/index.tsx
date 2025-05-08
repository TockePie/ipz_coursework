import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet'
import { Menu } from 'lucide-react'

import Account from './Account'
import Buttons from './Buttons'
import Links from './Links'

const Sidebar = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <Menu color="#fbf3de" size="24" className="lg:hidden" />
    </SheetTrigger>

    <SheetContent className="bg-mistyrose flex w-full flex-col gap-8 p-6">
      <Account />
      <Buttons />
      <Links />
    </SheetContent>
  </Sheet>
)

export default Sidebar
