'use client'

import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@ui/button'
import { AxiosError } from 'axios'
import Cookies from 'js-cookie'

import { passwordReset } from '@/api/auth'
import Spinner from '@/components/Spinner'
import useUserData from '@/hooks/api/use-user-data'
import { ProfileUpdate, ProfileUpdateSchema } from '@/types/auth'
import Colors from '@/types/enums/colors'

import InnerContainer from './ProfileForm/InnerContainer'
import InputField from './ProfileForm/InputField'
import SuccessDialog from './SuccessDialog'

export default function AltProfilePage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const queryClient = useQueryClient()

  const methods = useForm<ProfileUpdate>({
    resolver: zodResolver(ProfileUpdateSchema),
    mode: 'onChange'
  })
  const { reset, setValue, handleSubmit } = methods

  const { mutate, isPending, error } = useMutation({
    mutationFn: passwordReset,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
      setDialogOpen(true)
      reset()
    },
    onError: (error: AxiosError) => {
      console.error('Update user error:', error)
    }
  })

  const { userInfo } = useUserData()

  useEffect(() => {
    if (userInfo) {
      setValue('first_name', userInfo.first_name)
      setValue('last_name', userInfo.last_name)
      setValue('phone_number', userInfo.phone_number)
    }
  }, [userInfo, setValue])

  const onSubmit = async (data: ProfileUpdate) => {
    const formData = { ...data }

    if (!formData.old_password?.trim()) {
      delete formData.old_password
      delete formData.new_password
      delete formData.new_password_repeat
    }

    mutate(formData)
  }

  const handleLogOut = async () => {
    Cookies.remove('user_id')
    queryClient.removeQueries({ queryKey: ['user'] })
    queryClient.clear()

    window.location.reload()
  }

  return (
    <FormProvider {...methods}>
      <main className="bg-cornsilk p-6">
        <form
          className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Змінити дані</h1>

          <Button onClick={handleLogOut} variant="outline" size="lg">
            Вийти з акаунту
          </Button>

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
            />
          </InnerContainer>
          <hr className="border-brown w-full" />
          <InnerContainer title="Пароль">
            <InputField
              label="Чинний пароль"
              type="password"
              name="old_password"
            />
            <InputField
              label="Новий пароль"
              type="password"
              name="new_password"
            />
            <InputField
              label="Підтвердження паролю"
              type="password"
              name="new_password_repeat"
            />
          </InnerContainer>

          {error && (
            <p className="text-red-500">
              {error.status === 401
                ? 'Здається, ви ввели неправильний пароль.'
                : error.message}
            </p>
          )}

          <Button size="xl" type="submit" disabled={isPending}>
            {isPending ? <Spinner color={Colors.WHITE} /> : 'Застосувати'}
          </Button>
        </form>
      </main>

      <SuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </FormProvider>
  )
}
