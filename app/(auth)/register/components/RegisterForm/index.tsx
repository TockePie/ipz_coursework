'use client'

import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { RegisterCredentials } from '@/api/auth'
import { useAuth } from '@/hooks/use-auth'

import Buttons from './buttons'
import Fields from './fields'

const RegisterForm = () => {
  const { register, isLoading } = useAuth()

  const methods = useForm<RegisterCredentials>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => register(data)

  return (
    <FormProvider {...methods}>
      <form
        className="z-10 flex flex-col items-center gap-8 rounded-4xl bg-white/70 px-8 py-10 shadow-md backdrop-blur-sm md:px-24"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="font-unbounded text-brown text-2xl font-bold">
          Зареєструватися
        </p>

        <Fields />
        <Buttons />
      </form>
    </FormProvider>
  )
}

export default RegisterForm
