import axios from 'axios'
import normalizeUrl from 'normalize-url'

const env = process.env.NODE_ENV
let baseURL: string = normalizeUrl('http://localhost:5000/api') // Default value
let imageURL: string = normalizeUrl('http://localhost:5000/static/images') // Default value

if (env == 'production') {
  baseURL = normalizeUrl('https://ipz-restaurant-app.onrender.com/api')
  imageURL = normalizeUrl(
    'https://ipz-restaurant-app.onrender.com/static/images'
  )
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const axiosImageInstance = axios.create({
  baseURL: imageURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { axiosImageInstance }
export default axiosInstance
