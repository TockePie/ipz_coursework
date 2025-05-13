import React from 'react'

import TableCard from './TableCard'

const PickTable = () => {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 justify-items-center gap-4 lg:max-w-5xl lg:grid-cols-2">
      <TableCard number={1} people={2} is_available />
      <TableCard number={2} people={4} />
    </div>
  )
}

export default PickTable
