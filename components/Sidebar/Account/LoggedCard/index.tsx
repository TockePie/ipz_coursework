import React from 'react'
import { CircleUserRound, LogOut, Pencil } from 'lucide-react'
import Link from 'next/link'

import useAuth from '@/hooks/use-auth'
import useUserData from '@/hooks/use-user-data'
import useUserStore from '@/hooks/use-user-store'
import Colors from '@/types/enums/colors'

const LoggedCard = () => {
  const { logout } = useAuth()
  const { userInfo } = useUserStore((state) => state)
  useUserData()

  return (
    <div className="mt-5 flex items-center gap-3.5 rounded-3xl bg-white p-4 shadow-md">
      <CircleUserRound color={Colors.CORAL} size="86" strokeWidth={1.5} />

      <div className="flex flex-col gap-2">
        <h2 className="text-coral font-unbounded text-2xl font-medium">
          {userInfo?.first_name} {userInfo?.last_name}
        </h2>
        <span className="text-coral font-unbounded text-base font-light">
          {userInfo?.phone_number}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-8">
        <LogOut
          color={Colors.CORAL}
          size="30"
          strokeWidth={1.5}
          className="cursor-pointer"
          onClick={async () => {
            await logout()
            window.location.reload()
          }}
        />

        <Link href="/profile">
          <Pencil
            color={Colors.CORAL}
            size="30"
            strokeWidth={1.5}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  )
}

export default LoggedCard
