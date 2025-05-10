import React from 'react'

import { Allergens, AllergensIcons } from '@/types/enums/allergens'

interface Props {
  tags: string[]
}

const DishTags = (props: Props) => {
  const { tags } = props
  const filteredAllergens = tags
    .filter((tag) => Object.values(Allergens).includes(tag as Allergens))
    .sort()

  return (
    <div className="absolute top-2.5 right-2.5 flex gap-2">
      {filteredAllergens.map((tag) => {
        const Icon = AllergensIcons[tag as Allergens]

        return (
          <div key={tag} className="flex h-5 w-5 items-center justify-center">
            <Icon className="h-full w-full" />
          </div>
        )
      })}
    </div>
  )
}

export default DishTags
