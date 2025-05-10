import AmbulanceIcon from '@/components/Icons/ui/ambulance-icon'
import PepperIcon from '@/components/Icons/ui/pepper-icon'
import ShrimpIcon from '@/components/Icons/ui/shrimp-icon'
import SteakIcon from '@/components/Icons/ui/steak-icon'

export enum Allergens {
  DELIVERY = 'delivery',
  MEAT = 'meat',
  SEAFOOD = 'seafood',
  SPICY = 'spicy'
}

export const AllergensIcons = {
  [Allergens.DELIVERY]: AmbulanceIcon,
  [Allergens.MEAT]: SteakIcon,
  [Allergens.SEAFOOD]: ShrimpIcon,
  [Allergens.SPICY]: PepperIcon
}

export const AllergensLabels = {
  [Allergens.DELIVERY]: 'Арахіс',
  [Allergens.MEAT]: "М'ясо",
  [Allergens.SEAFOOD]: 'Морепродукти',
  [Allergens.SPICY]: 'Гостра їжа'
}
