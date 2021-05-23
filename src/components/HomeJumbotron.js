import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  JumbotronStyled,
  WeatherCol,
  WeatherImage,
  WeatherIcon,
  FavoriteButton,
  WeatherText,
} from './styles/components.styles'
import { chooseWeatherImage } from '../components/helper/chooseWeatherImage'
import ErrorToast from '../components/ErrorToast'
import Spinner from '../components/layout/Spinner'
import AddFavoriteButton from './AddFavoriteButton'
import { LargeHeading } from './styles/utils.styles'
import FiveDaysForecast from './FiveDaysForecast'

const HomeJumbotron = () => {
  const [apiWeatherFields, setApiWeatherFields] = useState({
    weatherText: null,
    weatherIcon: null,
    value: null,
  })

  const [cityNameField, setCityNameField] = useState('')

  const favorites = useSelector((state) => state.favorites)
  const { favoriteCityName: cityFromFavorites, favoritesWeatherItems } =
    favorites

  const weather = useSelector((state) => state.weather)
  const { loading, error, currentWeather, currentWeatherCityName } = weather

  useEffect(() => {
    setCityNameField(cityFromFavorites || currentWeatherCityName)
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

  if (loading) return <Spinner />
  if (error) return <ErrorToast error={error} />
  return (
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
        <WeatherCol>
          <h4>{cityNameField} </h4>
          <p className='ml-2'>{roundedTemperature} &deg;</p>
        </WeatherCol>
      </WeatherIcon>
      <FavoriteButton>
        <AddFavoriteButton
          currentWeatherCityName={currentWeatherCityName}
          favoritesWeatherItems={favoritesWeatherItems}
        />
      </FavoriteButton>
      <WeatherText>
        <LargeHeading>{weatherText}</LargeHeading>
      </WeatherText>
      <FiveDaysForecast />
    </JumbotronStyled>
  )
}

export default HomeJumbotron
