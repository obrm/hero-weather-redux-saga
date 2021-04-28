import axios from 'axios'

export const getCityByName = async (cityName) => {
  const accuWeatherKey = process.env.REACT_APP_ACCUWEATHER_KEY

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
