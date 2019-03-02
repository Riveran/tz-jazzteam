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
    if (data.length < 2) return <div>loading</div>
    const tableTemplate = data.map(
      ({ category, price, name, country }, index) => {
        return (
          <tr className='table-row' key={name + index}>
            <td className='table-item'>{category}</td>
            <td className='table-item'>{price}</td>
            <td className='table-item'>{name}</td>
            <td className='table-item'>{country}</td>
          </tr>
        )
      }
    )

    return tableTemplate
  }

  render () {
    return (
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr className='table-row'>
              <th>Категория</th>
              <th>Цена</th>
              <th>Имя</th>
              <th>Страна</th>
            </tr>
          </thead>
          <tbody>{this.getTable()}</tbody>
        </table>
      </div>
    )
  }
}

export default index
