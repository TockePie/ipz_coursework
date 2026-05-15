import { Banner } from '@/types/banner'

import { api } from './instance'

export async function getBanners(): Promise<Banner[]> {
  return await api.get<Banner[]>('/news')
}
