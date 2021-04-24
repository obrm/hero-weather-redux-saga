import axios from 'axios'
import KEY from '../key'
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
} from '../constants/weatherConstants'

export const getCurrentWeather = (location = '215854') => async (dispatch) => {
  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${KEY}`
    )

    dispatch({
      type: CURRENT_WEATHER_SUCCESS,
      payload: data[0],
      // payload: json,
    })
  } catch (error) {
    dispatch({
      type: CURRENT_WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
