import AmbulanceIcon from '@/components/Icons/ui/ambulance-icon'
import PepperIcon from '@/components/Icons/ui/pepper-icon'
import ShrimpIcon from '@/components/Icons/ui/shrimp-icon'
import SteakIcon from '@/components/Icons/ui/steak-icon'

export enum Allergens {
  MEAT = 'meat',
  SEAFOOD = 'seafood',
  DELIVERY = 'delivery',
  SPICY = 'spicy'
}

export const AllergensIcons = {
  [Allergens.SPICY]: PepperIcon,
  [Allergens.MEAT]: SteakIcon,
  [Allergens.SEAFOOD]: ShrimpIcon,
  [Allergens.DELIVERY]: AmbulanceIcon
}

export const AllergensLabels = {
  [Allergens.SPICY]: 'Гостра їжа',
  [Allergens.MEAT]: 'М’ясо',
  [Allergens.SEAFOOD]: 'Морепродукти',
  [Allergens.DELIVERY]: 'Арахіс'
}
