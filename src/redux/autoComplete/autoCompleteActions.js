import {
  AUTO_COMPLETE_REQUEST,
  AUTO_COMPLETE_SUCCESS,
  AUTO_COMPLETE_FAIL,
} from './autoCompleteConstants.js'
import { errorHandler } from '../helper/errorHandler'

export const getAutoCompleteResultsRequest = (key) => ({
  type: AUTO_COMPLETE_REQUEST,
  payload: key,
})

export const getAutoCompleteResultsSuccess = (data) => ({
  type: AUTO_COMPLETE_SUCCESS,
  payload: data,
})

export const getAutoCompleteResultsFail = (error) => ({
  type: AUTO_COMPLETE_FAIL,
  payload: errorHandler(error),
})
