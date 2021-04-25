import axios from 'axios'
import KEY from '../key'
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
  FIVE_DAYS_WEATHER_REQUEST,
  FIVE_DAYS_WEATHER_SUCCESS,
  FIVE_DAYS_WEATHER_FAIL,
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

export const getFiveDaysWeather = (location = '215854') => async (dispatch) => {
  try {
    dispatch({ type: FIVE_DAYS_WEATHER_REQUEST })

    const { data } = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${KEY}&metric=true`
    )

    dispatch({
      type: FIVE_DAYS_WEATHER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FIVE_DAYS_WEATHER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
