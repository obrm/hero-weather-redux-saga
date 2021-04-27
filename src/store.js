import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  currentWeatherReducer,
  fiveDaysWeatherReducer,
  favoritesWeatherReducer,
} from './reducers/weatherReducers'
import { cityByCoordsReducer } from './reducers/cityReducers'
import { favoritesReducer } from './reducers/favoritesReducers'
import { autoCompleteReducer } from './reducers/autoCompleteReducers'

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
