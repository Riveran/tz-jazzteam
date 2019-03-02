import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
export class index extends Component {
  static propTypes = {
    profileData: PropTypes.array.isRequired
  }

  getBody = () => {
    const renderProfile = this.props.profileData.map(
      ({ name, position, image, infoFovor }, index) => (
        <div className='profile-item' key={name + index}>
          <h3 className='profile-name'>{name}</h3>
          <p className='profile-position'>{position}</p>
          <img className='profile-image' src={image} />
          <p className='profile-info'>{infoFovor}</p>
        </div>
      )
    )
    return renderProfile
  }

  render () {
    return <div className='profile-wrapper'>{this.getBody()}</div>
  }
}

export default index
