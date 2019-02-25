import Axios from 'axios'
import { GET_TABLE_URL, GET_DATA } from './../constants/index'

export const getTableData = () => {
  return async dispatch => {
    try {
      const getTable = await Axios.get(`${GET_TABLE_URL}`)
      dispatch(getDataTable(getTable.data))
    } catch {}
  }
}

export const getDataTable = payload => ({
  type: GET_DATA,
  payload
})
