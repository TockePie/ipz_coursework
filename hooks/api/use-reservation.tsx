import { useMutation, useQuery } from '@tanstack/react-query'

import { getTables, postReservation } from '@/api/reservation'

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
