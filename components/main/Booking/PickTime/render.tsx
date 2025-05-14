import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { Button } from '@ui/button'
import clsx from 'clsx'

import { FormValues } from '@/types/form-values'

import TIMES from './times'

import styles from './styles.module.css'

interface Props {
  field: ControllerRenderProps<FormValues, 'time'>
}

const RenderComp = ({ field }: Props) => (
  <div className="bg-light-coral grid w-full grid-cols-2 gap-4 rounded-3xl p-3 md:grid-cols-3">
    {TIMES.map((time, index) => (
      <Button
        key={index}
        type="button"
        onClick={() => field.onChange(time.timeFrom)}
        className={clsx(
          'font-unbounded text-brown bg-mistyrose text-md active:bg-mistyrose/80 hover:bg-mistyrose/90 px-5 py-7 font-light',
          field.value === time.timeFrom && styles.checked
        )}
      >
        {time.label}
      </Button>
    ))}
  </div>
)

export default RenderComp
