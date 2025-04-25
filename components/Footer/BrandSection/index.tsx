import React from 'react'

import RabbitIcon from '@/components/Icons/rabbit-icon'
import Colors from '@/types/enums/colors'

const BrandSection = () => (
  <div className="mx-auto flex max-w-3xl flex-col items-center gap-9 lg:flex-col-reverse">
    <h4 className="text-cornsilk text-center text-[0.875rem] lg:text-base">
      Ми віримо, що Bunnfee стане для тебе місцем, куди хочеться повертатися
      знову і знову.
    </h4>

    <div className="flex items-end gap-4">
      <RabbitIcon width={32} height={56} color={Colors.CORNSILK} />
      <h1 className="font-meila text-cornsilk text-3xl font-normal lg:text-4xl">
        Bunnfee
      </h1>
    </div>
  </div>
)

export default BrandSection
