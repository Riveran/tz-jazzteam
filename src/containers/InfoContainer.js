import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Info from './../components/Info'
import { connect } from 'react-redux'

export class InfoContainer extends Component {
  static propTypes = {
    infoData: PropTypes.array.isRequired
  }

  render () {
    return (
      <div>
        <Info infoData={this.props.infoData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  infoData: state.info.infoData
})

export default connect(
  mapStateToProps,
  null
)(InfoContainer)
