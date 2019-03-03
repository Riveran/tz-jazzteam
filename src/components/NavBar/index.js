import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class index extends Component {
  render () {
    return (
      <div className='navigation-wrapper'>
        <ul className='navigation-items'>
          <li className='navigation_item'>
            <Link className='navigation_item-link' to='/'>
              Main
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_item-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_item-link' to='/profile'>
              Profile
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_item-link' to='/info'>
              Info
            </Link>
          </li>
          <li className='navigation_item'>
            <Link className='navigation_item-link' to='/table'>
              Table
            </Link>
          </li>
        </ul>
        <p className='navigation-login'>
          Login:{' '}
          {this.props.login ? (
            <span className='login-on'>Admin</span>
          ) : (
            <span className='login-off'>Offline</span>
          )}
        </p>
      </div>
    )
  }
}
