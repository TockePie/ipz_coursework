'use client'

import React from 'react'
import { CircleUserRound } from 'lucide-react'

import useAuth from '@/hooks/use-auth'
import Colors from '@/types/enums/colors'

import LoggedCard from './LoggedCard'

const Account = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return <LoggedCard />
  }

  return (
    <div className="flex items-center gap-3.5">
      <CircleUserRound color={Colors.CORAL} size="36" />
      <h2 className="text-coral font-unbounded text-2xl font-medium">Гість</h2>
    </div>
  )
}

export default Account
