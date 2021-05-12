import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import { weatherImageChooser } from '../components/helper/weatherImageChooser'
import {
  getCurrentWeather,
  getFiveDaysWeather,
} from '../store/actions/weatherActions'
import { getCityByCoords } from '../store/actions/cityByCoordsActions'
import Spinner from '../components/layout/Spinner'
import AddFavoriteButton from '../components/AddFavoriteButton'
import SearchBox from '../components/SearchBox'
import ErrorToast from '../components/ErrorToast'
import useGeolocation from '../components/hooks/useGeolocation'
import FiveDaysForecast from '../components/FiveDaysForecast'

const HomePage = () => {
  const [apiWeatherFields, setApiWeatherFields] = useState({
    WeatherText: null,
    WeatherIcon: null,
    Value: null,
  })

  const [cityNameField, setCityNameField] = useState('Tel-Aviv')

  const geolocationPosition = useGeolocation()

  const dispatch = useDispatch()

  const currentWeather = useSelector((state) => state.currentWeather)
  const { loading, error, weather, currentWeatherCityName } = currentWeather

  const cityByCoords = useSelector((state) => state.cityByCoords)
  const { cityFromCoords } = cityByCoords

  const autoComplete = useSelector((state) => state.autoComplete)
  const { isSearch } = autoComplete

  const fiveDaysWeather = useSelector((state) => state.fiveDaysWeather)
  const { error: fiveDaysWeatherError } = fiveDaysWeather

  const favorites = useSelector((state) => state.favorites)
  const { showCityFromFavorites, favoriteCityName } = favorites

  useEffect(() => {
    if (favoriteCityName) {
      setCityNameField(favoriteCityName)
    }

    if (
      geolocationPosition.coords &&
      cityFromCoords &&
      !currentWeatherCityName &&
      !favoriteCityName
    ) {
      setCityNameField(cityFromCoords.EnglishName)
    }

    if (currentWeatherCityName && !favoriteCityName) {
      setCityNameField(currentWeatherCityName)
    }

    if (weather) {
      setApiWeatherFields({
        ...apiWeatherFields,
        WeatherText: weather.WeatherText,
        WeatherIcon: weather.WeatherIcon,
        Value: weather.Temperature.Metric.Value,
      })
    }
    // eslint-disable-next-line
  }, [weather])

  const { WeatherText, WeatherIcon, Value } = apiWeatherFields

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = !loading
    ? weatherImageChooser(WeatherText)
    : 'cloudy-day'

  useEffect(() => {
    const geolocationEnabled =
      geolocationPosition.coords && !isSearch && !showCityFromFavorites

    if (geolocationEnabled) {
      const { latitude, longitude } = geolocationPosition.coords
      dispatch(getCityByCoords(latitude, longitude))
    }
    const cityFromGeolocation =
      cityFromCoords && !isSearch && !showCityFromFavorites
    const cityNotBySearchNotFromFavorites = !isSearch && !showCityFromFavorites
    if (cityFromGeolocation) {
      dispatch(getCurrentWeather(cityFromCoords.Key))
      dispatch(getFiveDaysWeather(cityFromCoords.Key))
    } else if (cityNotBySearchNotFromFavorites) {
      dispatch(getCurrentWeather())
      dispatch(getFiveDaysWeather())
    }

    // eslint-disable-next-line
  }, [dispatch, geolocationPosition.coords, isSearch])

  useEffect(() => {
    document.title = `Hero Weather (${cityNameField})`
    return () => {
      document.title = `Hero Weather Favorites`
    }
  }, [cityNameField])

  return (
    <>
      <Row className='justify-content-md-center mb-5'>
        <Col md='auto'>
          <SearchBox />
        </Col>
      </Row>
      {loading ? (
        <Spinner />
      ) : error || fiveDaysWeatherError ? (
        <ErrorToast />
      ) : (
        <Jumbotron>
          <img
            src={`/img/weather-images/${weatherImage}.jpg`}
            alt=''
            className='weather-img'
            loading='lazy'
          />
          <div className='weather-icon'>
            <img
              src={`/img/weather-icons/${WeatherIcon}-s.png`}
              alt='weather icon'
              className='column'
              loading='lazy'
            />
            <div className='column'>
              <h4>{cityNameField} </h4>
              <p className='ml-2'>{roundedTemperature} &deg;</p>
            </div>
          </div>
          <div className='favorite-button'>
            <AddFavoriteButton />
          </div>
          <div className='weather-text'>
            <h1 className='l-heading'>{WeatherText}</h1>
          </div>
          <FiveDaysForecast />
        </Jumbotron>
      )}
    </>
  )
}

export default HomePage
