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
          <tr key={name + index}>
            <td>{category}</td>
            <td>{price}</td>
            <td>{name}</td>
            <td>{country}</td>
          </tr>
        )
      }
    )

    return tableTemplate
  }

  render () {
    return (
      <div>
        <table className='test'>
          <thead>
            <tr>
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
