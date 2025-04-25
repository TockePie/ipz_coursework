import React from 'react'

import BrandSection from './BrandSection'
import Links from './Links'
import WeAreHere from './WeAreHere'

const Footer = () => (
  <footer className="bg-light-coral text-cornsilk flex flex-col items-start gap-9 p-6 md:items-start md:p-10 lg:px-16">
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-9 lg:flex-row-reverse lg:items-start lg:justify-between">
      <Links />
      <WeAreHere />
    </div>

    <BrandSection />
  </footer>
)

export default Footer
