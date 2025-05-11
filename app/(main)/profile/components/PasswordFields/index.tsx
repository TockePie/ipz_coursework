import React from 'react'
import { useFormContext } from 'react-hook-form'

import InnerContainer from '../InnerContainer'
import InputField from '../InputField'

const PasswordFields = () => {
  const { watch, getValues } = useFormContext()
  const oldPassword = watch('old_password')

  const REGISTERS = {
    old_password: {
      validate: (value: string) =>
        !value ||
        value.length >= 8 ||
        'Пароль повинен містити не менше 8 символів'
    },
    new_password: {
      validate: (value: string) => {
        if (!oldPassword || oldPassword.trim() === '') return true
        return value.length >= 8 || 'Пароль повинен містити не менше 8 символів'
      },
      required: {
        value: !!oldPassword,
        message: "Це поле обов'язкове, якщо ви змінюєте пароль"
      }
    },
    new_password_repeat: {
      validate: (value: string) => {
        if (!oldPassword || oldPassword.trim() === '') return true
        if (value.length < 8)
          return 'Пароль повинен містити не менше 8 символів'
        if (value !== getValues('new_password')) return 'Паролі не збігаються'
        return true
      },
      required: {
        value: !!oldPassword,
        message: "Це поле обов'язкове, якщо ви змінюєте пароль"
      }
    }
  }

  return (
    <InnerContainer title="Пароль">
      <InputField
        label="Чинний пароль"
        type="password"
        name="old_password"
        customRegister={REGISTERS.old_password}
      />
      <InputField
        label="Новий пароль"
        type="password"
        name="new_password"
        customRegister={REGISTERS.new_password}
      />
      <InputField
        label="Підтвердження паролю"
        type="password"
        name="new_password_repeat"
        customRegister={REGISTERS.new_password_repeat}
      />
    </InnerContainer>
  )
}

export default PasswordFields
