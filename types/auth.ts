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

interface User {
  user_id: string
  first_name: string
  last_name: string
  phone_number: string
  is_admin: boolean
}

export type { AuthResponse, LoginCredentials, RegisterCredentials, User }
