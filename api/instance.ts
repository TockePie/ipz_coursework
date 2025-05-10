// instance.ts
import axios from 'axios'

import { API_BASE_URL, IMG_BASE_URL, REQUEST_TIMEOUT } from './config'

const defaultHeaders = { 'Content-Type': 'application/json' }

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: defaultHeaders
})

const imgApi = axios.create({
  baseURL: IMG_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: defaultHeaders
})

export { api, imgApi }
