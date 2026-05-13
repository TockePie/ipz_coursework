'use client'

import dynamic from 'next/dynamic'

import Spinner from '@/components/Spinner'

const Auth = dynamic(() => import('./content'), {
  ssr: false,
  loading: () => <Spinner />
})

export default Auth
