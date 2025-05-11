'use client'

import React from 'react'
import { AxiosError } from 'axios'

import { LoginCredentials } from '@/api/auth'
import useAuth from '@/hooks/api/use-auth'

import AuthForm from '../components/AuthPage/Form'

import LOGIN_INPUTS from './inputs'

const LoginForm = () => {
  const { login, error } = useAuth()

  return (
    <AuthForm<LoginCredentials>
      title="Увійти"
      inputs={LOGIN_INPUTS}
      onSubmitHandler={login}
      error={error as AxiosError}
      firstBtnText="Увійти"
      secondBtnText="Зареєструватися"
      secondaryBtnRoute="register"
    />
  )
}

export default LoginForm
