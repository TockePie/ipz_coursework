import { ReservationInput, Table } from '@/types/reservation'

import { api } from './instance'

export async function postReservation(reservationData: ReservationInput) {
  return await api.post('/reservations/', reservationData)
}

export async function getTables(): Promise<Table[]> {
  return await api.get<Table[]>(`/tables/`)
}
