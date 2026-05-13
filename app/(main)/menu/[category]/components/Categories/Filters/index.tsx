'use client'

import { useState } from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/dialog'

import { Allergens } from '@/types/enums/allergens'

import { useFilters } from '../../../filterContext'

import AllergensFilter from './AllergensFilters'
import PriceRange from './PriceRange'

export default function Filters() {
  const { filters, setFilters } = useFilters()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedAllergens, setSelectedAllergens] = useState<Allergens[]>(
    filters.allergens
  )
  const [localPriceRange, setLocalPriceRange] = useState<number[]>(
    filters.priceRange
  )

  const handleToggleAllergen = (allergen: Allergens) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    )
  }

  const handleApply = () => {
    setFilters({
      allergens: selectedAllergens,
      priceRange: localPriceRange
    })
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            onToggle={handleToggleAllergen}
          />

          <PriceRange
            value={localPriceRange}
            onChange={(value) => setLocalPriceRange(value)}
          />

          <Button className="mt-2" size="xl" onClick={handleApply}>
            Застосувати
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
