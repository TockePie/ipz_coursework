import { redirect } from 'next/navigation'

export default async function MenuRootPage() {
  redirect('/menu/main')

  return null
}
