'use client'

import { useQueries, useQuery } from '@tanstack/react-query'

import { getDishes, getDishImage } from '@/api/dish'

const useDishes = () => {
  const query = useQuery({
    queryKey: ['dishes'],
    queryFn: getDishes,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  const images = useQueries({
    queries:
      query.data?.map((item) => ({
        queryKey: ['dish', item.id],
        //TODO: use a better way to get the image url
        queryFn: () => getDishImage(item.image_url.split('/')[3]),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10 // 10 minutes
      })) || [],
    combine: (results) => {
      const dataMap: Record<number, string | undefined> = {}
      const dishList = query.data || []

      for (const [i, result] of results.entries()) {
        const dish = dishList[i]
        if (dish) {
          dataMap[dish.id] = result.data
        }
      }

      return {
        data: dataMap,
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError)
      }
    }
  })

  const { data, isLoading, isError } = query

  return {
    data,
    isLoading,
    isError,
    images
  }
}

export default useDishes
