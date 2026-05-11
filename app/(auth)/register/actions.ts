'use server'

import { AxiosError } from 'axios'
import { cookies } from 'next/headers'

import { register } from '@/api/auth'
import { RegisterCredentials, RegisterSchema } from '@/types/auth'

export interface ActionState {
  success: boolean
  message?: string
  errors?:
    | {
        [K in keyof RegisterCredentials]?: string[]
      }
    | null
}

export async function registerAction(
  _prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = RegisterSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Перевірте коректність введених даних.'
    }
  }

  try {
    const res = await register(validatedFields.data)

    const cookieStore = await cookies()
    cookieStore.set('user_id', res.id, {
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    })

    return { success: true, errors: null }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        errors: null,
        message: error.message
      }
    }

    return {
      success: false,
      errors: null,
      message: 'Неправильні дані для реєстрації'
    }
  }
}
