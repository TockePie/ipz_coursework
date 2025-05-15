'use client'

import { useQueries, useQuery } from '@tanstack/react-query'

import { getBannerImage, getBanners } from '@/api/banner'

const useBanner = () => {
  const query = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  const images = useQueries({
    queries:
      (Array.isArray(query.data) ? query.data : [])?.map((item) => ({
        queryKey: ['banner', item.id],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        queryFn: () => getBannerImage(item.image_url.split('/')[3]),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10 // 10 minutes
      })) || [],
    combine: (results) => {
      const dataMap: Record<number, string | undefined> = {}
      const bannerList = Array.isArray(query.data) ? query.data : []

      for (const [i, result] of results.entries()) {
        const banner = bannerList[i]
        if (banner) {
          dataMap[banner.id] = result.data
        }
      }

      return {
        data: dataMap,
        isLoading: results.some((result) => result.isLoading),
        isError: results.some((result) => result.isError),
        error: results.find((result) => result.isError)?.error
      }
    }
  })

  return {
    query,
    images
  }
}

export { useBanner }
