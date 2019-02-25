import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from './../components/TableData/index'
import { getTableData } from './../actions/table'
import { connect } from 'react-redux'

export class TableContainer extends Component {
  static propTypes = {
    getTableData: PropTypes.func.isRequired,
    tableData: PropTypes.array.isRequired
  }

  render () {
    return (
      <Table
        getTableData={this.props.getTableData}
        data={this.props.tableData}
      />
    )
  }
}

const mapStateToProps = state => ({
  tableData: state.table.tableData
})

const mapDispatchToProps = dispatch => ({
  getTableData: () => dispatch(getTableData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer)
