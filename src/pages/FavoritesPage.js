import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { getFavoritesWeatherStart } from '../redux/favorites/favoritesActions'
import Spinner from '../components/layout/Spinner'
import ErrorToast from '../components/ErrorToast'
import FavoriteItem from '../components/FavoriteItem'
import { FavoritesGrid } from './styled/Styled'

const FavoritesPage = () => {
  const dispatch = useDispatch()

  const favorites = useSelector((state) => state.favorites)
  const { favoritesWeatherItems, loading, favoritesItemsWeather, error } =
    favorites

  useEffect(() => {
    if (favoritesWeatherItems.length > 0) {
      dispatch(getFavoritesWeatherStart())
    }
  }, [dispatch, favoritesWeatherItems])

  return (
    <>
      <Helmet>
        <title>Hero Weather Favorites</title>
      </Helmet>
      <div>
        <h2 className='text-center mb-5'>Favorites</h2>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorToast />
        ) : favoritesWeatherItems && favoritesWeatherItems.length === 0 ? (
          <h4>There are no favorites yet</h4>
        ) : (
          favoritesWeatherItems &&
          !loading &&
          favoritesItemsWeather && (
            <FavoritesGrid className='text-center'>
              {favoritesItemsWeather.map((fav) => (
                <FavoriteItem
                  favoriteCityName={fav.favoriteCityName}
                  weather={fav.weather}
                  key={fav.key}
                  cityKey={fav.key}
                />
              ))}
            </FavoritesGrid>
          )
        )}
      </div>
    </>
  )
}

export default FavoritesPage
