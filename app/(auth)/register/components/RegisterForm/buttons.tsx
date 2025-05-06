import React from 'react'
import { Button } from '@ui/button'
import Link from 'next/link'

const Buttons = () => (
  <div className="flex w-54 flex-col items-stretch gap-4">
    <Button
      className="bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-12 text-white shadow-none"
      type="submit"
    >
      Зареєструватися
    </Button>

    <Button
      variant="outline"
      className="border-strong-cyan font-unbounded text-strong-cyan hover:bg-strong-cyan/10 hover:text-strong-cyan h-12 bg-transparent shadow-none"
      asChild
    >
      <Link href="/login">Увійти</Link>
    </Button>
  </div>
)

export default Buttons
