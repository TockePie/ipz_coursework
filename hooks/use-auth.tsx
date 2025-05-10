'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

import { login, register } from '@/api/auth'

const useAuth = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      Cookies.set('user_id', data.user_id, { expires: 7 }) // Set cookie with 7 days expiration
      await queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/')
    },
    onError: (error) => {
      console.error('Auth error:', error)
    }
  })

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: async (data) => {
      Cookies.set('user_id', data.user_id, { expires: 7 }) // Set cookie with 7 days expiration
      await queryClient.invalidateQueries({ queryKey: ['user'] })
      router.push('/')
    },
    onError: (error) => {
      console.error('Auth error:', error)
    }
  })

  const logout = async () => {
    Cookies.remove('user_id')
    await queryClient.invalidateQueries({ queryKey: ['user'] })
    router.push('/')
  }

  const isAuthenticated = () => {
    if (typeof window === 'undefined') return false
    return !!Cookies.get('user_id')
  }

  const getUserId = () => {
    if (typeof window === 'undefined') return null
    return Cookies.get('user_id')
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

export default useAuth
