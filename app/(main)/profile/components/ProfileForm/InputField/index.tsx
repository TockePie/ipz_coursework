import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '@ui/input'

interface Props extends ComponentProps<'input'> {
  label: string
  name: string
}

export default function InputField({
  label,
  type,
  defaultValue,
  name,
  required = false,
  ...props
}: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const error = errors[name]

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-unbounded text-brown text-sm">
        {label}
        {required && <span className="font-unbounded text-red-500">*</span>}
      </label>
      <Input
        type={type}
        defaultValue={defaultValue}
        aria-invalid={error ? 'true' : 'false'}
        className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
        {...register(name)}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error?.message?.toString()}
        </p>
      )}
    </div>
  )
}
