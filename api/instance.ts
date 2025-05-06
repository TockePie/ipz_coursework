import axios from 'axios'

//TODO: make this dynamic based on the environment (development, production, etc.)
const baseURL = 'http://localhost:5000/api'

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
