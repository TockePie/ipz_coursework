// ProfilePage.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { PasswordReset } from '@/api/user'
import useAuth from '@/hooks/api/use-auth'
import useUpdateUser from '@/hooks/api/use-update-user'
import useUserData from '@/hooks/api/use-user-data'
import useUserStore from '@/hooks/store/use-user-store'

import ProfileForm from './ProfileForm'
import SuccessDialog from './SuccessDialog'

const ProfilePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const methods = useForm<PasswordReset>()
  const { reset, setValue } = methods

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

  const handleSubmit = async (data: PasswordReset) => {
    const formData = { ...data }

    if (!formData.old_password?.trim()) {
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
      <ProfileForm
        onSubmit={handleSubmit}
        onLogout={handleLogOut}
        error={error}
        isLoading={isLoading}
      />

      <SuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </FormProvider>
  )
}

export default ProfilePage
