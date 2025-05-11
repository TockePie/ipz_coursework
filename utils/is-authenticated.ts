import { cookies } from 'next/headers'

const isAuthenticated = async (): Promise<boolean> => {
  const cookieStore = await cookies()

  const userId = cookieStore.get('user_id')

  return !!userId?.value
}

export default isAuthenticated
