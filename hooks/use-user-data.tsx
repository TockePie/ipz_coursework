'use client'

import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'

import { getUser } from '@/api/auth'

export default function useUserData() {
  const user_id = Cookies.get('user_id')

  const query = useQuery({
    queryKey: ['user', user_id],
    queryFn: () => getUser(user_id!),
    enabled: !!user_id,
    staleTime: 1000 * 60 * 5
  })

  return { userInfo: query.data, isLoading: query.isLoading }
}
