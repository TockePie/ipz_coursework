import React from 'react'
import { Button } from '@ui/button'
import clsx from 'clsx'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'

import useAuth from '@/hooks/api/use-auth'
import Colors from '@/types/enums/colors'

interface Props {
  firstBtnText: string
  secondBtnText: string
  secondaryBtnRoute: string
}

const Buttons = (props: Props) => {
  const { firstBtnText, secondBtnText, secondaryBtnRoute } = props

  const { isLoading } = useAuth()

  return (
    <div className="flex w-54 flex-col items-stretch gap-4">
      <Button
        className={clsx(
          'bg-strong-cyan font-unbounded hover:bg-strong-cyan/80 active:bg-strong-cyan/70 h-12 text-white shadow-none',
          isLoading && 'cursor-not-allowed select-none'
        )}
        disabled={isLoading}
        type="submit"
      >
        {isLoading && (
          <LoaderCircle
            size={32}
            className="animate-spin"
            color={Colors.WHITE}
          />
        )}
        {firstBtnText}
      </Button>

      <Button
        variant="outline"
        className="border-strong-cyan font-unbounded text-strong-cyan hover:bg-strong-cyan/10 hover:text-strong-cyan h-12 bg-transparent shadow-none"
        asChild
      >
        <Link href={`/${secondaryBtnRoute}`}>{secondBtnText}</Link>
      </Button>
    </div>
  )
}

export default Buttons
