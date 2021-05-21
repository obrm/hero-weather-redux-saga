import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  JumbotronStyled,
  WeatherImage,
  WeatherIcon,
  FavoriteButton,
  WeatherText,
} from './styled/Styled'
import { chooseWeatherImage } from '../components/helper/chooseWeatherImage'
import ErrorToast from '../components/ErrorToast'
import Spinner from '../components/layout/Spinner'
import AddFavoriteButton from './AddFavoriteButton'
import { LargeHeading } from './styled/StyledUtils'
import FiveDaysForecast from './FiveDaysForecast'

const HomeJumbotron = () => {
  const [apiWeatherFields, setApiWeatherFields] = useState({
    weatherText: null,
    weatherIcon: null,
    value: null,
  })

  const [cityNameField, setCityNameField] = useState('')

  const favorites = useSelector((state) => state.favorites)
  const { favoriteCityName: cityFromFavorites } = favorites

  const weather = useSelector((state) => state.weather)
  const { loading, error, currentWeather, currentWeatherCityName } = weather

  useEffect(() => {
    if (error) {
      setCityNameField('error')
    } else if (cityFromFavorites) {
      setCityNameField(cityFromFavorites)
    } else if (currentWeatherCityName) {
      setCityNameField(currentWeatherCityName)
    }
  }, [cityFromFavorites, currentWeatherCityName, error])

  useEffect(() => {
    if (currentWeather) {
      setApiWeatherFields({
        weatherText: currentWeather.WeatherText,
        weatherIcon: currentWeather.WeatherIcon,
        value: currentWeather.Temperature.Metric.Value,
      })
    }
  }, [currentWeather])

  const { weatherText, weatherIcon, value } = apiWeatherFields

  const roundedTemperature = Math.round(parseFloat(value))

  const weatherImage = !loading ? chooseWeatherImage(weatherText) : 'cloudy-day'

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorToast />
      ) : (
        <JumbotronStyled>
          <WeatherImage
            src={`/img/weather-images/${weatherImage}.jpg`}
            alt=''
            loading='lazy'
          />
          <WeatherIcon>
            <img
              src={`/img/weather-icons/${weatherIcon}-s.png`}
              alt='weather icon'
              className='column'
              loading='lazy'
            />
            <div className='column'>
              <h4>{cityNameField} </h4>
              <p className='ml-2'>{roundedTemperature} &deg;</p>
            </div>
          </WeatherIcon>
          <FavoriteButton>
            <AddFavoriteButton />
          </FavoriteButton>
          <WeatherText>
            <LargeHeading>{weatherText}</LargeHeading>
          </WeatherText>
          <FiveDaysForecast />
        </JumbotronStyled>
      )}
    </>
  )
}

export default HomeJumbotron
