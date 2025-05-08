import { useQueries, useQuery } from '@tanstack/react-query'

import { getDishes, getDishImage } from '@/api/dish'
import { DishImage } from '@/types/dish'

export const useDishes = () => {
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
        queryFn: () => getDishImage(item.image_url.split('/')[3]),
        refetchOnWindowFocus: false
      })) || [],
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError)
      } as DishImage
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
