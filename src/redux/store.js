import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'
import { weatherReducer } from './weather/weatherReducers'
import { favoritesReducer } from './favorites/favoritesReducers'
import { autoCompleteReducer } from './autoComplete/autoCompleteReducers'
import rootSaga from './rootSaga'

const reducer = combineReducers({
  weather: weatherReducer,
  autoComplete: autoCompleteReducer,
  favorites: favoritesReducer,
})

const favoritesFromStorage = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : []

const initialState = {
  favorites: { favoritesWeatherItems: favoritesFromStorage },
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
