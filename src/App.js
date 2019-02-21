import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigaton from './components/NavBar'
import MainContainer from './containers/MainContainer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navigaton />
          <Switch>
            <Route path='/' component={MainContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
