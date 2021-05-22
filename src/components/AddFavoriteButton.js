import React, { useState, useEffect } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  addItemToFavoritesStart,
  removeItemFromFavoritesStart,
} from '../redux/favorites/favoritesActions'
import { FavoriteText } from './styles/components.styles'

const AddFavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch()

  const weather = useSelector((state) => state.weather)
  const { currentWeatherCityName } = weather

  const favorites = useSelector((state) => state.favorites)
  const { favoritesWeatherItems } = favorites

  useEffect(() => {
    setIsFavorite((prev) => {
      if (favoritesWeatherItems.length > 0) {
        return favoritesWeatherItems.find(
          (fav) => fav.favoriteCityName === currentWeatherCityName
        )
      }
      return prev
    })
  }, [currentWeatherCityName, favoritesWeatherItems])

  const onClickHandler = () => {
    if (isFavorite) {
      dispatch(removeItemFromFavoritesStart(currentWeatherCityName))
      setIsFavorite(false)
    } else {
      dispatch(addItemToFavoritesStart(currentWeatherCityName))
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

export default AddFavoriteButton
