'use client'

import React from 'react'

import BlockSection from '@/components/main/BlockSection'
import useUserStore from '@/hooks/use-user-store'

const ProfilePage = () => {
  const { userInfo } = useUserStore((state) => state.userInfo)

  return (
    <main className="bg-cornsilk flex min-h-screen flex-col items-center gap-y-6 p-6">
      <BlockSection title="Змінити дані"></BlockSection>
    </main>
  )
}

export default ProfilePage
