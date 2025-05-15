import {
  LoginCredentials,
  LoginResponse,
  PasswordReset,
  RegisterCredentials,
  User
} from '@/types/auth'

import { api } from './instance'

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const { data } = await api.post('/users/login', credentials)
  return data
}

const register = async (credentials: RegisterCredentials): Promise<User> => {
  const { data } = await api.post('/users/register', credentials)
  return data
}

const getUser = async (user_id: string): Promise<User> => {
  const { data } = await api.get(`/users/${user_id}`)
  return data
}

const passwordReset = async (props: PasswordReset) => {
  const {
    first_name,
    last_name,
    phone_number,
    old_password,
    new_password,
    new_password_repeat
  } = props

  const { data } = await api.post('/users/passwordresetclassic', {
    first_name,
    last_name,
    phone_number,
    old_password,
    new_password,
    new_password_repeat
  })

  return data
}

export { getUser, login, passwordReset, register }
