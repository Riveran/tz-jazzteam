import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class index extends Component {
  static propTypes = {
    main: PropTypes.array.isRequired
  }

  state = {
    showMoreInfo: false
  }

  handleClick = () => {
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    })
  }

  getBody = () => {
    const { showMoreInfo } = this.state
    const renderMain = this.props.main.map(
      ({ title, about, moreInfo }, index) => (
        <div key={title + index}>
          <h3>{title}</h3>
          <p>{about}</p>
          <p onClick={this.handleClick}>
            {showMoreInfo ? 'Close' : 'show more'}
          </p>
          {showMoreInfo ? <p>{moreInfo}</p> : null}
        </div>
      )
    )

    return renderMain
  }

  render () {
    return <div>{this.getBody()}</div>
  }
}

export default index
