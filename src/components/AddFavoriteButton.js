import React, { useState } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {
  addItemToFavoritesStart,
  removeItemFromFavoritesStart,
} from '../redux/favorites/favoritesActions'
import { FavoriteText } from './styles/components.styles'
import { findCity } from './helper/findCity'

const AddFavoriteButton = ({
  currentWeatherCityName,
  favoritesWeatherItems,
}) => {
  const [isFavorite, setIsFavorite] = useState(
    !!findCity(favoritesWeatherItems, currentWeatherCityName)
  )
  const dispatch = useDispatch()

  const onClickHandler = () => {
    if (isFavorite) {
      dispatch(removeItemFromFavoritesStart(currentWeatherCityName))
      setIsFavorite(false)
    } else {
      dispatch(addItemToFavoritesStart(currentWeatherCityName))
      setIsFavorite(true)
    }
  }

  return (
    <Button variant='outline' onClick={onClickHandler}>
      <Badge variant='light'>
        {isFavorite ? (
          <i className='far fa-heart fa-2x' style={{ color: '#E9EBEE' }}></i>
        ) : (
          <i className='fas fa-heart fa-2x' style={{ color: '#f52f19' }}></i>
        )}
      </Badge>
      <FavoriteText>
        {isFavorite ? `Remove from favorites` : `Add to favorites`}
      </FavoriteText>
    </Button>
  )
}

AddFavoriteButton.propTypes = {
  currentWeatherCityName: PropTypes.string,
  favoritesWeatherItems: PropTypes.array.isRequired,
}

export default AddFavoriteButton
