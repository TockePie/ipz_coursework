'use client'

import React from 'react'
import { Checkbox } from '@ui/checkbox'

import { Allergens, AllergensLabels } from '@/types/enums/allergens'

interface Props {
  selected: Allergens[]
  onChange: (value: Allergens[]) => void
}

const AllergensFilter = ({ selected, onChange }: Props) => {
  const toggleAllergen = (allergen: Allergens) => {
    onChange(
      selected.includes(allergen)
        ? selected.filter((a) => a !== allergen)
        : [...selected, allergen]
    )
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <h4>Не показувати страви, що містять:</h4>
      <div className="flex flex-col gap-5">
        {Object.entries(AllergensLabels).map(([key, label]) => {
          const allergen = key as Allergens
          const isChecked = selected.includes(allergen)

          return (
            <div key={key} className="flex items-center gap-3">
              <Checkbox
                id={`checkbox-${key}`}
                checked={isChecked}
                onCheckedChange={() => toggleAllergen(allergen)}
                className="border-brown/30 data-[state=checked]:bg-brown data-[state=checked]:border-brown size-8 rounded-full"
              />
              <label
                htmlFor={`checkbox-${key}`}
                className="font-unbounded text-brown font-light"
              >
                {label}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllergensFilter
