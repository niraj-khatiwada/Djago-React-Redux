import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid'

import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Wrapper } from './Table.styles'

import { selectListArray } from '../../../redux/reducers/leads/leads.selectors'

function Table({ listArray }) {
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <MaterialTable aria-label="customized table">
          <TableHead>
            <TableRow>
              {listArray.map((item) => {
                return Object.keys(item).map((i) => (
                  <TableCell key={uuid()}>{i}</TableCell>
                ))
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {listArray.map((item) => (
              <TableRow key={uuid()}>
                {Object.keys(item).map((i) => (
                  <TableCell key={uuid()}>{item[i]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  listArray: selectListArray(state),
})

export default connect(mapStateToProps, null)(Table)
