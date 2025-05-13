import React from 'react'
import Link from 'next/link'

import { Dish } from '@/types/dish'

import DishImage from './DishImage'
import DishTags from './DishTags'
import VariantList from './VariantList'

interface Props {
  item: Dish
  image: string | undefined
  isLoading: boolean
}

const DishCard = (props: Props) => {
  const { item, image, isLoading } = props

  return (
    <Link
      href={`?dish=${item.id}`}
      scroll={false}
      className="border-brown relative flex w-full items-center gap-3 rounded-2xl border bg-white p-3.5 shadow-lg lg:max-w-3xs lg:flex-col lg:gap-2.5"
    >
      <DishImage
        image={image}
        name={item.name}
        isLoading={isLoading}
        className="max-h-36 max-w-36"
      />

      <div className="flex h-full w-full flex-col justify-between gap-3.5">
        <div className="flex w-8/12 flex-col lg:w-full">
          <p className="font-unbounded text-brown flex-wrap font-semibold">
            {item.name}
          </p>
          <hr className="border-brown w-full border" />
        </div>

        <p className="font-unbounded text-brown text-xs">{item.description}</p>

        <div className="flex w-full items-end justify-between">
          <VariantList item={item} />

          <p className="text-strong-cyan font-unbounded text-sm font-semibold">
            {
              item.variants.find((variant) => variant.is_default === true)
                ?.price
            }{' '}
            ₴
          </p>
        </div>
      </div>

      <DishTags tags={item.tags} />
    </Link>
  )
}

export default DishCard
