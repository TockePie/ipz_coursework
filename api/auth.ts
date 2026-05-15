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
  return await api.post<LoginResponse, LoginCredentials>(
    '/users/login',
    credentials
  )
}

export async function register(
  credentials: RegisterCredentials
): Promise<User> {
  return await api.post<User, RegisterCredentials>(
    '/users/register',
    credentials
  )
}

export async function getUser(user_id: string): Promise<User> {
  return await api.get<User>(`/users/${user_id}`)
}

export async function profileUpdate(props: ProfileUpdate): Promise<string> {
  return await api.post<string, ProfileUpdate>(
    '/users/passwordresetclassic',
    props
  )
}
