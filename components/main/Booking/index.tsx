'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import ChooseTable from './ChooseTable'
import { FormValues } from './form-values'
import PickDay from './PickDay'
import PickTime from './PickTime'

const Booking = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      date: undefined,
      time: undefined,
      people: 1,
      table: undefined
    }
  })
  const { handleSubmit, watch } = methods

  //TODO: add data type
  const onSubmit = async (data) => {
    console.log(data)
  }

  const date = watch('date')
  const time = watch('time')
  const people = watch('people')

  console.log({
    date,
    time,
    people
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex w-full flex-col justify-center gap-6 md:gap-12 lg:flex-row lg:items-start">
          <PickDay />
          <PickTime />
        </div>
        <ChooseTable />
      </form>
    </FormProvider>
  )
}

export default Booking
