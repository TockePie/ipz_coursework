'use client'

import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@ui/button'

import useAuth from '@/hooks/api/use-auth'
import { useReservation } from '@/hooks/api/use-reservation'
import useUserData from '@/hooks/api/use-user-data'
import useUserStore from '@/hooks/store/use-user-store'
import { FormValues } from '@/types/form-values'

import ChooseTable from './ChooseTable'
import ConfirmModal from './ConfirmModal'
import GuestModal from './GuestModal'
import PickDay from './PickDay'
import PickTime from './PickTime'

const Booking = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openGuestModal, setOpenGuestModal] = useState(false)
  const [guestInfo, setGuestInfo] = useState({ name: '', email: '', phone: '' })
  const methods = useForm<FormValues>({
    defaultValues: {
      date: undefined,
      time: undefined,
      people: 1,
      table: undefined
    }
  })
  const { handleSubmit, watch } = methods
  const { isAuthenticated } = useAuth()
  const { createReservation, isSuccess, isError, error } = useReservation()
  const { userInfo } = useUserStore()
  useUserData()

  const date = watch('date')
  const time = watch('time')
  const people = watch('people')
  const table = watch('table')

  const onSubmit = async (formData: FormValues) => {
    const isAuth = isAuthenticated()

    if (!isAuth && (!guestInfo.name || !guestInfo.phone)) {
      setOpenGuestModal(true)
      return
    }

    if (isAuth && !userInfo) {
      alert(
        'Не вдалося отримати дані користувача. Спробуйте вийти з системи та увійти знову.'
      )
      return
    }

    const payload = {
      date: formData.date?.toISOString().split('T')[0],
      slot_start: formData.time,
      table_id: Number(formData.table),
      guest_count: formData.people,
      user_id: isAuth ? userInfo!.id : undefined,
      phone_number: isAuth ? userInfo!.phone_number : guestInfo.phone,
      name: isAuth
        ? `${userInfo!.first_name} ${userInfo!.last_name}`
        : guestInfo.name,
      comments: ''
    }

    createReservation(payload)

    if (isSuccess) {
      alert('Резервація успішна!')
      setOpenModal(false)
    }

    if (isError) {
      alert(
        `Помилка при створенні резервації. Спробуйте ще раз. Текст помилки: ${error?.message}`
      )
    }
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
            <Button
              type="button"
              onClick={() => setOpenModal(true)}
              className="bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-12 w-56 text-lg text-white shadow-none"
            >
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
            handleSubmit(onSubmit)()
          }}
        />
      </form>
    </FormProvider>
  )
}

export default Booking
