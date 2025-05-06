'use client'

import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'

import { LoginCredentials } from '@/api/auth'
import { useAuth } from '@/hooks/use-auth'

import Buttons from './buttons'
import Fields from './fields'

const LoginForm = () => {
  const { login, error } = useAuth()

  const methods = useForm<LoginCredentials>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<LoginCredentials> = (data) => login(data)

  const Error = () =>
    error && (
      <p className="mt-1 text-sm text-red-500">
        {((error as AxiosError)?.response?.data as any)?.message?.toString() ||
          error.message}
      </p>
    )

  return (
    <FormProvider {...methods}>
      <form
        className="z-10 flex w-full max-w-sm flex-col items-center gap-8 rounded-4xl bg-white/70 px-8 py-10 shadow-md backdrop-blur-sm md:max-w-md md:px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="font-unbounded text-brown text-2xl font-bold">Увійти</p>
        <Fields />
        <Error />
        <Buttons />
      </form>
    </FormProvider>
  )
}

export default LoginForm
