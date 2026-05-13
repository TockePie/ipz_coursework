'use client'

import { useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@ui/button'

import { postReservation } from '@/api/reservation'
import useUserData from '@/hooks/use-user-data'
import { FormValues } from '@/types/form-values'

import ChooseTable from './ChooseTable'
import ConfirmModal from './ConfirmModal'
import GuestModal from './GuestModal'
import PickDay from './PickDay'
import PickTime from './PickTime'

export default function Booking() {
  const [openModal, setOpenModal] = useState(false)
  const [openGuestModal, setOpenGuestModal] = useState(false)
  const [guestInfo, setGuestInfo] = useState({ name: '', email: '', phone: '' })

  const { userInfo } = useUserData()

  const methods = useForm<FormValues>({
    defaultValues: {
      people: 1
    }
  })
  const { handleSubmit, control } = methods
  const [date, time, people, table] = useWatch({
    control,
    name: ['date', 'time', 'people', 'table']
  })

  const { mutate: createReservation } = useMutation({
    mutationFn: postReservation,
    onSuccess: () => {
      alert('Резервація успішна!')
      setOpenModal(false)
    },
    onError: (error) => {
      alert(
        `Помилка при створенні резервації. Спробуйте ще раз. Текст помилки: ${error?.message}`
      )
    }
  })

  const onSubmit = async (formData: FormValues) => {
    if (!userInfo && (!guestInfo.name || !guestInfo.phone)) {
      setOpenGuestModal(true)
      return
    }

    if (!formData.date || !formData.time || !formData.table) {
      alert("Будь ласка, заповніть усі обов'язкові поля")
      return
    }

    const payload = {
      date: formData.date.toISOString().split('T')[0],
      slot_start: formData.time,
      table_id: Number(formData.table),
      guest_count: formData.people,
      user_id: userInfo ? Number(userInfo.id) : null,
      phone_number: userInfo ? userInfo.phone_number : guestInfo.phone,
      name: userInfo
        ? `${userInfo.first_name} ${userInfo.last_name}`
        : guestInfo.name,
      comments: ''
    }
    createReservation(payload)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-5 flex flex-col gap-6"
        id="booking-form"
      >
        <div className="flex w-full flex-col justify-center gap-6 md:gap-12 lg:flex-row lg:items-start">
          <PickDay />
          <PickTime />
        </div>
        <ChooseTable />

        <div className="flex w-full flex-col items-center justify-center">
          {table && (
            <Button type="button" onClick={() => setOpenModal(true)} size="xl">
              Забронювати
            </Button>
          )}
        </div>

        <ConfirmModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          data={{
            date,
            time,
            people,
            table
          }}
        />

        <GuestModal
          open={openGuestModal}
          onClose={() => setOpenGuestModal(false)}
          onSubmit={(data) => {
            setGuestInfo({ ...data, email: '' })
            setOpenGuestModal(false)
            setTimeout(() => handleSubmit(onSubmit)(), 0)
          }}
        />
      </form>
    </FormProvider>
  )
}
