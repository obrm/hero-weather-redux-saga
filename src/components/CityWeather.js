import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Jumbotron, Row, Col } from 'react-bootstrap'

import { weatherImageChooser } from './helper/weatherImageChooser'
import { getCurrentWeather } from '../actions/weatherActions'
import { getCityByCoords } from '../actions/cityActions'
import Spinner from './layout/Spinner'
import WeatherForecastItem from './WeatherForecastItem'
import SearchBox from './SearchBox'
import useGeolocation from './hooks/useGeolocation'

const CityWeather = () => {
  const [weatherFields, setWeatherFields] = useState({
    WeatherText: null,
    WeatherIcon: null,
    Value: null,
    City: 'Tel-Aviv',
  })

  const location = useGeolocation()

  const dispatch = useDispatch()

  const currentWeather = useSelector((state) => state.currentWeather)
  const { loading, error, weather } = currentWeather

  const cityByCoords = useSelector((state) => state.cityByCoords)
  const { city } = cityByCoords

  useEffect(() => {
    if (weather) {
      setWeatherFields({
        ...weatherFields,
        WeatherText: weather.WeatherText,
        WeatherIcon: weather.WeatherIcon,
        Value: weather.Temperature.Metric.Value,
      })
    }
  }, [weather, weatherFields])

  useEffect(() => {
    if (location.coords && city) {
      setWeatherFields({ ...weatherFields, City: city.EnglishName })
    }
  }, [city, location.coords, weatherFields])

  const { WeatherText, WeatherIcon, Value, City } = weatherFields

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = !loading
    ? weatherImageChooser(WeatherText)
    : 'cloudy-day'

  useEffect(() => {
    if (location.coords) {
      const { latitude, longitude } = location.coords
      dispatch(getCityByCoords(latitude, longitude))
    }
    if (city) {
      dispatch(getCurrentWeather(city.Key))
    } else {
      dispatch(getCurrentWeather())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, location])

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
              <h4>{City} </h4>
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
