import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { Minus, Plus } from 'lucide-react'

import Colors from '@/types/enums/colors'

import { FormValues } from '../../form-values'

const PeopleInput = () => {
  const { control } = useFormContext<FormValues>()

  const {
    field: { value, onChange }
  } = useController({
    name: 'people',
    control,
    defaultValue: 1,
    rules: {
      min: 1,
      max: 8
    }
  })

  const handleIncrement = () => {
    if (value < 8) onChange(Number(value) + 1)
  }

  const handleDecrement = () => {
    if (value > 1) onChange(Number(value) - 1)
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        size="icon"
        className="bg-light-coral border-brown h-14 w-14 rounded-full border shadow-none"
        onClick={handleDecrement}
        type="button"
        disabled={value <= 1}
      >
        <Minus color={Colors.BROWN} size={32} />
      </Button>
      <Input
        className="bg-mistyrose font-unbounded h-12 w-24 rounded-2xl border border-black text-center shadow-none"
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
        defaultValue={1}
        min={1}
        max={8}
      />
      <Button
        size="icon"
        className="bg-light-coral border-brown h-14 w-14 rounded-full border shadow-none"
        onClick={handleIncrement}
        type="button"
        disabled={value >= 8}
      >
        <Plus color={Colors.BROWN} size={32} />
      </Button>
    </div>
  )
}

export default PeopleInput
