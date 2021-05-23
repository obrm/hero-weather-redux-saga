import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Spinner from './layout/Spinner'
import { chooseWeatherImage } from './helper/chooseWeatherImage'
import {
  CardForecast,
  CardIcon,
  CardText,
  CardTitle,
} from './styles/components.styles'
import { getWeekDay } from './helper/getWeekDay'

const WeatherForecastItem = ({
  forecast: {
    Date: date,
    Temperature: {
      Maximum: { Value },
    },
    Day: { Icon, IconPhrase },
  },
}) => {
  const day = getWeekDay(date)

  const weather = useSelector((state) => state.weather)
  const { loading, error } = weather

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = !loading ? chooseWeatherImage(IconPhrase) : 'cloudy-day'

  if (loading) return <Spinner margin='0 1rem 2rem' width='130px' />
  if (error) return null
  return (
    <CardForecast className='img-fluid'>
      <CardForecast.Img
        src={`/img/weather-images/${weatherImage}.jpg`}
        alt='Card image'
        style={{ width: '100%' }}
        loading='lazy'
      />
      <CardForecast.ImgOverlay className='text-center'>
        <CardTitle>{day}</CardTitle>
        <CardText>{roundedTemperature} &deg;</CardText>
        <CardIcon
          src={`/img/weather-icons/${Icon}-s.png`}
          alt='weather icon'
          loading='lazy'
        />
      </CardForecast.ImgOverlay>
    </CardForecast>
  )
}

WeatherForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
}

export default WeatherForecastItem
