import { LOGIN_CONNECT, LOGIN_ERROR } from './../constants/index'

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

    default:
      return state
  }
}
