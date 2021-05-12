import axios from 'axios'

import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAIL,
} from '../constants/autoCompleteConstants'

export const getAutoCompleteResults = (query) => async (dispatch) => {
  try {
    dispatch({ type: AUTO_COMPLETE_REQUEST })

    const { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&q=${query}`
    )

    dispatch({
      type: AUTO_COMPLETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: AUTO_COMPLETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
