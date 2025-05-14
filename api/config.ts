const env = process.env.NODE_ENV

const getUrl = (devUrl: string, prodUrl: string) => {
  if (env === 'development') {
    return devUrl
  } else if (env === 'production') {
    return prodUrl
  } else {
    throw new Error('Invalid environment')
  }
}

export const API_BASE_URL = getUrl(
  'http://localhost:5000/api',
  'https://ipz-restaurant-app.onrender.com/api'
)

export const IMG_BASE_URL = getUrl(
  'http://localhost:5000/static/images',
  'https://ipz-restaurant-app.onrender.com/static/images'
)

export const REQUEST_TIMEOUT = Number(process.env.REACT_APP_TIMEOUT) || 10000
