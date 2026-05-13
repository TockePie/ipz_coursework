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

export const ProfileUpdateSchema = z
  .object({
    ...RegisterSchema.omit({ password: true }).shape,
    old_password: z.string().optional(),
    new_password: z.string().optional(),
    new_password_repeat: z.string().optional()
  })
  .refine(
    (data) => {
      if (data.new_password && !data.old_password?.trim()) {
        return false
      }
      return true
    },
    {
      message: 'Введіть старий пароль, щоб змінити його',
      path: ['old_password']
    }
  )
  .refine(
    (data) => {
      if (
        data.old_password?.trim() &&
        (!data.new_password || data.new_password.length < 8)
      ) {
        return false
      }
      return true
    },
    {
      message: 'Пароль повинен містити не менше 8 символів',
      path: ['new_password']
    }
  )
  .refine((data) => data.new_password === data.new_password_repeat, {
    message: 'Паролі не збігаються',
    path: ['new_password_repeat']
  })
export type ProfileUpdate = z.infer<typeof ProfileUpdateSchema>

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

export type { LoginResponse, User }
