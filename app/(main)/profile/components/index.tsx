'use client'

import { useActionState, useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@ui/button'
import Cookies from 'js-cookie'

import Spinner from '@/components/Spinner'
import useUserData from '@/hooks/api/use-user-data'
import Colors from '@/types/enums/colors'

import { profileUpdateAction } from './actions'
import InnerContainer from './InnerContainer'
import InputField from './InputField'
import SuccessDialog from './SuccessDialog'

export default function ProfilePage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [state, formAction, isPending] = useActionState(
    profileUpdateAction,
    null
  )
  const queryClient = useQueryClient()
  const { userInfo } = useUserData()

  useEffect(() => {
    if (state?.success) {
      queryClient.invalidateQueries({ queryKey: ['user'] })

      const timer = setTimeout(() => {
        setDialogOpen(true)
      }, 0)

      return () => clearTimeout(timer)
    }
  }, [state?.success, queryClient])

  const handleLogOut = async () => {
    Cookies.remove('user_id')
    queryClient.clear()
    window.location.reload()
  }

  return (
    <>
      <main className="bg-cornsilk p-6">
        <form
          className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-y-6"
          action={formAction}
        >
          <h1>Змінити дані</h1>

          <Button onClick={handleLogOut} variant="outline" size="lg">
            Вийти з акаунту
          </Button>

          <InnerContainer title="Персональні дані">
            {FIELDS.personal.map((item) => (
              <InputField
                key={item.name}
                label={item.label}
                type="text"
                name={item.name}
                error={state?.zodErrors?.[item.name]?.[0]}
                defaultValue={userInfo?.[item.name]}
              />
            ))}
          </InnerContainer>

          <hr className="border-brown w-full" />

          <InnerContainer title="Пароль">
            {FIELDS.passwords.map((item) => (
              <InputField
                key={item.name}
                label={item.label}
                type="password"
                name={item.name}
                error={state?.zodErrors?.[item.name]?.[0]}
              />
            ))}
          </InnerContainer>

          {!state?.success && (
            <p className="text-red-500">{state?.errorMessage}</p>
          )}

          <Button size="xl" type="submit" disabled={isPending}>
            {isPending ? <Spinner color={Colors.WHITE} /> : 'Застосувати'}
          </Button>
        </form>
      </main>

      <SuccessDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  )
}

const FIELDS = {
  personal: [
    {
      label: "Ім'я",
      name: 'first_name'
    },
    {
      label: 'Прізвище',
      name: 'last_name'
    },
    {
      label: 'Номер телефону',
      name: 'phone_number'
    }
  ],
  passwords: [
    {
      label: 'Чинний пароль',
      name: 'old_password'
    },
    {
      label: 'Новий пароль',
      name: 'new_password'
    },
    {
      label: 'Підтвердження паролю',
      name: 'new_password_repeat'
    }
  ]
} as const
