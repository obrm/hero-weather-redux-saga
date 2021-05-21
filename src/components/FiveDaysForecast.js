import { useSelector } from 'react-redux'

import { WeatherForecast } from './styles/components.styles'

import WeatherForecastItem from '../components/WeatherForecastItem'

const FiveDaysForecast = () => {
  const weather = useSelector((state) => state.weather)
  const { fiveDaysForecast, loading } = weather

  return (
    <WeatherForecast>
      {!loading &&
        fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <WeatherForecastItem key={forecast.EpochDate} forecast={forecast} />
        ))}
    </WeatherForecast>
  )
}

export default FiveDaysForecast
