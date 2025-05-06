import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '@ui/input'
import validator from 'validator'

const INPUTS = [
  {
    name: 'first_name',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 2,
        message: 'Мінімум 2 символи'
      }
    },
    placeholder: "Ім'я",
    type: 'text'
  },
  {
    name: 'last_name',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 2,
        message: 'Мінімум 2 символи'
      }
    },
    placeholder: 'Прізвище',
    type: 'text'
  },
  {
    name: 'phone_number',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 10,
        message: 'Мінімум 10 цифр'
      },
      validate: (value: string) =>
        validator.isMobilePhone(value, 'uk-UA')
          ? true
          : 'Неправильний номер телефону'
    },
    placeholder: 'Телефон',
    type: 'text'
  },
  {
    name: 'password',
    register: {
      required: 'Це поле обов’язкове',
      minLength: {
        value: 8,
        message: 'Пароль має містити щонайменше 8 символів'
      }
    },
    placeholder: 'Пароль',
    type: 'password'
  }
]

const Fields = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

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

export default Fields
