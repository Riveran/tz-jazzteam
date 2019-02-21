import React, { Component } from 'react'
import Main from './../components/MainPage/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class MainContainer extends Component {
  static propTypes = {
    main: PropTypes.array.isRequired
  }

  render () {
    return <Main main={this.props.main} />
  }
}

const mapStateToProps = state => ({
  main: state.startPage.main
})

export default connect(
  mapStateToProps,
  null
)(MainContainer)
