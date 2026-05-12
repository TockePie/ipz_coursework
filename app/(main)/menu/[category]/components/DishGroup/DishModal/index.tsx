'use client'

import { Dialog, DialogContent, DialogTitle } from '@ui/dialog'

import { Dish } from '@/types/dish'

import DishImage from '../DishCard/DishImage'
import DishTags from '../DishCard/DishTags'

import Ingredients from './Ingredients'
import NoodleSizes from './NoodleSizes'

interface Props {
  item: Dish
  image: string | undefined
  isOpen: boolean
}

const DishModal = ({ item, image, isOpen }: Props) => {
  const handleClose = () => {
    const params = new URLSearchParams(window.location.search)
    params.delete('dish')
    window.history.replaceState(null, '', `?${params.toString()}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="flex flex-col items-center rounded-4xl bg-white/80 backdrop-blur-md max-md:px-0 sm:max-w-lg lg:max-w-4xl lg:flex-row">
        <DialogTitle className="sr-only">{item.name} details</DialogTitle>

        <DishImage
          image={image}
          name={item.name}
          isLoading={false}
          size={300}
          className="max-h-72 max-w-72 max-md:hidden"
        />
        <DishImage
          image={image}
          name={item.name}
          isLoading={false}
          size={200}
          className="max-h-72 max-w-72 md:hidden"
        />

        <div className="flex w-10/12 flex-col gap-2 lg:gap-5 lg:px-4">
          <p className="font-unbounded text-brown text-lg font-semibold lg:text-2xl">
            {item.name}
          </p>

          <p className="text-strong-cyan font-unbounded text-lg font-semibold">
            {
              item.variants.find((variant) => variant.is_default === true)
                ?.price
            }{' '}
            ₴
          </p>

          <Ingredients detailed_description={item.detailed_description} />

          <NoodleSizes
            variants={item.variants.filter(
              (variant) => variant.size_label !== null
            )}
          />
        </div>

        <DishTags tags={item.tags} className="top-3 right-10" />
      </DialogContent>
    </Dialog>
  )
}

export default DishModal
