import React from 'react'

import Banner from '@/components/main/Banner'
import BlockSection from '@/components/main/BlockSection'
import Booking from '@/components/main/Booking'
import PagesLink from '@/components/main/PagesLink'

const Home = () => {
  return (
    <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
      <Banner />

      <BlockSection title="Меню" className="flex flex-col gap-4">
        <PagesLink />
      </BlockSection>

      <BlockSection title="Бронювання" className="flex flex-col gap-4">
        <Booking />
      </BlockSection>
    </main>
  )
}

export default Home
