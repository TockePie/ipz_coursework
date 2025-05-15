import React from 'react'
import { Button } from '@ui/button'
import Link from 'next/link'

import Spinner from '@/components/Spinner'
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
      <Button className="h-12" disabled={isLoading} type="submit">
        {isLoading && <Spinner color={Colors.WHITE} />}
        {firstBtnText}
      </Button>

      <Button variant="outline" className="h-12" asChild>
        <Link href={`/${secondaryBtnRoute}`}>{secondBtnText}</Link>
      </Button>
    </div>
  )
}

export default Buttons
