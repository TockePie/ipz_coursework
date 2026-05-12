import {
  CalendarClock,
  Contact,
  Dessert,
  Shirt,
  Users,
  Wine
} from 'lucide-react'

import BurgerIcon from '@/components/Icons/ui/burger-icon'

export const MENU_LINKS = [
  {
    label: 'Основні страви',
    icon: BurgerIcon,
    routeName: 'main',
    href: '/menu/main',
    bgColor: 'bg-light-goldenrod-yellow',
    bgMainColor: 'bg-pale-turquoise'
  },
  {
    label: 'Десерти',
    icon: Dessert,
    routeName: 'desserts',
    href: '/menu/desserts',
    bgColor: 'bg-cornsilk',
    bgMainColor: 'bg-mistyrose'
  },
  {
    label: 'Напої',
    icon: Wine,
    routeName: 'drinks',
    href: '/menu/drinks',
    bgColor: 'bg-pale-turquoise',
    bgMainColor: 'bg-light-goldenrod-yellow'
  },
  {
    label: 'Унікальний мерч',
    icon: Shirt,
    routeName: 'merch',
    href: '/menu/merch',
    bgColor: 'bg-light-goldenrod-yellow',
    bgMainColor: 'bg-pale-turquoise'
  }
]

export const PAGES_LINKS = [
  {
    label: 'Забронювати столик',
    icon: CalendarClock,
    href: '/#booking',
    bgColor: 'bg-cornsilk'
  },
  {
    label: 'Про нас',
    icon: Users,
    href: '/#about',
    bgColor: 'bg-pale-turquoise'
  },
  {
    label: 'Контакти',
    icon: Contact,
    href: '#footer',
    bgColor: 'bg-light-goldenrod-yellow'
  }
]
