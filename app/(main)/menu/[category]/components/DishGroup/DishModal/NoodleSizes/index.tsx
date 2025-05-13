import React from 'react'
import { Badge } from '@ui/badge'

import { Variants } from '@/types/dish'

const NoodleSizes = ({ variants }: { variants: Variants[] }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <h5 className="font-semibold">Розмір порції:</h5>
      <Badge variant="destructive" className="rounded-full">
        Обов&apos;язково
      </Badge>
    </div>

    <div className="flex flex-col gap-1">
      {variants.map((variant) => (
        <div key={variant.id} className="flex justify-between gap-2">
          <p className="font-unbounded text-brown text-sm font-light md:text-base">
            {variant.size_label}
          </p>
          <p className="font-unbounded text-brown text-sm font-light md:text-base">
            {variant.price} ₴
          </p>
        </div>
      ))}
    </div>
  </div>
)

export default NoodleSizes
