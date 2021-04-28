import axios from 'axios'

export const getCityByName = async (cityName) => {
  let accuWeatherKey

  if (process.env.NODE_ENV !== 'production') {
    accuWeatherKey = process.env.REACT_APP_ACCUWEATHER_KEY
  } else {
    accuWeatherKey = process.env.ACCUWEATHER_KEY
  }

  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuWeatherKey}&q=${cityName}`
    )
    return data[0].Key
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}
