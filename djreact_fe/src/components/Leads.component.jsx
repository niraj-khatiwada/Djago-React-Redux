import React, { Component } from 'react'
import Table from './utils/Table/Table.component'
import withSpinner from './utils/hoc_loader/loader.component'
import { connect } from 'react-redux'

const HOCTable = withSpinner(Table)

class Leads extends Component {
  render() {
    const { isLoading } = this.props
    return (
      <>
        <HOCTable isLoading={isLoading} />
      </>
    )
  }
}

const mapStateToProp = (state) => ({
  isLoading: state.lead.leadList.isListFetching,
})

export default connect(mapStateToProp)(Leads)
