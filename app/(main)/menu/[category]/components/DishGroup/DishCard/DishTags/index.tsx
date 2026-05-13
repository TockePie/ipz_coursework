import { cx } from 'class-variance-authority'

import { Allergens, AllergensIcons } from '@/types/enums/allergens'

interface Props {
  tags: Allergens[]
  className?: string
}

export default function DishTags({ tags, className }: Props) {
  const filteredAllergens = tags
    .filter((tag) => Object.values(Allergens).includes(tag))
    .sort()

  return (
    <div className={cx('absolute top-2.5 right-2.5 flex gap-2', className)}>
      {filteredAllergens.map((tag) => {
        const Icon = AllergensIcons[tag]

        return (
          <div key={tag} className="flex h-5 w-5 items-center justify-center">
            <Icon className="h-full w-full" />
          </div>
        )
      })}
    </div>
  )
}
