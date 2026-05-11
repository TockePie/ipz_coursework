import axios from 'axios'

const headers = { 'Content-Type': 'application/json' }
const timeout = Number(process.env.NEXT_PUBLIC_AXIOS_REQUEST_TIMEOUT) ?? 10000

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout,
  headers
})

export const imgApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IMG_URL,
  timeout,
  headers
})
