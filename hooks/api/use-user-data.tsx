'use client'

import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'

import { getUser } from '@/api/auth'

import useUserStore from '../store/use-user-store'

const useUserData = () => {
  const { setUserInfo } = useUserStore()
  const user_id = Cookies.get('user_id')

  const query = useQuery({
    queryKey: ['user', user_id],
    queryFn: async () => {
      if (!user_id) return null
      return await getUser(user_id)
    },
    enabled: !!user_id
  })

  useEffect(() => {
    if (query.data) {
      setUserInfo(query.data)
    }
  }, [query.data, setUserInfo])

  return query
}

export default useUserData
