import React, { Component } from 'react'
import './styleTable.css'
import PropTypes from 'prop-types'

export class index extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    getTableData: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    this.props.getTableData()
  }

  getTable = () => {
    const { data } = this.props
    const tableTemplate = data.map(
      ({ category, price, name, country, location }, index) => {
        return (
          <tr className='table-row' key={name + index}>
            <td
              suppressContentEditableWarning='true'
              contentEditable='true'
              className='table-item_category'
            >
              {category}
            </td>
            <td
              suppressContentEditableWarning='true'
              contentEditable='true'
              className='table-item'
            >
              {price}
            </td>
            <td
              suppressContentEditableWarning='true'
              contentEditable='true'
              className='table-item'
            >
              {name}
            </td>
            <td
              suppressContentEditableWarning='true'
              contentEditable='true'
              className='table-item'
            >
              {country}
            </td>
            <td
              suppressContentEditableWarning='true'
              contentEditable='true'
              className='table-item'
            >
              {location}
            </td>
          </tr>
        )
      }
    )

    return tableTemplate
  }

  render () {
    const { data } = this.props
    if (!data.length) {
      return <div className='table-wrapper'>loading...</div>
    }

    return (
      <div className='table-wrapper'>
        <table className='table'>
          <thead className='table-head'>
            <tr className='table-row'>
              <th className='table-head_item'>Категория</th>
              <th className='table-head_item'>Цена</th>
              <th className='table-head_item'>Имя</th>
              <th className='table-head_item'>Страна</th>
              <th className='table-head_item'>Место</th>
            </tr>
          </thead>
          <tbody>{this.getTable()}</tbody>
        </table>
        <div>Количество товара: {this.props.data.length}</div>
        <div>Общее количество ячеек: {this.props.data.length * 5}</div>
      </div>
    )
  }
}

export default index
