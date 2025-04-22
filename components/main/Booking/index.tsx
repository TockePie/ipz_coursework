'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import { FormValues } from './form-values'
import PickDay from './PickDay'
import PickTime from './PickTime'

const Booking = () => {
  const { control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      date: undefined
    }
  })

  const date = watch('date')
  console.log(date)

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <PickDay control={control} />
      <PickTime date={date} />
    </form>
  )
}

export default Booking
