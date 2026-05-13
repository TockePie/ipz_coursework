import { cookies } from 'next/headers'

export default async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()

  const userId = cookieStore.get('user_id')

  return !!userId?.value
}
