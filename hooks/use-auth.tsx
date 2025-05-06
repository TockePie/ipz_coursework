import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { login, register } from '@/api/auth'

export const useAuth = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Login success:', data)
      localStorage.setItem('user_id', data.user_id)
      void queryClient.invalidateQueries({ queryKey: ['user'] })
      void router.push('/')
    }
  })

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      localStorage.setItem('user_id', data.user_id)
      void queryClient.invalidateQueries({ queryKey: ['user'] })
      void router.push('/')
    },
    onError: (error) => {
      console.error('Auth error:', error)
    }
  })

  const logout = () => {
    localStorage.removeItem('user_id')
    void queryClient.invalidateQueries({ queryKey: ['user'] })
    void router.push('/')
  }

  const isAuthenticated = () => {
    if (typeof window === 'undefined') return false
    return !!localStorage.getItem('user_id')
  }

  const getUserId = () => {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('user_id')
  }

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isAuthenticated,
    getUserId,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    error: loginMutation.error || registerMutation.error
  }
}
