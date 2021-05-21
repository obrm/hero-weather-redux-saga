import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import { weatherImageChooser } from '../components/helper/weatherImageChooser'
import { getWeatherRequest } from '../redux/weather/weatherActions'
import Spinner from '../components/layout/Spinner'
import AddFavoriteButton from '../components/AddFavoriteButton'
import SearchBox from '../components/SearchBox'
import ErrorToast from '../components/ErrorToast'
import useGeolocation from '../components/hooks/useGeolocation'
import FiveDaysForecast from '../components/FiveDaysForecast'
import {
  StyledJumbotron,
  StyledWeatherImage,
  StyledWeatherIcon,
  StyledFavoriteButton,
  StyledWeatherText,
} from './styled/Styled'
import { LargeHeading } from './styled/StyledUtils'

const HomePage = () => {
  const [apiWeatherFields, setApiWeatherFields] = useState({
    WeatherText: null,
    WeatherIcon: null,
    Value: null,
  })

  const [cityNameField, setCityNameField] = useState('')

  const geolocationPosition = useGeolocation()

  const dispatch = useDispatch()

  const weather = useSelector((state) => state.weather)
  const { loading, error, currentWeather, currentWeatherCityName } = weather

  const autoComplete = useSelector((state) => state.autoComplete)
  const { isSearch } = autoComplete

  const favorites = useSelector((state) => state.favorites)
  const { showCityFromFavorites, favoriteCityName: cityFromFavorites } =
    favorites

  useEffect(() => {
    const defaultLocation = !isSearch && !showCityFromFavorites
    const geolocationEnabled = geolocationPosition.coords && defaultLocation

    if (geolocationEnabled) {
      const { latitude, longitude } = geolocationPosition.coords
      dispatch(getWeatherRequest({ latitude, longitude }))
    } else if (defaultLocation) {
      dispatch(getWeatherRequest({ latitude: null, longitude: null }))
    }
  }, [dispatch, geolocationPosition.coords, isSearch, showCityFromFavorites])

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
        WeatherText: currentWeather.WeatherText,
        WeatherIcon: currentWeather.WeatherIcon,
        Value: currentWeather.Temperature.Metric.Value,
      })
    }
  }, [currentWeather])

  const { WeatherText, WeatherIcon, Value } = apiWeatherFields

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = !loading
    ? weatherImageChooser(WeatherText)
    : 'cloudy-day'

  return (
    <>
      <Helmet>
        <title>Hero Weather ({cityNameField})</title>
      </Helmet>
      <Row className='justify-content-md-center mb-5'>
        <Col md='auto'>
          <SearchBox />
        </Col>
      </Row>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorToast />
      ) : (
        <StyledJumbotron>
          <StyledWeatherImage
            src={`/img/weather-images/${weatherImage}.jpg`}
            alt=''
            loading='lazy'
          />
          <StyledWeatherIcon>
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
          </StyledWeatherIcon>
          <StyledFavoriteButton>
            <AddFavoriteButton />
          </StyledFavoriteButton>
          <StyledWeatherText>
            <LargeHeading>{WeatherText}</LargeHeading>
          </StyledWeatherText>
          <FiveDaysForecast />
        </StyledJumbotron>
      )}
    </>
  )
}

export default HomePage
