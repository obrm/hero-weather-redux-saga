import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoritesWeatherStart } from '../redux/favorites/favoritesActions'
import Spinner from '../components/layout/Spinner'
import ErrorToast from '../components/ErrorToast'
import FavoriteList from '../components/FavoriteList'

const FavoritesPage = () => {
  const dispatch = useDispatch()

  const favorites = useSelector((state) => state.favorites)
  const { favoritesWeatherItems, loading, favoritesItemsWeather, error } =
    favorites

  useEffect(() => {
    dispatch(getFavoritesWeatherStart())
  }, [dispatch, favoritesWeatherItems])

  let content
  if (loading) content = <Spinner />
  if (error) content = <ErrorToast error={error} />
  if (favoritesWeatherItems && favoritesWeatherItems.length === 0)
    content = <h4>There are no favorites yet</h4>
  if (favoritesWeatherItems && !loading && favoritesItemsWeather)
    content = <FavoriteList />

  return (
    <div>
      <h2 className='text-center mb-5'>Favorites</h2>
      {content}
    </div>
  )
}

export default FavoritesPage
