import axios, { AxiosResponse } from 'axios'

export const authToken = {
  getToken: () => {
    return localStorage.getItem('auth-token')
  },
  removeToken: () => {
    localStorage.removeItem('auth-token')
  },
  setToken: (token: string) => {
    localStorage.setItem('auth-token', token)
  },
}

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

export default api
