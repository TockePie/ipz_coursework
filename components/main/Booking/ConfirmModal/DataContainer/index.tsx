import React from 'react'
import { useFormContext } from 'react-hook-form'

import { useTable } from '@/hooks/api/use-reservation'
import { FormValues } from '@/types/form-values'

const DataContainer = () => {
  const { watch } = useFormContext<FormValues>()
  const table = useTable()
  const tableNumber = table.data?.find(
    (item) => item.id === Number(watch('table'))
  )

  const data = {
    date: watch('date'),
    time: watch('time'),
    people: watch('people'),
    table: watch('table')
  }

  const FIELD = [
    {
      name: 'date',
      label: 'дата',
      data: data.date?.toLocaleDateString('uk-UA', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
      })
    },
    {
      name: 'time',
      label: 'час',
      data: data.time
        ? new Date(`1970-01-01T${data.time}`).toLocaleTimeString('uk-UA', {
            hour: '2-digit',
            minute: '2-digit'
          })
        : ''
    },
    {
      name: 'people',
      label: 'к-ть',
      data: `${data.people} (людей)`
    },
    {
      name: 'table',
      label: 'стіл',
      data: `№ ${tableNumber?.table_number} (стіл)`
    }
  ]

  return (
    <div className="bg-mistyrose/50 border-brown/70 mx-auto flex w-full max-w-76 flex-col gap-3.5 rounded-2xl border p-4 backdrop-blur-xs">
      {FIELD.map((field) => (
        <div key={field.name} className="flex items-center justify-between">
          <span className="text-pale font-unbounded text-lg">
            {field.label}:
          </span>
          <span className="text-brown font-unbounded text-lg font-semibold">
            {field.data}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DataContainer
