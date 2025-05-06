'use client'

import React, { ReactNode } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { AxiosError } from 'axios'

import Buttons from '@/app/(auth)/components/AuthPage/Form/buttons'
import Fields from '@/app/(auth)/components/AuthPage/Form/fields'

type AuthFormProps<T extends FieldValues> = {
  title: string
  inputs: any[]
  onSubmitHandler: (data: T) => void
  error: unknown
  firstBtnText: string
  secondBtnText: string
  secondaryBtnRoute: string
}

function AuthForm<T extends FieldValues>(props: AuthFormProps<T>) {
  const {
    title,
    inputs,
    onSubmitHandler,
    error,
    firstBtnText,
    secondBtnText,
    secondaryBtnRoute
  } = props

  const methods = useForm<T>()
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        className="z-10 flex w-full max-w-sm flex-col items-center gap-8 rounded-4xl bg-white/70 px-8 py-10 shadow-md backdrop-blur-sm md:max-w-md md:px-16"
        onSubmit={handleSubmit(onSubmitHandler as SubmitHandler<T>)}
      >
        <p className="font-unbounded text-brown text-2xl font-bold">{title}</p>
        <Fields INPUTS={inputs} />

        {(error as ReactNode) && (
          <p className="mt-1 text-sm text-red-500">
            {(
              (error as AxiosError)?.response?.data as any
            )?.message?.toString() ||
              (error as AxiosError)?.message?.toString() ||
              'An error occurred'}
          </p>
        )}

        <Buttons
          firstBtnText={firstBtnText}
          secondBtnText={secondBtnText}
          secondaryBtnRoute={secondaryBtnRoute}
        />
      </form>
    </FormProvider>
  )
}

export default AuthForm
