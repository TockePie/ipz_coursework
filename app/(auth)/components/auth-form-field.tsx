// components/AuthFormFields.tsx
import React from 'react'
import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form'
import { Input } from '@ui/input'

type InputField = {
  name: string
  placeholder: string
  type: string
  register?: RegisterOptions<FieldValues, string>
}

const AuthFormFields = ({ inputs }: { inputs: InputField[] }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="flex w-full flex-col gap-4">
      {inputs.map((input) => (
        <div key={input.name}>
          <Input
            type={input.type}
            placeholder={input.placeholder}
            className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
            {...register(input.name, input.register)}
          />
          {errors[input.name] && (
            <p className="mt-1 text-sm text-red-500">
              {errors[input.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default AuthFormFields
