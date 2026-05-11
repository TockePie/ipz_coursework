import { z } from 'zod'

export const LoginSchema = z.object({
  phone_number: z
    .string()
    .regex(/^\+380\d{9}$/, 'Неправильний формат українського номера'),
  password: z.string().min(8, 'Пароль має містити щонайменше 8 символів')
})
export type LoginCredentials = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  ...LoginSchema.shape,
  first_name: z
    .string()
    .min(2, 'Занадто коротке ім’я')
    .max(50)
    .regex(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/,
      'Ім’я містить недопустимі символи'
    ),
  last_name: z
    .string()
    .min(2, 'Занадто коротке прізвище')
    .max(50)
    .regex(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/,
      'Прізвище містить недопустимі символи'
    )
})
export type RegisterCredentials = z.infer<typeof RegisterSchema>

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

interface PasswordReset {
  first_name: string
  last_name: string
  phone_number: string
  old_password?: string
  new_password?: string
  new_password_repeat?: string
}

export type { LoginResponse, PasswordReset, User }
