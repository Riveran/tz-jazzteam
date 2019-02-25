import { combineReducers } from 'redux'
import info from './info'
import startPage from './startPage'
import login from './login'
import profile from './profile'
import table from './table'

export const rootReducer = combineReducers({
  info,
  startPage,
  login,
  profile,
  table
})
