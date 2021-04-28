import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import WeatherForecastItem from '../components/WeatherForecastItem'

const FiveDaysForecast = () => {
  const [dailyForecasts, setDailyForecasts] = useState([])

  const fiveDaysWeather = useSelector((state) => state.fiveDaysWeather)
  const { forecast } = fiveDaysWeather

  useEffect(() => {
    if (forecast) {
      setDailyForecasts(forecast.DailyForecasts)
    }
  }, [forecast])

  return (
    <div className='weather-forecast'>
      {dailyForecasts.map((forecast) => (
        <WeatherForecastItem key={forecast.EpochDate} forecast={forecast} />
      ))}
    </div>
  )
}

export default FiveDaysForecast
