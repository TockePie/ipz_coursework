import React from 'react'
import {
  CalendarClock,
  Contact,
  Dessert,
  Shirt,
  Users,
  Wine
} from 'lucide-react'

import BurgerIcon from '@/components/Icons/burger-icon'
import Colors from '@/types/enums/colors'

const MENU_LINKS = [
  {
    label: 'Основні страви',
    icon: <BurgerIcon color={Colors.BROWN} />,
    routeName: 'main',
    href: '/menu/main',
    bgColor: 'bg-light-goldenrod-yellow',
    bgMainColor: 'bg-pale-turquoise'
  },
  {
    label: 'Десерти',
    icon: <Dessert color={Colors.BROWN} />,
    routeName: 'desserts',
    href: '/menu/desserts',
    bgColor: 'bg-cornsilk',
    bgMainColor: 'bg-mistyrose'
  },
  {
    label: 'Напої',
    icon: <Wine color={Colors.BROWN} />,
    routeName: 'drinks',
    href: '/menu/drinks',
    bgColor: 'bg-pale-turquoise',
    bgMainColor: 'bg-light-goldenrod-yellow'
  },
  {
    label: 'Унікальний мерч',
    icon: <Shirt color={Colors.BROWN} />,
    routeName: 'merch',
    href: '/menu/merch',
    bgColor: 'bg-light-goldenrod-yellow',
    bgMainColor: 'bg-pale-turquoise'
  }
]

const PAGES_LINKS = [
  {
    label: 'Забронювати столик',
    icon: <CalendarClock color={Colors.BROWN} />,
    href: '/#booking',
    bgColor: 'bg-cornsilk'
  },
  {
    label: 'Про нас',
    icon: <Users color={Colors.BROWN} />,
    href: '/#about',
    bgColor: 'bg-pale-turquoise'
  },
  {
    label: 'Контакти',
    icon: <Contact color={Colors.BROWN} />,
    href: '#footer',
    bgColor: 'bg-light-goldenrod-yellow'
  }
]

export { MENU_LINKS, PAGES_LINKS }
