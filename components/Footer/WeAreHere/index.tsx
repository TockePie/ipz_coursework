import React from 'react'

import MapPinIcon from '@/components/Icons/map-pin-icon'

import Container from '../Container'

import GoogleMaps from './GoogleMaps'

const WeAreHere = () => (
  <Container
    title="Ми тут"
    className="w-full flex-col gap-2 sm:w-auto lg:items-start xl:w-[500px]"
  >
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <MapPinIcon />
      <h5 className="text-cornsilk">
        КПІ імені Сікорського
        <br />
        корпус 18
      </h5>
    </div>

    <div className="w-full">
      <GoogleMaps />
    </div>
  </Container>
)

export default WeAreHere
