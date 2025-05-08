import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
  User
} from '@/types/auth'

import axiosInstance from './instance'

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post('/users/login', credentials)
  return data
}

const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post('/users/register', credentials)
  return data
}

const getUser = async (user_id: string): Promise<User> => {
  const { data } = await axiosInstance.get(`/users/${user_id}`)
  return data
}

export {
  getUser,
  login,
  type LoginCredentials,
  register,
  type RegisterCredentials,
  type User
}
