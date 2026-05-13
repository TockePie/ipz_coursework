'use client'

import { useState } from 'react'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Button } from '@ui/button'
import { Dialog, DialogContent, DialogHeader } from '@ui/dialog'
import { Input } from '@ui/input'
import Link from 'next/link'
import z from 'zod'

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (data: { name: string; phone: string }) => void
}

const guestSchema = z.object({
  name: z.string().min(2, 'Будь ласка, заповніть усі поля'),
  phone: z
    .string()
    .regex(/^\+380\d{9}$/, 'Неправильний формат українського номера')
})

const GuestModal = (props: Props) => {
  const { open, onClose, onSubmit } = props
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = () => {
    const result = guestSchema.safeParse({ name, phone })

    if (!result.success) {
      const formattedErrors = result.error.flatten()

      const firstErrorMessage =
        formattedErrors.fieldErrors.name?.[0] ||
        formattedErrors.fieldErrors.phone?.[0]

      alert(firstErrorMessage || 'Помилка валідації')
      return
    }

    onSubmit(result.data)
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

          <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row-reverse">
            <Button onClick={handleSubmit} size="lg">
              Підтвердити
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/login">Увійти</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GuestModal
