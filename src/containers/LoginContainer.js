import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './../components/Login/index'
import { connect } from 'react-redux'
import { getLogin, logOut } from './../actions/login'

export class LoginContainer extends Component {
  static propTypes = {
    getLogin: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
  }

  render () {
    return (
      <Login
        login={this.props.login}
        getLogin={this.props.getLogin}
        logOut={this.props.logOut}
        history={this.props.history}
      />
    )
  }
}
const mapStateToProps = state => ({
  login: state.login
})

const mapDispatchToProps = dispatch => ({
  getLogin: (username, password) => dispatch(getLogin(username, password)),
  logOut: () => dispatch(logOut())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
