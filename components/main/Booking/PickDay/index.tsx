import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Calendar } from '@ui/calendar'

import { FormValues } from '@/types/form-values'

const PickDay = () => {
  const { control } = useFormContext<FormValues>()

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-2">Оберіть дату</h3>

      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            initialFocus
          />
        )}
      />
    </div>
  )
}

export default PickDay
