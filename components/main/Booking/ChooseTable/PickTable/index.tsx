'use client'

import React from 'react'
import {
  ControllerRenderProps,
  useFormContext,
  useWatch
} from 'react-hook-form'
import { ScrollArea, ScrollBar } from '@ui/scroll-area'

import { useTable } from '@/hooks/api/use-reservation'
import { FormValues } from '@/types/form-values'

import TableCard from './TableCard'

const TABLE_IMAGES = [
  '/table1.png',
  '/table2.png',
  '/table3.png',
  '/table4.png',
  '/table5.png'
]

interface Props {
  field: ControllerRenderProps<FormValues, 'table'>
}

const PickTable = (props: Props) => {
  const { field } = props

  const { control } = useFormContext<FormValues>()
  const people = useWatch({
    control,
    name: 'people'
  })
  const query = useTable()

  const filteredTables = query.data?.filter((table) => {
    if (table.is_available) {
      return (table.capacity ?? 0) >= people
    }

    return false
  })

  if (!filteredTables) return null

  return (
    <ScrollArea className="border-brown/50 h-[500px] w-full rounded-xl border p-2">
      <div className="grid w-full max-w-2xl grid-cols-1 justify-items-center gap-4 lg:max-w-5xl lg:grid-cols-2">
        {filteredTables.map((table, index) => (
          <TableCard
            key={table.id}
            onClick={() => field.onChange(table.id)}
            className={field.value === table.id ? 'bg-pale-turquoise' : ''}
            number={table.table_number}
            capacity={table.capacity}
            is_available={table.is_available}
            image={TABLE_IMAGES[index % TABLE_IMAGES.length]}
          />
        ))}
      </div>

      <ScrollBar
        className="Scrollbar absolute top-0 right-0 h-full w-2 bg-transparent"
        orientation="vertical"
        style={{ display: 'block' }}
      />
    </ScrollArea>
  )
}

export default PickTable
