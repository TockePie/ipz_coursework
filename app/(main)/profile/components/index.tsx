'use client'

import React, { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@ui/button'
import { Dialog, DialogContent } from '@ui/dialog'
import clsx from 'clsx'
import Link from 'next/link'
import validator from 'validator'

import { PasswordReset } from '@/api/user'
import useUpdateUser from '@/hooks/use-update-user'
import useUserData from '@/hooks/use-user-data'
import useUserStore from '@/hooks/use-user-store'

import InnerContainer from './InnerContainer'
import InputField from './InputField'

const ProfilePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const { passwordReset, isLoading, isSuccess, error } = useUpdateUser()
  const { userInfo } = useUserStore((state) => state)
  useUserData()
  const methods = useForm<PasswordReset>()
  const { handleSubmit, setValue, watch, reset } = methods

  useEffect(() => {
    if (userInfo) {
      setValue('first_name', userInfo.first_name)
      setValue('last_name', userInfo.last_name)
      setValue('phone_number', userInfo.phone_number)
    }
  }, [userInfo, setValue])

  useEffect(() => {
    if (isSuccess) {
      setDialogOpen(true)
      reset()
    }
  }, [isSuccess, reset])

  const oldPassword = watch('old_password')

  const onSubmitHandler: SubmitHandler<PasswordReset> = async (data) => {
    const formData = { ...data }

    if (!formData.old_password || formData.old_password.trim() === '') {
      delete formData.old_password
      delete formData.new_password
      delete formData.new_password_repeat
    }

    passwordReset(formData)
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
                  !value ||
                  value.length >= 8 ||
                  'Пароль повинен містити не менше 8 символів'
              }}
            />
            <InputField
              label="Новий пароль"
              type="password"
              name="new_password"
              customRegister={{
                validate: (value: string) => {
                  if (!oldPassword || oldPassword.trim() === '') return true
                  return (
                    value.length >= 8 ||
                    'Пароль повинен містити не менше 8 символів'
                  )
                },
                required: {
                  value: !!oldPassword,
                  message: "Це поле обов'язкове, якщо ви змінюєте пароль"
                }
              }}
            />
            <InputField
              label="Підтвердження паролю"
              type="password"
              name="new_password_repeat"
              customRegister={{
                validate: (value: string) => {
                  if (!oldPassword || oldPassword.trim() === '') return true
                  if (value.length < 8)
                    return 'Пароль повинен містити не менше 8 символів'
                  if (value !== methods.getValues('new_password'))
                    return 'Паролі не збігаються'
                  return true
                },
                required: {
                  value: !!oldPassword,
                  message: "Це поле обов'язкове, якщо ви змінюєте пароль"
                }
              }}
            />
          </InnerContainer>

          {error && error.status !== 401 && (
            <p className="text-red-500">{error.message}</p>
          )}
          {error && error.status === 401 && (
            <p className="text-red-500">
              Здається, ви ввели неправильний пароль.
            </p>
          )}

          <Button
            className={clsx(
              'bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-12 w-56 text-base text-white shadow-none',
              isLoading && 'cursor-not-allowed select-none'
            )}
            type="submit"
            disabled={isLoading}
          >
            Застосувати
          </Button>
        </form>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="flex flex-col items-center text-center sm:max-w-md">
            <h2 className="text-lg font-semibold">Вітаємо</h2>
            <p className="text-brown/80 font-unbounded mt-2 text-sm font-light">
              Ваші дані успішно оновлено.
            </p>
            <Button
              className="bg-strong-cyan hover:bg-strong-cyan/80 active:bg-strong-cyan/70 font-unbounded mt-4 text-white"
              onClick={() => setDialogOpen(false)}
              asChild
            >
              <Link href="/">На головну</Link>
            </Button>
          </DialogContent>
        </Dialog>
      </main>
    </FormProvider>
  )
}

export default ProfilePage
