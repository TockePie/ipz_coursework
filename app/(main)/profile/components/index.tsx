'use client'

import React, { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@ui/button'

import { PasswordReset } from '@/api/user'
import Spinner from '@/components/Spinner'
import useAuth from '@/hooks/api/use-auth'
import useUpdateUser from '@/hooks/api/use-update-user'
import useUserData from '@/hooks/api/use-user-data'
import useUserStore from '@/hooks/store/use-user-store'
import Colors from '@/types/enums/colors'

import PasswordFields from './PasswordFields'
import PersonalInfoFields from './PersonalInfoFields'
import SuccessDialog from './SuccessDialog'

const ProfilePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const methods = useForm<PasswordReset>()
  const { handleSubmit, setValue, reset } = methods

  const { logout } = useAuth()
  const { passwordReset, isLoading, isSuccess, error } = useUpdateUser()
  const { userInfo } = useUserStore((state) => state)
  useUserData()

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

  const onSubmitHandler: SubmitHandler<PasswordReset> = async (data) => {
    const formData = { ...data }

    if (!formData.old_password || formData.old_password.trim() === '') {
      delete formData.old_password
      delete formData.new_password
      delete formData.new_password_repeat
    }

    passwordReset(formData)
  }

  const handleLogOut = async () => {
    await logout()
    window.location.reload()
  }

  return (
    <FormProvider {...methods}>
      <main className="bg-cornsilk p-6">
        <form
          className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-y-6"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <h1>Змінити дані</h1>

          <Button onClick={handleLogOut} variant="outline" size="lg">
            Вийти з акаунту
          </Button>

          <PersonalInfoFields />
          <hr className="border-brown w-full" />
          <PasswordFields />

          {error && error.status !== 401 && (
            <p className="text-red-500">{error.message}</p>
          )}
          {error && error.status === 401 && (
            <p className="text-red-500">
              Здається, ви ввели неправильний пароль.
            </p>
          )}

          <Button size="xl" type="submit" disabled={isLoading}>
            {isLoading ? <Spinner color={Colors.WHITE} /> : 'Застосувати'}
          </Button>
        </form>

        <SuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </main>
    </FormProvider>
  )
}

export default ProfilePage
