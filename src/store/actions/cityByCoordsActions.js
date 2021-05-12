import axios from 'axios'

import {
  GET_CITY_BY_COORDS_REQUEST,
  GET_CITY_BY_COORDS_SUCCESS,
  GET_CITY_BY_COORDS_FAIL,
} from '../constants/cityByCoordsConstants.js'

export const getCityByCoords = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch({ type: GET_CITY_BY_COORDS_REQUEST })

    const { data } = await axios.get(
      `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&q=${latitude},${longitude}`
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
