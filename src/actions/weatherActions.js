import axios from 'axios'
import KEY from '../key'
import {
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
} from '../constants/weatherConstants'

export const getCurrentWeather = (location = '349727') => async (dispatch) => {
  try {
    dispatch({ type: CURRENT_WEATHER_REQUEST })

    // const { data } = await axios.get(
    //   `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${KEY}`
    // )

    const json = {
      IsDayTime: true,
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
