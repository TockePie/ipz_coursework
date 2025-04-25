import React from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import { FormValues } from '../form-values'

import PeopleInput from './PeopleInput'
import PickTable from './PickTable'

const ChooseTable = () => {
  const { control } = useFormContext<FormValues>()
  const time = useWatch({
    control,
    name: 'time'
  })

  if (!time) return null

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3>Оберіть столик</h3>
      <h5>Кількість присутніх</h5>

      <PeopleInput />
      <PickTable />
    </div>
  )
}

export default ChooseTable
