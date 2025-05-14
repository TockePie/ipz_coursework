import { AvailableSlot, AvailableTable, Table } from '@/types/reservation'

import { api } from './instance'

const getTables = async (): Promise<Table[]> => {
  const { data } = await api.get(`/tables/`)

  return data
}

const getAvailableSlots = async (
  date: string,
  guests: number
): Promise<AvailableSlot[]> => {
  const { data } = await api.get(
    `/reservations/available-slots?date=${date}&guest_count=${guests}`
  )

  return data
}

const getAvailableTables = async (
  date: string,
  slotStart: string
): Promise<AvailableTable[]> => {
  const { data } = await api.get(
    `/reservations/available-tables?date=${date}&slot_start=${slotStart}`
  )

  return data
}

export { getAvailableSlots, getAvailableTables, getTables }
