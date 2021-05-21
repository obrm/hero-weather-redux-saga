import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useHistory } from 'react-router-dom'

import { getWeatherRequest } from '../redux/weather/weatherActions'
import { FAVORITE_SHOW_ITEM } from '../redux/favorites/favoritesConstants'
import { chooseWeatherImage } from './helper/chooseWeatherImage'
import {
  StyledFavoriteItemCard,
  StyledHeading3,
  StyledFavoriteCardText,
} from './styled/Styled'

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
    history.push('/home')
  }

  return (
    <StyledFavoriteItemCard className='img-fluid' onClick={onClickHandler}>
      <StyledFavoriteItemCard.Img
        src={`/img/weather-images/${weatherImage}.jpg`}
        alt='Weather image'
        style={{ width: '100%' }}
        loading='lazy'
      />
      <StyledFavoriteItemCard.ImgOverlay className='text-center'>
        <StyledHeading3>
          {favoriteCityName.length > 17
            ? `${favoriteCityName.slice(0, 15)}...`
            : favoriteCityName}
        </StyledHeading3>
        <img
          src={`/img/weather-icons/${WeatherIcon}-s.png`}
          alt='weather icon'
          className='column'
          loading='lazy'
        />
        <StyledFavoriteCardText>
          {roundedTemperature} &deg;
        </StyledFavoriteCardText>
      </StyledFavoriteItemCard.ImgOverlay>{' '}
    </StyledFavoriteItemCard>
  )
}

FavoriteItem.propTypes = {
  favoriteCityName: PropTypes.string.isRequired,
  cityKey: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

export default FavoriteItem
