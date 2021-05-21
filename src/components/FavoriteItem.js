import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { getWeatherRequest } from '../redux/weather/weatherActions'
import { FAVORITE_SHOW_ITEM } from '../redux/favorites/favoritesConstants'
import { chooseWeatherImage } from './helper/chooseWeatherImage'
import {
  FavoriteItemCard,
  Heading3,
  FavoriteCardText,
} from './styles/components.styles'

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

  const weatherImage = chooseWeatherImage(WeatherText)

  const onClickHandler = () => {
    dispatch({ type: FAVORITE_SHOW_ITEM, payload: favoriteCityName })
    dispatch(
      getWeatherRequest({ location: cityKey, cityName: favoriteCityName })
    )
    history.push('/')
  }

  return (
    <FavoriteItemCard className='img-fluid' onClick={onClickHandler}>
      <FavoriteItemCard.Img
        src={`/img/weather-images/${weatherImage}.jpg`}
        alt='Weather image'
        style={{ width: '100%' }}
        loading='lazy'
      />
      <FavoriteItemCard.ImgOverlay className='text-center'>
        <Heading3>
          {favoriteCityName.length > 17
            ? `${favoriteCityName.slice(0, 15)}...`
            : favoriteCityName}
        </Heading3>
        <img
          src={`/img/weather-icons/${WeatherIcon}-s.png`}
          alt='weather icon'
          className='column'
          loading='lazy'
        />
        <FavoriteCardText>{roundedTemperature} &deg;</FavoriteCardText>
      </FavoriteItemCard.ImgOverlay>{' '}
    </FavoriteItemCard>
  )
}

FavoriteItem.propTypes = {
  favoriteCityName: PropTypes.string.isRequired,
  cityKey: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default FavoriteItem
