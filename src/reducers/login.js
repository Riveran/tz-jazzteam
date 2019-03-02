import { LOGIN_CONNECT, LOGIN_ERROR, LOG_OUT } from './../constants/index'

const initialState = {
  username: '',
  errorMsg: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CONNECT:
      return { ...state, username: action.username }

    case LOGIN_ERROR:
      return { ...state, errorMsg: action.errorMsg }

    case LOG_OUT:
      return { ...state, username: '' }

    default:
      return state
  }
}
