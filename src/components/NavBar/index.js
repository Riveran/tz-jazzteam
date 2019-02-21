import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class index extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Main</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link to='/info'>Info</Link>
          </li>
          <li>
            <Link to='/table'>Table</Link>
          </li>
        </ul>
      </div>
    )
  }
}
