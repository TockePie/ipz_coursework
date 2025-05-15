interface LoginCredentials {
  phone_number: string
  password: string
}

interface RegisterCredentials extends LoginCredentials {
  first_name: string
  last_name: string
}

interface LoginResponse {
  message: string
  user_id: string
}

interface User {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  is_admin: boolean
}

export type { LoginCredentials, LoginResponse, RegisterCredentials, User }
