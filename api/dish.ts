import { Dish } from '@/types/dish'

import { api } from './instance'

export async function getDishes(): Promise<Dish[]> {
  const { data } = await api.get('/dishes/')
  return data
}
