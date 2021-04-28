import axios from 'axios'
import KEY from '../../key'
import {
  GET_CITY_BY_COORDS_REQUEST,
  GET_CITY_BY_COORDS_SUCCESS,
  GET_CITY_BY_COORDS_FAIL,
} from '../constants/cityConstants'

export const getCityByCoords = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch({ type: GET_CITY_BY_COORDS_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${KEY}&q=${latitude},${longitude}`
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
