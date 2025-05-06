import axiosInstance from './instance'

interface LoginCredentials {
  phone_number: string
  password: string
}

interface RegisterCredentials extends LoginCredentials {
  first_name: string
  last_name: string
}

interface AuthResponse {
  user_id: string
}

const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post('/users/login', credentials)
  return data
}

const register = async (
  credentials: RegisterCredentials
): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post('/users/register', credentials)
  console.log(data)
  return data
}

export { login, type LoginCredentials, register, type RegisterCredentials }
