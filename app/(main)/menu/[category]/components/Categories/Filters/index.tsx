'use client'

import React, { useRef, useState } from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'

import useFiltersStore from '@/hooks/store/use-filters-store'
import { Allergens } from '@/types/enums/allergens'

import AllergensFilter from './AllergensFilters'
import PriceRange from './PriceRange'

const Filters = () => {
  const { allergens, priceRange, setAllergens, setPriceRange } =
    useFiltersStore()
  const closeDialog = useRef<HTMLButtonElement>(null)
  const [selectedAllergens, setSelectedAllergens] =
    useState<Allergens[]>(allergens)
  const [localPriceRange, setLocalPriceRange] = useState<number[]>(priceRange)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="pale-turquoise">Фільтри</Button>
      </DialogTrigger>

      <DialogContent className="border-strong-cyan rounded-3xl border-3">
        <DialogHeader aria-describedby="dish-filters">
          <DialogTitle asChild>
            <h2>Фільтри</h2>
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6">
          <AllergensFilter
            selected={selectedAllergens}
            onChange={(value) => setSelectedAllergens(value)}
          />

          <PriceRange
            value={localPriceRange}
            onChange={(value) => setLocalPriceRange(value)}
          />

          <Button
            className="mt-2"
            size="xl"
            onClick={() => {
              setAllergens(selectedAllergens)
              setPriceRange(localPriceRange)
              closeDialog.current?.click()
            }}
          >
            Застосувати
          </Button>
        </div>
      </DialogContent>

      <DialogClose ref={closeDialog} />
    </Dialog>
  )
}

export default Filters
