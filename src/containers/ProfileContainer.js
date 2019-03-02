import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Profile from './../components/Profile/index'
import { connect } from 'react-redux'

export class ProfileContainer extends Component {
  static propTypes = {
    prfileData: PropTypes.array.isRequired
  }

  render () {
    return <Profile profileData={this.props.profileData} />
  }
}

const mapStateToProps = state => ({
  profileData: state.profile.profileData
})

export default connect(
  mapStateToProps,
  null
)(ProfileContainer)
