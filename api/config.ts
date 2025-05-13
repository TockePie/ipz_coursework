export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://192.168.0.140:5000/api'
export const IMG_BASE_URL =
  process.env.REACT_APP_IMG_BASE_URL ||
  'http://192.168.0.140:5000/static/images'
export const REQUEST_TIMEOUT = Number(process.env.REACT_APP_TIMEOUT) || 10000
