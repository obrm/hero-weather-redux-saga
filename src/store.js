import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  currentWeatherReducer,
  fiveDaysWeatherReducer,
} from './reducers/weatherReducers'
import { cityByCoordsReducer } from './reducers/cityReducers'

const reducer = combineReducers({
  cityByCoords: cityByCoordsReducer,
  currentWeather: currentWeatherReducer,
  fiveDaysWeather: fiveDaysWeatherReducer,
})

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
