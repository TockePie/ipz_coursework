import React from 'react'
import { Button } from '@ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@ui/dialog'
import Image from 'next/image'

import { FormValues } from '@/types/form-values'

import DataContainer from './DataContainer'

interface Props {
  open: boolean
  onClose: () => void
  data: FormValues
}

const ConfirmModal = (props: Props) => {
  const { open, onClose } = props

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full rounded-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-coral text-left leading-6">
            Підтвердження бронювання
          </DialogTitle>
          <DialogDescription className="text-coral font-unbounded text-left font-light">
            Ваше бронювання буде надіслано адміністрації
          </DialogDescription>
        </DialogHeader>

        <DataContainer />

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-strong-cyan font-unbounded text-strong-cyan hover:bg-strong-cyan/10 hover:text-strong-cyan h-10 bg-transparent shadow-none"
          >
            Скасувати
          </Button>
          <Button
            className="bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-10 text-white shadow-none"
            type="submit"
            form="booking-form"
          >
            Підтвердити
          </Button>
        </DialogFooter>

        <Image
          src="/bunny-booking.png"
          alt="bunny-on-booking"
          width={120}
          height={254}
          className="absolute top-10 right-0 -z-10"
        />
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmModal
