import React from 'react'

import Table from './Table'

const PickTable = () => (
  <div className="bg-mistyrose flex w-full flex-col gap-5 rounded-3xl p-3">
    <div className="flex gap-4">
      <Table number={1} />
    </div>
  </div>
)

export default PickTable
