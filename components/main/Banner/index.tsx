'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import Spinner from '@/components/Spinner'
import { useBanner } from '@/hooks/api/use-banner'
import Colors from '@/types/enums/colors'

const Banner = () => {
  const [plugin, setPlugin] = useState<any>(null)
  const emblaRef = useRef(null)
  const { images, query } = useBanner()

  useEffect(() => {
    if (!plugin) {
      setPlugin(
        Autoplay({
          delay: 10000,
          stopOnInteraction: true,
          stopOnMouseEnter: true
        })
      )
    }
  }, [plugin])

  if (images.isLoading || query.isLoading) {
    return (
      <div className="border-brown bg-mistyrose text-brown flex h-56 w-full max-w-2xl items-center justify-center gap-3 rounded-3xl border-2 sm:max-h-46 md:max-h-96 lg:h-96 lg:max-h-126 lg:max-w-5xl">
        <Spinner color={Colors.BROWN} />
        <p className="font-unbounded">Завантаження</p>
      </div>
    )
  }

  if (images.isError) {
    return (
      <div className="border-brown text-brown flex h-56 w-full max-w-2xl items-center justify-center rounded-3xl border-2 bg-red-300 lg:h-96 lg:max-w-5xl">
        <p className="font-unbounded">
          {images.error?.message || 'Сталася невідома помилка'}
        </p>
      </div>
    )
  }

  return (
    <div ref={emblaRef} id="banner" className="mb-4 ml-2 flex justify-center">
      <Carousel
        plugins={plugin ? [plugin] : []}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="w-full max-w-2xl lg:max-w-5xl">
          {images.data &&
            Object.values(images.data).map((image, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Image
                  width={1000}
                  height={160}
                  src={image ?? '/fallback.png'}
                  alt="banner"
                  className="border-brown bg-mistyrose text-brown mx-auto max-h-46 rounded-3xl border-2 object-cover md:max-h-96 lg:max-h-126"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Banner
