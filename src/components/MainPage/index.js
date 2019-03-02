import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

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
        <div className='main-wrapper' key={title + index}>
          <h3 className='main-title'>{title}</h3>
          <p>{about}</p>
          <p className='page_show-more' onClick={this.handleClick}>
            {showMoreInfo ? 'Close' : 'Show more'}
          </p>
          {showMoreInfo ? <p>{moreInfo}</p> : null}
        </div>
      )
    )

    return renderMain
  }

  render () {
    return <div className='main_page-wrapper'>{this.getBody()}</div>
  }
}

export default index
