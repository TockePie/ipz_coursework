'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const MapPlaceholder = () => (
  <div className="bg-light-coral h-[290px] w-full animate-pulse rounded-2xl" />
)

const GoogleMapsContent = () => (
  <div className="h-[290px] w-full overflow-hidden rounded-2xl">
    <iframe
      width="100%"
      height="290"
      src="https://maps.google.com/maps?width=100%25&amp;height=290&amp;hl=en&amp;q=Politekhnichna%20St,%2041,%20Korpus%2018,%20Kyiv,%2003056+(%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81%20%E2%84%96%2018%20%D0%9A%D0%9F%D0%86%20%D1%96%D0%BC.%D0%86%D0%B3%D0%BE%D1%80%D1%8F%20%D0%A1%D1%96%D0%BA%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    />
  </div>
)

const GoogleMaps = dynamic(() => Promise.resolve(GoogleMapsContent), {
  ssr: false,
  loading: MapPlaceholder
})

export default GoogleMaps
