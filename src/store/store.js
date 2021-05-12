import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// saga
// import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  weatherReducer,
  favoritesWeatherReducer,
} from './reducers/weatherReducers'
import { cityByCoordsReducer } from './reducers/cityByCoordsReducers'
import { favoritesReducer } from './reducers/favoritesReducers'
import { autoCompleteReducer } from './reducers/autoCompleteReducers'

const reducer = combineReducers({
  weather: weatherReducer,
  cityByCoords: cityByCoordsReducer,
  autoComplete: autoCompleteReducer,
  favoritesWeather: favoritesWeatherReducer,
  favorites: favoritesReducer,
})

const favoritesFromStorage = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : []

const initialState = {
  favorites: { favoritesWeatherItems: favoritesFromStorage },
}

const middleware = [thunk]
// const sagaMiddleware = createSagaMiddleware()

// sagaMiddleware.run()

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
