import React from 'react'

import Colors from '@/types/enums/colors'

import AuthPage from '../components/AuthPage'

import LoginForm from './login-form'

export const metadata = {
  title: 'Login - Bunnfee'
}

const LoginPage = () => (
  <AuthPage color={Colors.MISTYROSE} FormComponent={LoginForm} />
)

export default LoginPage
