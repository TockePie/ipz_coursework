'use client'

import React, { useState } from 'react'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Button } from '@ui/button'
import { Dialog, DialogContent, DialogHeader } from '@ui/dialog'
import { Input } from '@ui/input'
import Link from 'next/link'
import validator from 'validator'

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (data: { name: string; phone: string }) => void
}

const GuestModal = (props: Props) => {
  const { open, onClose, onSubmit } = props
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    if (!name || !phone) {
      alert('Будь ласка, заповніть усі поля')
      return
    }

    if (phone && !validator.isMobilePhone(phone, 'uk-UA')) {
      alert('Неправильний номер телефону')
      return
    }

    onSubmit({ name, phone })
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-full rounded-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-coral text-left leading-6">
            Підтвердження бронювання
          </DialogTitle>
          <DialogDescription className="text-coral font-unbounded text-left text-sm font-light">
            Введіть вашу контактну інформацію для завершення бронюванням або
            увійдіть в акаунт
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input
            placeholder="Ім'я та прізвище"
            value={name}
            className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Номер телефону"
            value={phone}
            className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="flex w-full flex-col items-center justify-center gap-4">
            <Button
              onClick={handleSubmit}
              className="bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-10 w-46 text-white shadow-none"
            >
              Підтвердити
            </Button>
            <Button
              className="border-strong-cyan font-unbounded text-strong-cyan hover:bg-strong-cyan/10 hover:text-strong-cyan h-10 w-46 bg-transparent shadow-none"
              asChild
            >
              <Link href="/login">Увійти</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GuestModal
