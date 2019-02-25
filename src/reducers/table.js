import {GET_DATA} from './../constants/index'

const initialState = {
    tableData: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_DATA:
    return { ...state, tableData: payload }

  default:
    return state
  }
}
