'use server'

import { AxiosError } from 'axios'

import { profileUpdate } from '@/api/auth'
import { ActionState } from '@/types/action-state'
import { ProfileUpdate, ProfileUpdateSchema } from '@/types/auth'

export async function profileUpdateAction(
  _prevState: ActionState<ProfileUpdate> | null,
  formData: FormData
): Promise<ActionState<ProfileUpdate>> {
  const data = Object.fromEntries(formData.entries())

  const validatedFields = ProfileUpdateSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      success: false,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      errorMessage: 'Перевірте коректність введених даних.'
    }
  }

  try {
    const updateData = { ...validatedFields.data }
    if (!updateData.old_password?.trim()) {
      delete updateData.old_password
      delete updateData.new_password
      delete updateData.new_password_repeat
    }

    await profileUpdate(updateData)

    return { success: true }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const status = error.response?.status

      switch (status) {
        case 400: {
          return {
            success: false,
            zodErrors: null,
            errorMessage:
              'Неправильні вхідні дані - не всі поля правильно заповнені.'
          }
        }
        case 401: {
          return {
            success: false,
            zodErrors: null,
            errorMessage: 'Помилка авторизації'
          }
        }
        case 404: {
          return {
            success: false,
            zodErrors: null,
            errorMessage: 'Користувача з таким номером телефону не знайдено.'
          }
        }
        default: {
          return {
            success: false,
            zodErrors: null,
            errorMessage: error.message
          }
        }
      }
    }

    return {
      success: false,
      zodErrors: null,
      errorMessage: 'Неправильні дані для оновлення інформації про користувача'
    }
  }
}
