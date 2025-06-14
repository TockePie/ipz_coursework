import { Dish } from '@/types/dish'

import { api, imgApi } from './instance'

const getDishes = async (): Promise<Dish[]> => {
  const { data } = await api.get('/dishes/')
  return data
}

const getDishById = async (id: number): Promise<Dish> => {
  const { data } = await api.get(`/dishes/${id}/`)
  return data
}

const getDishImage = async (id: number): Promise<string> => {
  const response = await imgApi.get<Blob>(`/${id}/`, {
    responseType: 'blob'
  })
  return URL.createObjectURL(response.data)
}

export { getDishById, getDishes, getDishImage }
