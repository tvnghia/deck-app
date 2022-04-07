/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT as string

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },

  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(error)
  },
)

export default axios
