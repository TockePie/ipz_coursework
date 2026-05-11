import { cx } from 'class-variance-authority'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import RabbitIcon from '@/components/Icons/rabbit-icon'
import Colors from '@/types/enums/colors'

import TileableBackground from '../components/taliable-bg'

import MainRegisterForm from './main-page'

export const metadata: Metadata = {
  title: 'Register - Bunnfee'
}

export default async function RegisterPage() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value

  if (userId) {
    redirect('/')
  }

  return (
    <>
      <TileableBackground />
      <main
        className={cx(
          'bg-cornsilk',
          'relative flex min-h-screen flex-col items-center gap-6 overflow-hidden py-8'
        )}
      >
        <div className="z-10 flex items-end justify-center gap-6">
          <RabbitIcon width={57} height={99} color={Colors.LIGHTCORAL} />
          <span className="font-unbounded text-coral text-2xl font-black">
            З поверненням!
          </span>
        </div>

        <MainRegisterForm />

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
