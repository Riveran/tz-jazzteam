import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class index extends Component {
  static propTypes = {
    getLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
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

  handleClick = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.getLogin(username, password)
  }

  render () {
    if (this.props.login.username) return <button>Log out</button>
    return (
      <div>
        <form>
          <div>
            <label>Name:</label>
            <input
              id='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              id='password'
              type='text'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        {this.props.login.errorMsg ? this.props.login.errorMsg : null}
      </div>
    )
  }
}

export default index
