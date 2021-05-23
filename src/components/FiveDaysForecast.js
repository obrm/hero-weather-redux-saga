import { useSelector } from 'react-redux'

import { WeatherForecast } from './styles/components.styles'

import WeatherForecastItem from '../components/WeatherForecastItem'

const FiveDaysForecast = () => {
  const fiveDaysForecast = useSelector(
    (state) => state.weather.fiveDaysForecast
  )

  return (
    <WeatherForecast>
      {fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <WeatherForecastItem key={forecast.EpochDate} forecast={forecast} />
        ))}
    </WeatherForecast>
  )
}

export default FiveDaysForecast
