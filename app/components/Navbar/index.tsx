import React from 'react'
import Link from 'next/link'

import RabbitIcon from '@/components/Icons/RabbitIcon'
import { Button } from '@/components/ui/button'

import Sidebar from './Sidebar'

const navOptions = [
  {
    label: 'Меню',
    href: '#menu'
  },
  {
    label: 'Бронювання',
    href: '#reservation'
  },
  {
    label: 'Про нас',
    href: '#about'
  },
  {
    label: 'Контакти',
    href: '#contacts'
  }
]

const Navbar = () => {
  return (
    <nav className="bg-light-coral flex justify-between p-2 px-4">
      <div className="flex cursor-pointer items-center gap-1 select-none">
        <RabbitIcon height={50} width={50} color="#FBF3DE" />
        <h1 className="font-meila text-cornsilk text-3xl font-normal">
          Bunnfee
        </h1>
      </div>

      <ul className="text-cornsilk font-unbounded flex items-center gap-4 select-none max-lg:hidden xl:gap-8">
        {navOptions.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <div className="font-unbounded flex items-center gap-3">
        <Button>Увійти</Button>
        <Button color="cornsilk" variant="outline" className="max-sm:hidden">
          Реєстрація
        </Button>

        <Sidebar />
      </div>
    </nav>
  )
}

export default Navbar
