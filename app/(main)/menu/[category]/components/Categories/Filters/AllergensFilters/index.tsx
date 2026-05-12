'use client'

import { Checkbox } from '@ui/checkbox'

import { Allergens, AllergensLabels } from '@/types/enums/allergens'

interface Props {
  selected: Allergens[]
  onToggle: (value: Allergens) => void
}

export default function AllergensFilter({ selected, onToggle }: Props) {
  return (
    <div className="flex w-full flex-col gap-5">
      <h4>Не показувати страви, що містять:</h4>
      <div className="flex flex-col gap-5">
        {Object.entries(AllergensLabels).map(([key, label]) => {
          const allergen = key as Allergens

          return (
            <div key={key} className="flex items-center gap-3">
              <Checkbox
                id={`checkbox-${key}`}
                checked={selected.includes(allergen)}
                onCheckedChange={() => onToggle(allergen)}
                className="border-brown/30 data-[state=checked]:bg-brown data-[state=checked]:border-brown size-8 rounded-full"
              />
              <label
                htmlFor={`checkbox-${key}`}
                className="font-unbounded text-brown font-light"
              >
                {label}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
