import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import {
  getCurrentWeather,
  getFiveDaysWeather,
} from '../store/actions/weatherActions'
import { FAVORITE_SHOW_ITEM } from '../store/constants/favoritesConstants'
import { weatherImageChooser } from './helper/weatherImageChooser'

const FavoriteItem = ({
  favoriteCityName,
  cityKey,
  weather: {
    WeatherText,
    WeatherIcon,
    Temperature: {
      Metric: { Value },
    },
  },
}) => {
  const history = useHistory()

  const dispatch = useDispatch()

  const roundedTemperature = Math.round(parseFloat(Value))

  const weatherImage = weatherImageChooser(WeatherText)

  const onClickHandler = () => {
    dispatch({ type: FAVORITE_SHOW_ITEM, payload: favoriteCityName })
    dispatch(getCurrentWeather(cityKey, favoriteCityName))
    dispatch(getFiveDaysWeather(cityKey))
    history.push('/home')
  }

  return (
    <Card
      className='img-fluid'
      style={{ width: '15rem', height: '160px', cursor: 'pointer' }}
      onClick={onClickHandler}
    >
      <Card.Img
        src={`/img/weather-images/${weatherImage}.jpg`}
        alt='Weather image'
        style={{ width: '100%' }}
        loading='lazy'
      />
      <Card.ImgOverlay className='text-center'>
        <h3
          style={{ fontSize: favoriteCityName.length >= 8 ? '1.5rem' : '2rem' }}
        >
          {favoriteCityName}
        </h3>
        <img
          src={`/img/weather-icons/${WeatherIcon}-s.png`}
          alt='weather icon'
          className='column'
          loading='lazy'
        />
        <p className='card-text-favorite'>{roundedTemperature} &deg;</p>
      </Card.ImgOverlay>{' '}
    </Card>
  )
}

FavoriteItem.propTypes = {
  favoriteCityName: PropTypes.string.isRequired,
  cityKey: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default FavoriteItem
