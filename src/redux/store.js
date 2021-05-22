import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'
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

const favoritesFromStorage = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : []

const themeFromStorage = localStorage.getItem('theme') === 'true' ? true : false

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
