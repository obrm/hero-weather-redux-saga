import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { getWeatherRequest } from '../redux/weather/weatherActions'
import HomeJumbotron from '../components/HomeJumbotron'
import SearchBox from '../components/SearchBox'
import useGeolocation from '../components/hooks/useGeolocation'

const HomePage = () => {
  const geolocationPosition = useGeolocation()

  const dispatch = useDispatch()

  const isSearch = useSelector((state) => state.autoComplete.isSearch)

  const showCityFromFavorites = useSelector(
    (state) => state.favorites.showCityFromFavorites
  )

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

  return (
    <>
      <Row className='justify-content-center text-center mx-auto mb-5'>
        <Col md='auto'>
          <SearchBox />
        </Col>
      </Row>
      <HomeJumbotron />
    </>
  )
}

export default HomePage
