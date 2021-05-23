import { axiosGet } from '../helper/axios'
import { AUTO_COMPLETE_URL } from './autoCompleteConstants'

export const getAutoCompleteResultsFromAPI = (query) =>
  axiosGet(`${AUTO_COMPLETE_URL}${query}`)
