import { Banner } from '@/types/banner'

import { api } from './instance'

export async function getBanners(): Promise<Banner[]> {
  const { data } = await api.get('/news')
  return data
}
