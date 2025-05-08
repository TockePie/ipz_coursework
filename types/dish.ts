interface Dish {
  id: number
  name: string
  description: string
  detailed_description: string
  image_url: string
  category: string
  is_available: boolean
  tags: `<${string}>`[]
  variants: Variants[]
  modifier_groups: ModifierGroup[]
}

interface Variants {
  id: number
  size_label: 'S' | 'M' | 'L' | string
  weight_grams: number | null
  volume_ml: number | null
  price: number
  is_default: boolean
  options: ModifierOption[]
}

interface ModifierGroup {
  id: number
  name: string
  description: string
  is_required: boolean
  selection_type: 'single' | 'multiple'
}

interface ModifierOption {
  id: number
  name: string
  price_modifier: number
  is_default: boolean
}

interface DishImage {
  data: (string | undefined)[]
  isLoading: boolean
  isError: boolean
}

export type { Dish, DishImage, ModifierGroup, ModifierOption, Variants }
