import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './../components/Login/index'
import { connect } from 'react-redux'
import { getLogin } from './../actions/login'

export class LoginContainer extends Component {
  static propTypes = {
    getLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
  }

  render () {
    return <Login login={this.props.login} getLogin={this.props.getLogin} />
  }
}
const mapStateToProps = state => ({
  login: state.login
})

const mapDispatchToProps = dispatch => ({
  getLogin: (username, password) => dispatch(getLogin(username, password))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
