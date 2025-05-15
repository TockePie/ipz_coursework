'use client'

import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import useUpdateUser from '@/hooks/api/use-update-user'
import useUserData from '@/hooks/api/use-user-data'
import useUserStore from '@/hooks/store/use-user-store'
import { PasswordReset } from '@/types/auth'

import ProfileForm from './ProfileForm'
import SuccessDialog from './SuccessDialog'

const ProfilePage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const methods = useForm<PasswordReset>()
  const { reset, setValue } = methods

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

  return (
    <FormProvider {...methods}>
      <ProfileForm
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
      />

      <SuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </FormProvider>
  )
}

export default ProfilePage
