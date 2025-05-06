import React from 'react'
import Image from 'next/image'

import RabbitIcon from '@/components/Icons/rabbit-icon'
import Colors from '@/types/enums/colors'

import TileableBackground from '../components/taliable-bg'

import RegisterForm from './components/RegisterForm'

export const metadata = {
  title: 'Register - Bunnfee'
}

const RegisterPage = () => (
  <>
    <TileableBackground />
    <main className="bg-cornsilk relative flex min-h-screen flex-col items-center gap-6 overflow-hidden py-8">
      <div className="z-10 flex items-end justify-center gap-6">
        <RabbitIcon width={57} height={99} color={Colors.LIGHTCORAL} />
        <span className="font-unbounded text-coral text-2xl font-black">
          З поверненням!
        </span>
      </div>

      <RegisterForm />

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

export default RegisterPage
