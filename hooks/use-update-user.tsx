'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import { passwordReset } from '@/api/user'

const useUpdateUser = () => {
  const queryClient = useQueryClient()

  const passwordResetMutation = useMutation({
    mutationFn: passwordReset,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error: AxiosError) => {
      console.error('Update user error:', error)
    }
  })

  return {
    passwordReset: passwordResetMutation.mutate,
    isLoading: passwordResetMutation.isPending,
    isSuccess: passwordResetMutation.isSuccess,
    error: passwordResetMutation.error
  }
}

export default useUpdateUser
