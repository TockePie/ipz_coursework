'use client'

import { createContext, useContext, useState } from 'react'

import { Allergens } from '@/types/enums/allergens'

interface FiltersState {
  allergens: Allergens[]
  priceRange: number[]
}

interface FilterContextType {
  filters: FiltersState
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FiltersState>({
    allergens: [],
    priceRange: [0, 320]
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  return context
}
