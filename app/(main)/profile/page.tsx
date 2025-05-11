'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import useAuth from '@/hooks/api/use-auth'

import ProfilePage from './components'

const Profile = () => {
  const [render, setRender] = useState(false)
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
      return
    }
    setRender(true)
  }, [isAuthenticated, router])

  if (!render) {
    return null
  }

  return <ProfilePage />
}

export default Profile
