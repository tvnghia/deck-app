/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck'

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
