import React, { useState, useEffect } from 'react'
import { Button, Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  addToFavorites,
  removeFromFavorites,
} from '../Redux/actions/favoritesActions'

const AddFavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch()

  const currentWeather = useSelector((state) => state.currentWeather)
  const { cityName } = currentWeather

  const favorites = useSelector((state) => state.favorites)
  const { favoritesItems } = favorites

  useEffect(() => {
    let check = false
    if (favoritesItems.length > 0) {
      check = favoritesItems.find((fav) => fav.cityName === cityName)
    }
    if (check) {
      setIsFavorite(true)
    }
  }, [cityName, favoritesItems])

  const favoritesButtonHandler = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(cityName))
      setIsFavorite(false)
    } else {
      dispatch(addToFavorites(cityName))
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
      <span className='fav-text'>
        {isFavorite ? `Remove to favorites` : `Add to favorites`}
      </span>
    </Button>
  )
}

export default AddFavoriteButton
