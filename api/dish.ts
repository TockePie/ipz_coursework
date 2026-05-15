import { Dish } from '@/types/dish'

import { api } from './instance'

export async function getDishes(): Promise<Dish[]> {
  return await api.get<Dish[]>('/dishes/')
}
