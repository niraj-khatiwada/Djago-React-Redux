import React, { Component } from 'react'
import Table from './utils/Table/Table.component'
import LoaderWrapper from './utils/hoc_loader/loader.component'
import { connect } from 'react-redux'

const HOCTable = LoaderWrapper(Table)

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
  isLoading: state.leads.isFetching,
})

export default connect(mapStateToProp)(Leads)
