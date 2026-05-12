import { redirect } from 'next/navigation'

import isAuthenticated from '@/utils/is-authenticated'

import ProfilePage from './components'

export default async function Profile() {
  if (!isAuthenticated()) {
    redirect('/login')
  }

  return <ProfilePage />
}
