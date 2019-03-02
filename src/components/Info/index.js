import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export class index extends Component {
  static propTypes = {
    infoData: PropTypes.array.isRequired
  }

  getBody = () => {
    const renderInfo = this.props.infoData.map(({ title, text }, index) => (
      <div className='info_item-wrapper' key={title + index}>
        <h3 className='info-title'>{title}</h3>
        <p className='info-text'>{text}</p>
      </div>
    ))
    return renderInfo
  }

  render () {
    return <div className='info-wrapper'>{this.getBody()}</div>
  }
}

export default index
