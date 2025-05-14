import { useMutation, useQuery } from '@tanstack/react-query'

import { postReservation } from '@/api/reservation'
import { getTables } from '@/api/table'

const useReservation = () => {
  const query = useMutation({
    mutationFn: postReservation
  })

  return {
    createReservation: query.mutate,
    isLoading: query.isPending,
    isSuccess: query.isSuccess,
    isError: query.isError,
    error: query.error
  }
}

const useTable = () => {
  const table = useQuery({
    queryKey: ['tables'],
    queryFn: getTables,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  return table
}

export { useReservation, useTable }
