'use client'

import React from 'react'

import useDishes from '@/hooks/api/use-dishes'
import useFiltersStore from '@/hooks/store/use-filters-store'
import DishCategory from '@/types/enums/dish-category'

import DishCard from './DishCard'

interface Props {
  currentCategory: keyof typeof DishCategory
}

const DishGroup = (props: Props) => {
  const { currentCategory } = props

  const { data, isLoading, isError, images } = useDishes()
  const { allergens, priceRange } = useFiltersStore()

  const filteredData =
    data &&
    data.filter(
      (item) =>
        item.category === DishCategory[currentCategory] &&
        !allergens.some((allergen) => item.tags.includes(allergen)) &&
        item.variants.some(
          (variant) =>
            variant.price >= priceRange[0] && variant.price <= priceRange[1]
        )
    )

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-6">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-mistyrose h-56 w-full animate-pulse rounded-2xl transition duration-300 lg:h-82"
            />
          ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-red-200">
        <p className="text-center text-red-600">Помилка</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-6">
      {filteredData?.map((item) => (
        <DishCard
          key={item.id}
          item={item}
          image={images.data?.[item.id]}
          isLoading={images.isLoading}
        />
      ))}
    </div>
  )
}

export default DishGroup
