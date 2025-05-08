'use client'

import React from 'react'

import { useDishes } from '@/hooks/use-dishes'

import DishCard from './DishCard'

const ItemsGroup = ({ category }: { category: string }) => {
  const { data, isLoading, isError, images } = useDishes()

  if (isLoading) {
    return (
      <div className="h-64 w-full animate-pulse rounded-2xl bg-gray-200 transition duration-300" />
    )
  }

  if (isError) {
    return (
      <div className="h-64 w-full rounded-2xl bg-red-200">
        <p className="text-center text-red-600">Помилка</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-6">
      {data?.map((item, index) => (
        <DishCard key={index} item={item} image={images.data?.[index]} />
      ))}
    </div>
  )
}

export default ItemsGroup
