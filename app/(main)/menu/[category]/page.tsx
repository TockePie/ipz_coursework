import React from 'react'

import Banner from '@/components/main/Banner'
import BlockSection from '@/components/main/BlockSection'

import Categories from './components/Categories'
import ItemsGroup from './components/ItemsGroup'

const MenuCategoryPage = async ({
  params
}: {
  params: Promise<{ category: string }>
}) => {
  const { category } = await params

  return (
    <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
      <Banner />

      <BlockSection title="Меню">
        <Categories currentCategory={category} />
        <ItemsGroup category={category} />
      </BlockSection>
    </main>
  )
}

export default MenuCategoryPage
