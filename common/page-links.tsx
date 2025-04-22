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

const menuLinks = [
  {
    name: 'Основні страви',
    icon: <BurgerIcon color={Colors.BROWN} />,
    href: '/main-dishes',
    bgColor: 'bg-light-goldenrod-yellow'
  },
  {
    name: 'Десерти',
    icon: <Dessert color={Colors.BROWN} />,
    href: '/desserts',
    bgColor: 'bg-cornsilk'
  },
  {
    name: 'Напої',
    icon: <Wine color={Colors.BROWN} />,
    href: '/drinks',
    bgColor: 'bg-pale-turquoise'
  },
  {
    name: 'Унікальний мерч',
    icon: <Shirt color={Colors.BROWN} />,
    href: '/merch',
    bgColor: 'bg-light-goldenrod-yellow'
  }
]

const pagesLinks = [
  {
    name: 'Забронювати столик',
    icon: <CalendarClock color={Colors.BROWN} />,
    href: '/reservation',
    bgColor: 'bg-cornsilk'
  },
  {
    name: 'Про нас',
    icon: <Users color={Colors.BROWN} />,
    href: '/about',
    bgColor: 'bg-pale-turquoise'
  },
  {
    name: 'Контакти',
    icon: <Contact color={Colors.BROWN} />,
    href: '/contacts',
    bgColor: 'bg-light-goldenrod-yellow'
  }
]

export { menuLinks, pagesLinks }
