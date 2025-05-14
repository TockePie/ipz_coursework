import { api } from './instance'

const postReservation = async (reservationData: any) => {
  const { data } = await api.post('/reservations/', reservationData)

  return data
}

export { postReservation }
