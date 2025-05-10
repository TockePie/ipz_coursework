'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@ui/button'
import { Checkbox } from '@ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'
import { Slider } from '@ui/slider'

import useFilters from '@/hooks/use-filters'
import { Allergens, AllergensLabels } from '@/types/enums/allergens'

const Filters = () => {
  const [selectedAllergens, setSelectedAllergens] = useState<Allergens[]>([])
  const [localPriceRange, setLocalPriceRange] = useState<number[]>([0, 320])
  const closeDialog = useRef<HTMLButtonElement>(null)
  const { setAllergens, setPriceRange } = useFilters()

  const toggleAllergen = (allergen: Allergens) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    )
  }

  const CheckboxGroup = () =>
    Object.entries(AllergensLabels).map(([key, label]) => {
      const allergen = key as Allergens
      const isChecked = selectedAllergens.includes(allergen)

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
    })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pale-turquoise text-brown font-unbounded hover:bg-pale-turquoise/80 active:bg-pale-turquoise/60 shadow-none">
          Фільтри
        </Button>
      </DialogTrigger>

      <DialogContent className="border-strong-cyan rounded-3xl border-3">
        <DialogHeader aria-describedby="dish-filters">
          <DialogTitle asChild>
            <h2>Фільтри</h2>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full flex-col gap-5">
            <h4>Не показувати страви, що містять:</h4>
            <div className="flex flex-col gap-5">
              <CheckboxGroup />
            </div>
          </div>

          <div className="flex w-full flex-col gap-5">
            <h4>Ціна:</h4>
            <div className="flex w-full justify-between">
              <span className="text-brown font-unbounded font-light">
                {localPriceRange[0]}₴
              </span>
              <span className="text-brown font-unbounded font-light">
                {localPriceRange[1]}₴
              </span>
            </div>
            <Slider
              value={localPriceRange}
              onValueChange={(value) => setLocalPriceRange(value)}
              max={320}
              step={1}
              className="bg-brown w-full"
            />
          </div>

          <Button
            className="bg-strong-cyan hover:bg-strong-cyan/80 active:bg-strong-cyan/60 font-unbounded text-white shadow-none"
            onClick={() => {
              setAllergens(selectedAllergens)
              setPriceRange(localPriceRange)
              closeDialog.current?.click()
            }}
          >
            Застосувати
          </Button>
        </div>

        <DialogClose ref={closeDialog} />
      </DialogContent>
    </Dialog>
  )
}

export default Filters
