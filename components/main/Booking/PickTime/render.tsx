import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { Button } from '@ui/button'
import clsx from 'clsx'

import { FormValues } from '../form-values'

import TIMES from './times'

const RenderComp = ({
  field
}: {
  field: ControllerRenderProps<FormValues, 'time'>
}) => {
  return (
    <div className="bg-light-coral grid w-full grid-cols-2 gap-4 rounded-3xl p-3">
      {TIMES.map((time, index) => (
        <Button
          key={index}
          onClick={() => field.onChange(time.timeFrom)}
          className={clsx(
            'font-unbounded text-brown bg-mistyrose text-md px-5 py-7 font-light',
            field.value === time.timeFrom && 'bg-cyan'
          )}
        >
          {time.label}
        </Button>
      ))}
    </div>
  )
}

export default RenderComp
