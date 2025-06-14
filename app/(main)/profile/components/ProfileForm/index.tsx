import React from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import { Button } from '@ui/button'
import { AxiosError } from 'axios'

import Spinner from '@/components/Spinner'
import useAuth from '@/hooks/api/use-auth'
import { PasswordReset } from '@/types/auth'
import Colors from '@/types/enums/colors'

import PasswordFields from './PasswordFields'
import PersonalInfoFields from './PersonalInfoFields'

interface Props {
  onSubmit: SubmitHandler<PasswordReset>
  isLoading: boolean
  error?: AxiosError<unknown, any> | null
}

const ProfileForm = ({ onSubmit, isLoading, error }: Props) => {
  const { handleSubmit } = useFormContext<PasswordReset>()
  const { logout } = useAuth()

  const handleLogOut = async () => {
    await logout()
    window.location.reload()
  }

  return (
    <main className="bg-cornsilk p-6">
      <form
        className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Змінити дані</h1>

        <Button onClick={handleLogOut} variant="outline" size="lg">
          Вийти з акаунту
        </Button>

        <PersonalInfoFields />
        <hr className="border-brown w-full" />
        <PasswordFields />

        {error && (
          <p className="text-red-500">
            {error.status === 401
              ? 'Здається, ви ввели неправильний пароль.'
              : error.message}
          </p>
        )}

        <Button size="xl" type="submit" disabled={isLoading}>
          {isLoading ? <Spinner color={Colors.WHITE} /> : 'Застосувати'}
        </Button>
      </form>
    </main>
  )
}

export default ProfileForm
