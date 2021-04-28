import axios from 'axios'

import {
  GET_CITY_BY_COORDS_REQUEST,
  GET_CITY_BY_COORDS_SUCCESS,
  GET_CITY_BY_COORDS_FAIL,
} from '../constants/cityConstants'

let accuWeatherKey

if (process.env.NODE_ENV !== 'production') {
  accuWeatherKey = process.env.REACT_APP_ACCUWEATHER_KEY
} else {
  accuWeatherKey = process.env.ACCUWEATHER_KEY
}

export const getCityByCoords = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch({ type: GET_CITY_BY_COORDS_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherKey}&q=${latitude},${longitude}`
    )

    dispatch({
      type: GET_CITY_BY_COORDS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_CITY_BY_COORDS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
