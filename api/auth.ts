import {
  LoginCredentials,
  LoginResponse,
  ProfileUpdate,
  RegisterCredentials,
  User
} from '@/types/auth'

import { api } from './instance'

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const { data } = await api.post('/users/login', credentials)
  return data
}

export async function register(
  credentials: RegisterCredentials
): Promise<User> {
  const { data } = await api.post('/users/register', credentials)
  return data
}

const getUser = async (user_id: string): Promise<User> => {
  const { data } = await api.get(`/users/${user_id}`)
  return data
}

//TODO: change to profileUpdate()
export async function passwordReset(props: ProfileUpdate) {
  const { data } = await api.post('/users/passwordresetclassic', props)

  return data
}

export { getUser }
