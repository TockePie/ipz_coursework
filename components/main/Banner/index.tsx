'use client'

import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Carousel, CarouselContent, CarouselItem } from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { getBanners } from '@/api/banner'
import Spinner from '@/components/Spinner'
import Colors from '@/types/enums/colors'

export default function Banner() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 10000,
        stopOnInteraction: true,
        stopOnMouseEnter: true
      }),
    []
  )

  if (isLoading) {
    return (
      <div className="border-brown bg-mistyrose text-brown flex h-56 w-full max-w-2xl items-center justify-center gap-3 rounded-3xl border-2 sm:max-h-46 md:max-h-96 lg:h-96 lg:max-h-126 lg:max-w-5xl">
        <Spinner color={Colors.BROWN} />
        <p className="font-unbounded">Завантаження</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="border-brown text-brown flex h-56 w-full max-w-2xl items-center justify-center rounded-3xl border-2 bg-red-300 lg:h-96 lg:max-w-5xl">
        <p className="font-unbounded">
          {error?.message || 'Сталася невідома помилка'}
        </p>
      </div>
    )
  }

  return (
    <div id="banner" className="mb-4 ml-2 flex justify-center">
      <Carousel plugins={[autoplay]} opts={{ loop: true }} className="w-full">
        <CarouselContent className="w-full max-w-2xl lg:max-w-5xl">
          {(data ?? []).map((banner, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Image
                width={1000}
                height={160}
                src={
                  banner.image_url
                    ? `${process.env.NEXT_PUBLIC_API_BASE}${banner.image_url}`
                    : '/fallback.png'
                }
                unoptimized={true}
                alt={banner.name || 'banner'}
                className="border-brown bg-mistyrose text-brown mx-auto max-h-46 rounded-3xl border-2 object-cover md:max-h-96 lg:max-h-126"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
