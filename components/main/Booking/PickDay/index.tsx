import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Calendar } from '@ui/calendar'

import { FormValues } from '../form-values'

const PickDay: FC<{ control: Control<FormValues> }> = ({ control }) => (
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

export default PickDay
