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
      <Button color="coral" className="h-12 flex-1 text-lg" asChild>
        <Link href="/login">Sign In</Link>
      </Button>

      <Button
        color="coral"
        variant="outline"
        className="h-12 flex-1 text-lg"
        asChild
      >
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  )
}

export default Buttons
