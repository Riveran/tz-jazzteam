import { combineReducers } from 'redux'
import info from './info'
import profile from './profile'
import startPage from './startPage'

export const rootReducer = combineReducers({
  info,
  profile,
  startPage
})
