import React from 'react'

import Colors from '@/types/enums/colors'

import AuthPage from '../components/AuthPage'

import RegisterForm from './register-form'

export const metadata = {
  title: 'Register - Bunnfee'
}

const RegisterPage = () => (
  <AuthPage color={Colors.CORNSILK} FormComponent={RegisterForm} />
)

export default RegisterPage
