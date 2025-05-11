import React from 'react'
import { Button } from '@ui/button'
import Link from 'next/link'

import isAuthenticated from '@/utils/is-authenticated'

const Buttons = async () => {
  if (await isAuthenticated()) {
    return null
  }

  return (
    <div className="flex gap-2 max-md:inline-flex md:hidden">
      <Button
        className="bg-coral font-unbounded hover:bg-coral/80 outline-coral/50 active:bg-coral/50 h-12 flex-1 text-lg font-bold text-white outline transition-colors duration-300 ease-in-out select-none"
        asChild
      >
        <Link href="/login">Sign In</Link>
      </Button>

      <Button
        className="font-unbounded text-coral border-coral hover:bg-coral h-12 flex-1 border bg-white text-lg font-bold transition-colors duration-300 ease-in-out select-none hover:text-white"
        asChild
      >
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  )
}

export default Buttons
