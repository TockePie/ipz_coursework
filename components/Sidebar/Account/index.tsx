'use client'

import React from 'react'
import { CircleUserRound } from 'lucide-react'

import { useAuth } from '@/hooks/use-auth'
import { useUserData } from '@/hooks/use-user-data'
import { useUserStore } from '@/hooks/use-user-store'
import Colors from '@/types/enums/colors'

const Account = () => {
  const { isAuthenticated } = useAuth()
  const { userInfo } = useUserStore((state) => state)

  useUserData()

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3.5">
        <CircleUserRound color={Colors.CORAL} size="36" />
        <h2 className="text-coral font-unbounded text-2xl font-medium">
          Гість
        </h2>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3.5">
      <CircleUserRound color={Colors.CORAL} size="36" />
      <h2 className="text-coral font-unbounded text-2xl font-medium">
        {userInfo?.first_name} {userInfo?.last_name}
      </h2>
    </div>
  )
}

export default Account
