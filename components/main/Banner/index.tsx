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
  const { query, images } = useBanner()

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

  if (query.isLoading) {
    return (
      <div className="border-brown bg-mistyrose text-brown flex h-56 w-full max-w-2xl items-center justify-center gap-3 rounded-3xl border-2 lg:h-96 lg:max-w-5xl">
        <Spinner color={Colors.BROWN} />
        <p className="font-unbounded">Завантаження</p>
      </div>
    )
  }

  if (query.isError) {
    return (
      <div className="border-brown text-brown flex h-56 w-full max-w-2xl items-center justify-center rounded-3xl border-2 bg-red-300 lg:h-96 lg:max-w-5xl">
        <p className="font-unbounded">{query.error.message}</p>
      </div>
    )
  }

  return (
    <div ref={emblaRef} className="mb-4 ml-2 flex justify-center">
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
                  className="border-brown bg-mistyrose text-brown mx-auto rounded-3xl border-2 object-cover"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Banner
