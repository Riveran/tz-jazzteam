import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './../components/NavBar/index'

export class NavBarContainer extends Component {
  static propTypes = {
    login: PropTypes.string.isRequired
  }

  render () {
    return <NavBar login={this.props.login} />
  }
}

const mapStateToProps = state => ({
  login: state.login.username
})

export default connect(
  mapStateToProps,
  null
)(NavBarContainer)
