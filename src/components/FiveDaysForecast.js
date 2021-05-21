import { useSelector } from 'react-redux'

import { StyledWeatherForecast } from './styled/Styled'

import WeatherForecastItem from '../components/WeatherForecastItem'

const FiveDaysForecast = () => {
  const weather = useSelector((state) => state.weather)
  const { fiveDaysForecast, loading } = weather

  return (
    <StyledWeatherForecast>
      {!loading &&
        fiveDaysForecast &&
        fiveDaysForecast.map((forecast) => (
          <WeatherForecastItem key={forecast.EpochDate} forecast={forecast} />
        ))}
    </StyledWeatherForecast>
  )
}

export default FiveDaysForecast
