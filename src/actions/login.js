import { LOGIN_CONNECT, LOGIN_ERROR } from './../constants/index'

export const getLogin = (username, passsword) => {
  if (username.toLowerCase() !== 'admin' || passsword !== '12345678') {
    return {
      type: LOGIN_ERROR,
      errorMsg: 'Неверный логин или пароль'
    }
  } else {
    return {
      type: LOGIN_CONNECT,
      username
    }
  }
}
