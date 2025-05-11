import React from 'react'

import AboutUs from '@/components/main/AboutUs'
import Banner from '@/components/main/Banner'
import BlockSection from '@/components/main/BlockSection'
import Booking from '@/components/main/Booking'
import PagesLink from '@/components/main/PagesLink'

const Home = () => (
  <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
    <Banner />

    <BlockSection title="Меню">
      <div className="flex w-full flex-col gap-4 lg:hidden">
        <PagesLink />
      </div>
      <div className="hidden flex-col gap-4 lg:flex">
        {/* TODO: replace with menu interception route */}
        <p className="text-center">
          У нас ви знайдете широкий вибір страв, які задовольнять будь-які
          смаки. Від свіжих салатів до смачних десертів - у нас є все!
        </p>
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
