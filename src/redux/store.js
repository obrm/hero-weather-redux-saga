import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { getFromStorage } from './helper/localStorage'
import { weatherReducer } from './weather/weatherReducers'
import { favoritesReducer } from './favorites/favoritesReducers'
import { autoCompleteReducer } from './autoComplete/autoCompleteReducers'
import { themeReducer } from './theme/themeReducers'
import rootSaga from './rootSaga'

const reducer = combineReducers({
  weather: weatherReducer,
  autoComplete: autoCompleteReducer,
  favorites: favoritesReducer,
  themeToggle: themeReducer,
})

const favoritesFromStorage = getFromStorage('favorites')
  ? getFromStorage('favorites')
  : []

const themeFromStorage = getFromStorage('theme') || false

const initialState = {
  favorites: { favoritesWeatherItems: favoritesFromStorage },
  themeToggle: { theme: themeFromStorage },
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
