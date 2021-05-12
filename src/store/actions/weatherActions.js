import axios from 'axios'
import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIL,
  DEFAULT_LOCATION,
  DEFAULT_CITY_NAME,
} from '../constants/weatherConstants'

export const getWeather =
  (location = DEFAULT_LOCATION, currentWeatherCityName = DEFAULT_CITY_NAME) =>
  async (dispatch) => {
    dispatch({ type: WEATHER_REQUEST })

    const currentWeather = axios.get(
      `https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}`
    )

    const fiveDaysForecast = axios.get(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location}?apikey=${process.env.REACT_APP_ACCUWEATHER_KEY}&metric=true`
    )

    Promise.all([currentWeather, fiveDaysForecast])
      .then((response) => {
        dispatch({
          type: WEATHER_SUCCESS,
          payload: {
            currentWeatherData: response[0].data[0],
            currentWeatherCityName,
            fiveDaysForecast: response[1].data.DailyForecasts,
          },
        })
      })
      .catch((error) => {
        dispatch({
          type: WEATHER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      })
  }
