'use client'

import React from 'react'
import { CircleUserRound } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'

const Auth = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return (
      <Button size="icon" variant="ghost" asChild>
        <CircleUserRound />
      </Button>
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
