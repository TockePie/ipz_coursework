import React from 'react'
import { CircleUserRound, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Colors from '@/types/enums/colors'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu color="#fbf3de" size="24" className="lg:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-mistyrose flex w-full flex-col gap-10 p-6">
        <div className="flex items-center gap-3.5">
          <CircleUserRound color={Colors.CORAL} size="36" />
          <h2 className="text-coral font-unbounded text-2xl font-medium">
            Гість
          </h2>
        </div>

        <div>
          <Button>
            <span className="text-coral">Увійти</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
