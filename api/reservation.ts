import { ReservationType, Table } from '@/types/reservation'

import { api } from './instance'

export async function postReservation(reservationData: ReservationType) {
  const { data } = await api.post('/reservations/', reservationData)
  return data
}

export async function getTables(): Promise<Table[]> {
  const { data } = await api.get(`/tables/`)
  return data
}
