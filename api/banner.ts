import { Banner } from '@/types/banner'

import { api, imgApi } from './instance'

const getBanners = async (): Promise<Banner[]> => {
  const { data } = await api.get('/news')

  return data
}

const getBannerImage = async (id: number): Promise<string> => {
  const response = await imgApi.get<Blob>(`/${id}/`, {
    responseType: 'blob'
  })

  return URL.createObjectURL(response.data)
}

export { getBannerImage, getBanners }
