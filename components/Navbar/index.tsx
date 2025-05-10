import React from 'react'
import Link from 'next/link'

import RabbitIcon from '@/components/Icons/rabbit-icon'
import Sidebar from '@/components/Sidebar'

import Auth from './Auth'
import NAV_LINKS from './links'

const Navbar = () => (
  <nav className="bg-light-coral">
    <div className="mx-auto flex max-w-7xl justify-between p-2 px-4">
      <Link
        href="/"
        className="flex cursor-pointer items-center gap-1 select-none"
      >
        <RabbitIcon height={50} width={50} color="#FBF3DE" />
        <h1 className="font-meila text-cornsilk text-3xl font-normal">
          Bunnfee
        </h1>
      </Link>

      <div className="text-cornsilk font-unbounded flex items-center gap-4 select-none max-lg:hidden xl:gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </div>

      <div className="font-unbounded flex items-center gap-3">
        <Auth />
        <Sidebar />
      </div>
    </div>
  </nav>
)

export default Navbar
