// DishCard.tsx
import React, { FC } from 'react'
import Image from 'next/image'

import { Dish } from '@/types/dish'

import VariantList from './variant-list'

interface DishCardProps {
  item: Dish
  image: string | undefined
}

//TODO: add tags and its icons
const DishCard: FC<DishCardProps> = ({ item, image }) => (
  <div className="border-brown flex w-full items-center gap-3 rounded-2xl border bg-white p-3.5 lg:max-w-3xs lg:flex-col lg:gap-2.5">
    <div className="h-full max-h-36 w-full max-w-36">
      <Image
        src={image ?? '/fallback.png'}
        alt={item.name}
        width={150}
        height={150}
        className="rounded-xl object-cover transition duration-300"
      />
    </div>

    <div className="flex h-full w-full flex-col justify-between gap-3.5">
      <div className="flex flex-col">
        <p className="font-unbounded text-brown flex-wrap font-semibold">
          {item.name}
        </p>
        <hr className="border-brown w-full border" />
      </div>

      <p className="font-unbounded text-brown text-sm">{item.description}</p>

      <div className="flex w-full items-end justify-between">
        <VariantList item={item} />

        <p className="text-strong-cyan font-unbounded text-sm font-semibold">
          {item.variants.find((variant) => variant.is_default === true)?.price}{' '}
          ₴
        </p>
      </div>
    </div>
  </div>
)

export default DishCard
