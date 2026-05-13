'use client'

import { Suspense, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { getDishes } from '@/api/dish'
import DishCategory from '@/types/enums/dish-category'

import { useFilters } from '../../filterContext'

import DishCard from './DishCard'
import DishModal from './DishModal'
import DishSkeleton from './skeleton'

interface Props {
  currentCategory: keyof typeof DishCategory
}

function DishGroupContent({ currentCategory }: Props) {
  const searchParams = useSearchParams()
  const selectedDishId = searchParams.get('dish')

  const {
    filters: { allergens, priceRange }
  } = useFilters()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['dishes'],
    queryFn: getDishes,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  const filteredData = useMemo(() => {
    if (!data) return []
    return data.filter(
      (item) =>
        item.category === DishCategory[currentCategory] &&
        !allergens.some((a) => item.tags.includes(a)) &&
        item.variants.some(
          (v) => v.price >= priceRange[0] && v.price <= priceRange[1]
        )
    )
  }, [data, currentCategory, allergens, priceRange])

  const selectedDish = useMemo(
    () => filteredData.find((d) => d.id.toString() === selectedDishId),
    [filteredData, selectedDishId]
  )

  if (isLoading) return <DishSkeleton />

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
          image={`${process.env.NEXT_PUBLIC_API_BASE}${item.image_url}`}
          isLoading={isLoading}
        />
      ))}

      {selectedDish && (
        <DishModal
          item={selectedDish}
          image={`${process.env.NEXT_PUBLIC_API_BASE}${selectedDish.image_url}`}
          isOpen={!!selectedDish}
        />
      )}
    </div>
  )
}

export default function DishGroup(props: Props) {
  return (
    <Suspense fallback={<DishSkeleton />}>
      <DishGroupContent {...props} />
    </Suspense>
  )
}
