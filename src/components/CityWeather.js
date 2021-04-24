import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import { weatherImageChooser } from '../weatherImageChooser'
import { getCurrentWeatherByCoords } from '../actions/weatherActions'
import Spinner from './layout/Spinner'
import WeatherForecastItem from './WeatherForecastItem'
import SearchBox from './SearchBox'

const CityWeather = () => {
  const dispatch = useDispatch()

  const currentWeather = useSelector((state) => state.currentWeather)
  const { loading, error, weather } = currentWeather

  const {
    WeatherText,
    WeatherIcon,
    Temperature: {
      Metric: { Value },
    },
  } = weather

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = !loading
    ? weatherImageChooser(WeatherText)
    : 'cloudy-day'

  const successCallback = (position) => {
    const { coords } = position
    return coords
  }

  const errorCallback = (error) => {
    const { code } = error
    return code
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
  }

  let result = navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    options
  )

  if (typeof result === 'number') {
    result = { latitude: 32.0759177, longitude: 34.7839602 }
  }

  useEffect(() => {
    const { latitude, longitude } = result
    dispatch(getCurrentWeatherByCoords(latitude, longitude))
  }, [dispatch, result])

  return (
    <>
      <Row className='justify-content-md-center mb-5'>
        <Col md='auto'>
          <SearchBox />
        </Col>
      </Row>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Jumbotron>
          <img
            src={`/img/weather-images/${weatherImage}.jpg`}
            alt=''
            className='weather-img'
          />
          <div className='weather-icon'>
            <img
              src={`/img/weather-icons/${WeatherIcon}-s.png`}
              alt='weather icon'
              className='column'
            />
            <div className='column'>
              <h4>Tel-Aviv </h4>
              <p className='ml-2'>{roundedTemperature} &deg;</p>
            </div>
          </div>
          <div className='weather-text'>
            <h1 className='l-heading'>{WeatherText}</h1>
          </div>
          <div className='weather-forecast'>
            <WeatherForecastItem />
            <WeatherForecastItem />
            <WeatherForecastItem />
            <WeatherForecastItem />
            <WeatherForecastItem />
          </div>
        </Jumbotron>
      )}
    </>
  )
}

export default CityWeather
