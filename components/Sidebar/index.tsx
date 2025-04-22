import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@ui/sheet'
import { CircleUserRound, Menu } from 'lucide-react'

import Colors from '@/types/enums/colors'

import Buttons from './Buttons'
import Links from './Links'

const Sidebar = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <Menu color="#fbf3de" size="24" className="lg:hidden" />
    </SheetTrigger>

    <SheetContent className="bg-mistyrose flex w-full flex-col gap-8 p-6">
      <div className="flex items-center gap-3.5">
        <CircleUserRound color={Colors.CORAL} size="36" />
        <h2 className="text-coral font-unbounded text-2xl font-medium">
          Гість
        </h2>
      </div>

      <Buttons />

      <Links />
    </SheetContent>
  </Sheet>
)

export default Sidebar
