import React from 'react'
import { CircleUserRound } from 'lucide-react'

import Colors from '@/types/enums/colors'
import isAuthenticated from '@/utils/is-authenticated'

import LoggedCard from './LoggedCard'

const Account = async () => {
  if (await isAuthenticated()) {
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
