'use client'

import { Button } from '@ui/button'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'

import useUserData from '@/hooks/api/use-user-data'
import Colors from '@/types/enums/colors'

export default function AuthContent() {
  const { userInfo } = useUserData()

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
