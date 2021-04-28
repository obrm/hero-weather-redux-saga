import axios from 'axios'
import KEY from '../../key'

export const getCityByName = async (cityName) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${KEY}&q=${cityName}`
    )
    return data[0].Key
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  }
}
