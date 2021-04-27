import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAIL,
  AUTO_COMPLETE_RESET,
} from '../constants/autoCompleteConstants'

export const autoCompleteReducer = (
  state = { results: [], isSearch: false },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case AUTO_COMPLETE_REQUEST:
      return { ...state, loading: true }
    case AUTO_COMPLETE_SUCCESS:
      return { loading: false, results: payload, isSearch: true }
    case AUTO_COMPLETE_FAIL:
      return { loading: false, error: payload }
    case AUTO_COMPLETE_RESET:
      return { ...state, results: [] }
    default:
      return state
  }
}
