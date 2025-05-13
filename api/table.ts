import { Table } from '@/types/table'

import { api } from './instance'

const getTables = async (): Promise<Table[]> => {
  const { data } = await api.get(`/tables/`)

  return data
}

export { getTables }
