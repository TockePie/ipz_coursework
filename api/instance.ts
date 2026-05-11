import axios from 'axios'

const headers = { 'Content-Type': 'application/json' }
const timeout = Number(process.env.AXIOS_REQUEST_TIMEOUT) ?? 10000

const api = axios.create({
  baseURL: process.env.API_URL,
  timeout,
  headers
})

const imgApi = axios.create({
  baseURL: process.env.IMG_URL,
  timeout,
  headers
})

export { api, imgApi }
