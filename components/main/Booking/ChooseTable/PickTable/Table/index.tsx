import React from 'react'

interface TableProps {
  width?: number
  number?: number
  seats?: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  }
}

const Table = (props: TableProps) => {
  const {
    width = 1,
    number,
    seats = {
      top: 1,
      right: 0,
      bottom: 1,
      left: 0
    }
  } = props

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <hr className="border-brown w-8/12 rounded-full border" />
      <div className="bg-light-coral rounded-xl p-4">
        <h5 className="text-white">№{number}</h5>
      </div>
      <hr className="border-brown w-8/12 rounded-full border" />
    </div>
  )
}

export default Table
