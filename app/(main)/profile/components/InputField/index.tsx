import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '@ui/input'

interface Props extends ComponentProps<'input'> {
  label: string
  name: string
  customRegister?: {
    validate?: (value: string) => boolean | string
    required?:
      | string
      | {
          value: boolean
          message: string
        }
  }
}

const InputField = (inputProps: Props) => {
  const {
    label,
    type,
    defaultValue,
    name,
    required = false,
    customRegister,
    ...props
  } = inputProps

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
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-unbounded text-brown text-sm">
        {label}
        {required && <span className="font-unbounded text-red-500">*</span>}
      </label>
      <Input
        type={type}
        defaultValue={defaultValue}
        aria-invalid={errors[name] ? 'true' : 'false'}
        className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
        {...register(name, customRegister)}
        {...props}
      />

      {renderError(name)}
    </div>
  )
}

export default InputField
