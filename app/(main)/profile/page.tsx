'use client'

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@ui/button'
import clsx from 'clsx'
import validator from 'validator'

import useUserStore from '@/hooks/use-user-store'

import InnerContainer from './components/InnerContainer'
import InputField from './components/InputField'

//TODO: finish the form and add validation
const ProfilePage = () => {
  const { userInfo } = useUserStore((state) => state)
  const methods = useForm()

  const {
    handleSubmit,
    formState: { isLoading }
  } = methods

  const onSubmitHandler = async (data) => {
    console.log('Form data:', data)
  }

  return (
    <FormProvider {...methods}>
      <main className="bg-cornsilk p-6">
        <form
          className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-y-6"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <h1>Змінити дані</h1>

          <InnerContainer title="Персональні дані">
            <InputField
              label="Ім'я"
              type="text"
              defaultValue={userInfo?.first_name}
              name="first_name"
            />
            <InputField
              label="Прізвище"
              type="text"
              defaultValue={userInfo?.last_name}
              name="last_name"
            />
            <InputField
              label="Номер телефону"
              type="text"
              defaultValue={userInfo?.phone_number}
              name="phone_number"
              customRegister={{
                validate: (value: string) =>
                  validator.isMobilePhone(value, 'uk-UA')
                    ? true
                    : 'Неправильний номер телефону'
              }}
            />
          </InnerContainer>

          <hr className="border-brown w-full" />

          <InnerContainer title="Пароль">
            <InputField
              label="Чинний пароль"
              type="password"
              name="old_password"
              customRegister={{
                validate: (value: string) =>
                  value.length >= 8 ||
                  'Пароль повинен містити не менше 8 символів'
              }}
            />
            <InputField
              label="Новий пароль"
              type="password"
              name="new_password"
              customRegister={{
                validate: (value: string) =>
                  value.length >= 8 ||
                  'Пароль повинен містити не менше 8 символів',
                required: "Це поле обов'язкове"
              }}
            />
            <InputField
              label="Підтвердження паролю"
              type="password"
              name="new_password_repeat"
              customRegister={{
                validate: (value: string) =>
                  value.length >= 8 ||
                  'Пароль повинен містити не менше 8 символів',
                required: "Це поле обов'язкове"
              }}
            />
          </InnerContainer>

          <Button
            className={clsx(
              'bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-12 w-56 text-base text-white shadow-none',
              isLoading && 'cursor-not-allowed select-none'
            )}
            type="submit"
            disabled={isLoading}
          >
            Застосуати
          </Button>
        </form>
      </main>
    </FormProvider>
  )
}

export default ProfilePage
