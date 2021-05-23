import axios from 'axios'

export const axiosGet = (url) => axios.get(url, { method: 'get' })
