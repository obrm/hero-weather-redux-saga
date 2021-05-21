import React, { useState, useEffect } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  addItemToFavoritesStart,
  removeItemFromFavoritesStart,
} from '../redux/favorites/favoritesActions'
import { FavoriteText } from './styled/Styled'

const AddFavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch()

  const weather = useSelector((state) => state.weather)
  const { currentWeatherCityName } = weather

  const favorites = useSelector((state) => state.favorites)
  const { favoritesWeatherItems } = favorites

  useEffect(() => {
    let check = false

    if (favoritesWeatherItems && favoritesWeatherItems.length > 0) {
      check = favoritesWeatherItems.find(
        (fav) => fav.favoriteCityName === currentWeatherCityName
      )
    }
    if (check) {
      setIsFavorite(true)
    }
  }, [currentWeatherCityName, favoritesWeatherItems])

  const favoritesButtonHandler = () => {
    if (isFavorite) {
      dispatch(removeItemFromFavoritesStart(currentWeatherCityName))
      setIsFavorite(false)
    } else {
      dispatch(addItemToFavoritesStart(currentWeatherCityName))
    }
  }

  return (
    <Button variant='outline' onClick={favoritesButtonHandler}>
      <Badge variant='light'>
        {isFavorite ? (
          <i className='far fa-heart fa-2x' style={{ color: '#fff' }}></i>
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

export default AddFavoriteButton
