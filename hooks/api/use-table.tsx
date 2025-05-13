import { useQuery } from '@tanstack/react-query'

const useTable = () => {
  const query = useQuery({
    queryKey: ['tables'],
    queryFn: () => fetch('/api/tables').then((res) => res.json()),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

  export { query }
}

export default useTable
