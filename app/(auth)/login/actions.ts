'use server'

import { AxiosError } from 'axios'
import { cookies } from 'next/headers'

import { login } from '@/api/auth'
import { ActionState } from '@/types/action-state'
import { LoginCredentials, LoginSchema } from '@/types/auth'

export async function loginAction(
  _prevState: ActionState<LoginCredentials> | null,
  formData: FormData
): Promise<ActionState<LoginCredentials>> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = LoginSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      errorMessage: 'Перевірте коректність введених даних.'
    }
  }

  try {
    const res = await login(validatedFields.data)

    const cookieStore = await cookies()
    cookieStore.set('user_id', res.user_id, {
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    })

    return { success: true, zodErrors: null }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        zodErrors: null,
        errorMessage: error.message
      }
    }

    return {
      success: false,
      zodErrors: null,
      errorMessage: 'Неправильні дані для входу'
    }
  }
}
