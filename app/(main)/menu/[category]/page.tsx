import React from 'react'

import Banner from '@/components/main/Banner'
import BlockSection from '@/components/main/BlockSection'
import DishCategory from '@/types/enums/dish-category'

import Categories from './components/Categories'
import DishGroup from './components/DishGroup'

const MenuCategoryPage = async ({
  params
}: {
  params: Promise<{ category: DishCategory }>
}) => {
  const { category } = await params
  const currentCategory = (category as keyof typeof DishGroup) || 'main'

  return (
    <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
      <Banner />

      <BlockSection title="Меню">
        <div className="mb-5 flex w-full flex-col gap-y-4">
          <Categories currentCategory={currentCategory} />
          <DishGroup currentCategory={currentCategory} />
        </div>
      </BlockSection>
    </main>
  )
}

export default MenuCategoryPage
