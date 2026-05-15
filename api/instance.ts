const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`

  const headers = new Headers({
    'Content-Type': 'application/json',
    ...options.headers
  })

  const response = await fetch(url, {
    ...options,
    headers
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      errorData.message || `HTTP error! status: ${response.status}`
    )
  }

  return response.json()
}

export const api = {
  get: <T>(url: string, init?: RequestInit) =>
    apiRequest<T>(url, { ...init, method: 'GET' }),
  post: <T, K>(url: string, body: K, init?: RequestInit) =>
    apiRequest<T>(url, { ...init, method: 'POST', body: JSON.stringify(body) })
}
