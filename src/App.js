import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavContainer from './containers/NavBarContainer'
import MainContainer from './containers/MainContainer'
import InfoContainer from './containers/InfoContainer'
import LoginContainer from './containers/LoginContainer'
import ProfileContainer from './containers/ProfileContainer'
import TableContainer from './containers/TableContainer'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='app-wrapper'>
          <NavContainer />
          <Switch>
            <Route exact path='/' component={MainContainer} />
            <Route path='/info' component={InfoContainer} />
            <Route path='/login' component={LoginContainer} />
            <PrivateRoute path='/profile' component={ProfileContainer} />
            <PrivateRoute path='/table' component={TableContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
