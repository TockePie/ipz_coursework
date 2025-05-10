'use client'

import React from 'react'
import { Button } from '@ui/button'
import { CircleUserRound, LoaderCircle } from 'lucide-react'
import Link from 'next/link'

import useAuth from '@/hooks/use-auth'
import useClient from '@/hooks/use-client'
import useUserData from '@/hooks/use-user-data'
import useUserStore from '@/hooks/use-user-store'
import Colors from '@/types/enums/colors'

const Auth = () => {
  const { isAuthenticated } = useAuth()
  const { userInfo } = useUserStore((state) => state)
  const isClient = useClient()
  useUserData()

  if (!isClient) {
    return (
      <LoaderCircle
        size={32}
        className="animate-spin"
        color={Colors.CORNSILK}
      />
    )
  }

  if (isAuthenticated()) {
    return (
      <Link href="/profile" className="flex items-center gap-2 max-lg:hidden">
        <CircleUserRound color={Colors.CORNSILK} size={36} />
        <span className="text-cornsilk font-unbounded text-lg">
          {userInfo?.first_name}
        </span>
      </Link>
    )
  }

  return (
    <>
      <Button asChild>
        <Link href="/login">Увійти</Link>
      </Button>

      <Button
        color="cornsilk"
        variant="outline"
        className="max-sm:hidden"
        asChild
      >
        <Link href="/register">Зареєструватися</Link>
      </Button>
    </>
  )
}

export default Auth
