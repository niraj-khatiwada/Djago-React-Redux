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

import { selectListArray } from '../../../redux/reducers/leads/leads.selectors'
import { axiosFetchDeleteAsync } from '../../../redux/reducers/leads/leads.action'

function Table({ listArray, axiosDelete }) {
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <MaterialTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>S.N</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Options</TableCell>
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
                <TableCell>
                  <IconButton>
                    <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton onClick={() => axiosDelete(item.id)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </TableCell>
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
