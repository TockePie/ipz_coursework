'use server'

import { cookies } from 'next/headers'

import { register } from '@/api/auth'
import { ApiError } from '@/api/instance'
import { ActionState } from '@/types/action-state'
import { RegisterCredentials, RegisterSchema } from '@/types/auth'

export async function registerAction(
  _prevState: ActionState<RegisterCredentials> | null,
  formData: FormData
): Promise<ActionState<RegisterCredentials>> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = RegisterSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      errorMessage: 'Перевірте коректність введених даних.'
    }
  }

  try {
    const res = await register(validatedFields.data)

    const cookieStore = await cookies()
    cookieStore.set('user_id', res.id, {
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    })

    return { success: true, zodErrors: null }
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      return {
        success: false,
        zodErrors: null,
        errorMessage: error.message
      }
    }

    return {
      success: false,
      zodErrors: null,
      errorMessage: 'Неправильні дані для реєстрації'
    }
  }
}
