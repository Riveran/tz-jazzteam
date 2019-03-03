import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export class index extends Component {
  static propTypes = {
    getLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired
  }

  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const { id } = e.currentTarget
    this.setState({
      [id]: e.currentTarget.value
    })
  }

  loginOut = e => {
    this.props.logOut()
    this.setState({
      username: '',
      password: ''
    })
  }

  handleClick = async e => {
    e.preventDefault()
    const { username, password } = this.state
    await this.props.getLogin(username, password)
    if (this.props.login.username) this.props.history.push('/profile')
  }

  render () {
    if (this.props.login.username) {
      return (
        <div className='login-wrapper'>
          <form className='form-wrapper'>
            <div className='form-item'>
              <button className='form-btn_out' onClick={this.loginOut}>
                Login out
              </button>
            </div>
          </form>
        </div>
      )
    }
    return (
      <div className='login-wrapper'>
        <form className='form-wrapper'>
          <div className='form-item'>
            <label>Login</label>
            <input
              className='form-item_input'
              id='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className='form-item'>
            <label>Password</label>
            <input
              className='form-item_input'
              id='password'
              type='text'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button className='form-btn' onClick={this.handleClick}>
            Submit
          </button>
          <span className='form-error'>
            {this.props.login.errorMsg ? this.props.login.errorMsg : null}
          </span>
        </form>
      </div>
    )
  }
}

export default index
