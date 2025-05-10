import { create } from 'zustand'

import { Allergens } from '@/types/enums/allergens'

interface StoreState {
  allergens: Allergens[]
  priceRange: number[]
}

interface StoreActions {
  setAllergens: (allergens: Allergens[]) => void
  setPriceRange: (priceRange: number[]) => void
}

const useFilters = create<StoreState & StoreActions>((set) => ({
  allergens: [],
  priceRange: [0, 320],

  setAllergens: (allergens) => set({ allergens }),
  setPriceRange: (priceRange) => set({ priceRange })
}))

export default useFilters
