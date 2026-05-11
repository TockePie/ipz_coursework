'use client'

import { useActionState, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Spinner from '@/components/Spinner'
import Colors from '@/types/enums/colors'

import { registerAction } from './actions'

export default function MainRegisterForm() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [data, formAction, isPending] = useActionState(registerAction, null)

  useEffect(() => {
    if (data?.success) {
      queryClient.invalidateQueries({ queryKey: ['user'] }).then(() => {
        router.push('/')
        router.refresh()
      })
    }
  }, [data, queryClient, router])

  return (
    <form
      className="z-10 flex w-full max-w-sm flex-col items-center gap-8 rounded-4xl bg-white/70 px-8 py-10 shadow-md backdrop-blur-sm md:max-w-md md:px-16"
      action={formAction}
    >
      <p className="font-unbounded text-brown text-2xl font-bold">
        Зареєструватися
      </p>
      <div className="flex w-full flex-col gap-4">
        {REGISTER_INPUTS.map((input) => (
          <div key={input.name}>
            <Input
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              className="border-bright-cyan font-unbounded border bg-white py-6 font-light shadow-none"
              minLength={input.minLength}
              required
            />

            {data?.errors?.[input.name] && (
              <p className="mt-1 text-sm text-red-500">
                {data?.errors?.[input.name]?.[0]}
              </p>
            )}
          </div>
        ))}
      </div>

      {data?.message && !data.success && (
        <p className="mt-1 text-sm text-red-500">{data.message}</p>
      )}

      <div className="flex w-54 flex-col items-stretch gap-4">
        <Button className="h-12" disabled={isPending} type="submit">
          {isPending && <Spinner color={Colors.WHITE} />}
          Зареєструватися
        </Button>

        <Button variant="outline" className="h-12" asChild>
          <Link href="/login">Увійти</Link>
        </Button>
      </div>
    </form>
  )
}

const REGISTER_INPUTS = [
  {
    name: 'first_name',
    minLength: 2,
    placeholder: "Ім'я",
    type: 'text'
  },
  {
    name: 'last_name',
    minLength: 2,
    placeholder: 'Прізвище',
    type: 'text'
  },
  {
    name: 'phone_number',
    minLength: 10,
    placeholder: 'Телефон',
    type: 'text'
  },
  {
    name: 'password',
    minLength: 8,
    placeholder: 'Пароль',
    type: 'password'
  }
] as const
