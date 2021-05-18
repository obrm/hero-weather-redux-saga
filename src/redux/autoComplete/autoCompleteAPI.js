import axios from 'axios'

import { AUTO_COMPLETE_URL } from './autoCompleteConstants'

export const getAutoCompleteResultsFromAPI = (query) =>
  axios.get(`${AUTO_COMPLETE_URL}${query}`)
