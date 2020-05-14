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
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { CustomTableCell } from './Table.styles'

import { selectListArray } from '../../../redux/reducers/leads/leads.selectors'
import { axiosFetchDeleteAsync } from '../../../redux/reducers/leads/leads.action'

function Table({ listArray, axiosDelete }) {
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <MaterialTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>S.N</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Message</strong>
              </TableCell>
              <CustomTableCell>
                <strong>Options</strong>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listArray.map((item, index) => (
              <TableRow key={uuid()}>
                <TableCell>{index + 1}</TableCell>
                {Object.keys(item).map((i) => {
                  if (i !== 'id') {
                    return <TableCell key={uuid()}>{item[i]}</TableCell>
                  }
                })}
                <CustomTableCell>
                  <IconButton>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => axiosDelete(item.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </CustomTableCell>
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

const mapDispatchToProps = (dispatch) => ({
  axiosDelete: (pk) => dispatch(axiosFetchDeleteAsync(pk)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
