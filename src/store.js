import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  currentWeatherReducer,
  fiveDaysWeatherReducer,
  favoritesWeatherReducer,
} from './Redux/reducers/weatherReducers'
import { cityByCoordsReducer } from './Redux/reducers/cityReducers'
import { favoritesReducer } from './Redux/reducers/favoritesReducers'
import { autoCompleteReducer } from './Redux/reducers/autoCompleteReducers'

const reducer = combineReducers({
  cityByCoords: cityByCoordsReducer,
  currentWeather: currentWeatherReducer,
  autoComplete: autoCompleteReducer,
  fiveDaysWeather: fiveDaysWeatherReducer,
  favoritesWeather: favoritesWeatherReducer,
  favorites: favoritesReducer,
})

const favoritesFromStorage = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : []

const initialState = {
  favorites: { favoritesItems: favoritesFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
