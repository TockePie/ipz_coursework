'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import { useBanner } from '@/hooks/api/use-banner'

const Banner = () => {
  const [plugin, setPlugin] = useState<any>(null)
  const emblaRef = useRef(null)
  const { images } = useBanner()

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

  if (images.isLoading) {
    return (
      <div className="border-brown bg-mistyrose text-brown flex h-[160px] w-full animate-pulse items-center justify-center rounded-3xl border-2">
        <p>Loading...</p>
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
                  src={image || ''}
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
