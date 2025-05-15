'use client'

import React from 'react'
import { Slider } from '@ui/slider'

interface Props {
  value: number[]
  onChange: (value: number[]) => void
}

const PriceRange = ({ value, onChange }: Props) => {
  return (
    <div className="flex w-full flex-col gap-5">
      <h4>Ціна:</h4>
      <div className="flex w-full justify-between">
        <span className="text-brown font-unbounded font-light">
          {value[0]}₴
        </span>
        <span className="text-brown font-unbounded font-light">
          {value[1]}₴
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={onChange}
        max={320}
        step={1}
        className="bg-brown w-full"
      />
    </div>
  )
}

export default PriceRange
