import React from 'react'

import { Dish } from '@/types/dish'

const VariantList = ({ item }: { item: Dish }) => (
  <div>
    {item.variants.map((variant, index) => (
      <p key={index} className="font-unbounded text-brown text-sm font-light">
        {variant.size_label}
      </p>
    ))}
  </div>
)

export default VariantList
