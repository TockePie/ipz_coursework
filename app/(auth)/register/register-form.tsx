'use client'

import React from 'react'

import { RegisterCredentials } from '@/api/auth'
import useAuth from '@/hooks/use-auth'

import AuthForm from '../components/AuthPage/Form'

import REGISTER_INPUTS from './inputs'

const RegisterForm = () => {
  const { register, error } = useAuth()

  return (
    <AuthForm<RegisterCredentials>
      title="Зареєструватися"
      inputs={REGISTER_INPUTS}
      onSubmitHandler={register}
      error={error}
      firstBtnText="Зареєструватися"
      secondBtnText="Увійти"
      secondaryBtnRoute="login"
    />
  )
}

export default RegisterForm
