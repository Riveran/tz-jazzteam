import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class index extends Component {
  static propTypes = {
    profileData: PropTypes.array.isRequired
  }

  getBody = () => {
    const renderProfile = this.props.profileData.map(
      ({ name, position, image, city, site, infoFovor }, index) => (
        <div key={name + index}>
          <h3>{name}</h3>
          <p>{position}</p>
          <img src={image} />
          <p>{city}</p>
          <p>
            <a href={site}>Site</a>
          </p>
          <p>{infoFovor}</p>
        </div>
      )
    )
    return renderProfile
  }

  render () {
    return <div>{this.getBody()}</div>
  }
}

export default index
