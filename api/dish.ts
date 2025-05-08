import { Dish } from '@/types/dish'

import axiosInstance, { axiosImageInstance } from './instance'

const getDishes = async (): Promise<Dish[]> => {
  const { data } = await axiosInstance.get('/dishes/')
  return data
}

const getDishImage = async (id: number): Promise<string> => {
  const response = await axiosImageInstance.get<Blob>(`/${id}/`, {
    responseType: 'blob'
  })
  return URL.createObjectURL(response.data)
}

export { getDishes, getDishImage }
