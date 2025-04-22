import React, { FC } from 'react'

import { FormValues } from '../form-values'

const TIMES = [
  {
    id: 1,
    time: '10:00'
  },
  {
    id: 2,
    time: '11:00'
  },
  {
    id: 3,
    time: '12:00'
  },
  {
    id: 4,
    time: '13:00'
  },
  {
    id: 5,
    time: '14:00'
  }
]

const PickTime: FC<{
  date: FormValues['date']
}> = ({ date }) => {
  if (date) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2">Оберіть час</h3>
        <div className="bg-coral rounded-3xl p-3"></div>
      </div>
    )
  }

  return null
}

export default PickTime
