import React from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import { FormValues } from '@/types/form-values'

import RenderComp from './render'

const PickTime = () => {
  const { control } = useFormContext<FormValues>()
  const date = useWatch({
    control,
    name: 'date'
  })

  if (!date) return null

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="mb-4">Оберіть час</h3>

      <Controller control={control} name="time" render={RenderComp} />
    </div>
  )
}

export default PickTime
