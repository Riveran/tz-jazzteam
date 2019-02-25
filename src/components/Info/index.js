import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class index extends Component {
  static propTypes = {
    infoData: PropTypes.array.isRequired
  }

  getBody = () => {
    const renderInfo = this.props.infoData.map(({ title, text }, index) => (
      <div key={title + index}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    ))
    return renderInfo
  }

  render () {
    return <div>{this.getBody()}</div>
  }
}

export default index
