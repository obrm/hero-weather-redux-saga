import axios from 'axios'
import KEY from '../key'
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
} from '../constants/weatherConstants'

export const getCurrentWeatherByCoords = (latitude, longitude) => async (
  dispatch
) => {
  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST })

    // const { data } = await axios.get(
    //   `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${KEY}&q=${latitude},${longitude}`
    // )

    const json = {
      Temperature: { Metric: { Value: 22.9, Unit: 'C', UnitType: 17 } },
      WeatherIcon: 33,
      WeatherText: 'Clear',
    }

    dispatch({
      type: CURRENT_WEATHER_SUCCESS,
      // payload: data[0],
      payload: json,
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
