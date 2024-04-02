import axios from 'axios'

export default axios.create(
  {
    baseURL: import.meta.env.VITE_APIURL,
    responseType: 'json',
    timeout: 5000
  }
)
