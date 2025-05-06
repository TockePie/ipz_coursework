import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '@ui/input'

type INPUTS = {
  name: string
  register: {
    required: string
    minLength: {
      value: number
      message: string
    }
    validate?: undefined
  }
  placeholder: string
  type: string
}

interface FieldsProps {
  INPUTS: INPUTS[]
}

const Fields = (props: FieldsProps) => {
  const { INPUTS } = props

  const {
    register,
    formState: { errors }
  } = useFormContext()

  const renderError = (name: string) =>
    errors[name] && (
      <p className="mt-1 text-sm text-red-500">
        {errors[name]?.message?.toString()}
      </p>
    )

  return (
    <div className="flex w-full flex-col gap-4">
      {INPUTS.map((input) => (
        <div key={input.name}>
          <Input
            type={input.type}
            placeholder={input.placeholder}
            className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
            {...register(input.name, input.register)}
          />

          {renderError(input.name)}
        </div>
      ))}
    </div>
  )
}

export default Fields
