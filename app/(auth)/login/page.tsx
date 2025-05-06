import React from 'react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import RabbitIcon from '@/components/Icons/rabbit-icon'
import Colors from '@/types/enums/colors'

import TileableBackground from '../components/taliable-bg'

import LoginForm from './components/LoginForm'

export const metadata = {
  title: 'Login - Bunnfee'
}

const LoginPage = async () => {
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value

  if (userId) {
    redirect('/')
  }

  return (
    <>
      <TileableBackground />
      <main className="bg-mistyrose relative flex min-h-screen flex-col items-center gap-6 overflow-hidden py-8">
        <div className="z-10 flex items-end justify-center gap-6">
          <RabbitIcon width={57} height={99} color={Colors.LIGHTCORAL} />
          <span className="font-unbounded text-coral text-2xl font-black">
            З поверненням!
          </span>
        </div>

        <LoginForm />

        <Image
          src="/rabbit-ears-auth-page.png"
          alt="Rabbit ears decoration"
          width={500}
          height={500}
          className="absolute right-[-50px] bottom-0 z-2 w-xl"
        />
      </main>
    </>
  )
}

export default LoginPage
