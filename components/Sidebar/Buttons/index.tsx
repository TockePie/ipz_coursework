import React from 'react'
import { Button } from '@ui/button'

const Buttons = () => (
  <div className="flex gap-2">
    <Button className="bg-coral font-unbounded hover:bg-coral/80 outline-coral/50 active:bg-coral/50 h-12 flex-1 text-lg font-bold text-white outline transition-colors duration-300 ease-in-out select-none">
      Sign In
    </Button>

    <Button className="font-unbounded text-coral border-coral hover:bg-coral h-12 flex-1 border bg-white text-lg font-bold transition-colors duration-300 ease-in-out select-none hover:text-white">
      Sign Up
    </Button>
  </div>
)

export default Buttons
