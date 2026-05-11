'use client'

import { Button } from '@ui/button'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'

import Spinner from '@/components/Spinner'
import useUserData from '@/hooks/api/use-user-data'
import useClient from '@/hooks/use-client'
import Colors from '@/types/enums/colors'

const Auth = () => {
  const isClient = useClient()
  const { userInfo, isLoading } = useUserData()

  if (!isClient || isLoading) return <Spinner />

  if (userInfo) {
    return (
      <Link href="/profile" className="flex items-center gap-2 max-lg:hidden">
        <CircleUserRound color={Colors.CORNSILK} size={36} />
        <span className="text-cornsilk font-unbounded text-lg">
          {userInfo.first_name}
        </span>
      </Link>
    )
  }

  return (
    <>
      <Button color="cornsilk" asChild>
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
