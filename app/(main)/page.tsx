import React from 'react'

import AboutUs from '@/components/main/AboutUs'
import Banner from '@/components/main/Banner'
import BlockSection from '@/components/main/BlockSection'
import Booking from '@/components/main/Booking'
import PagesLink from '@/components/main/PagesLink'

import Categories from './menu/[category]/components/Categories'
import DishGroup from './menu/[category]/components/DishGroup'

const Home = () => (
  <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
    <Banner />

    <BlockSection title="Меню">
      <div className="flex w-full flex-col gap-4 lg:hidden">
        <PagesLink />
      </div>
      <div className="hidden flex-col gap-4 lg:flex">
        <div className="mb-5 flex w-full flex-col gap-y-4">
          <Categories />
          <DishGroup currentCategory="main" />
        </div>
      </div>
    </BlockSection>

    <BlockSection title="Бронювання" id="booking">
      <Booking />
    </BlockSection>

    <BlockSection title="Про нас" id="about" className="p-0">
      <AboutUs />
    </BlockSection>
  </main>
)

export default Home
