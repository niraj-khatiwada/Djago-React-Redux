import React from 'react'
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Wrapper } from './Table.styles'

export default function Table() {
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <MaterialTable aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <TableRow>
              <TableCell component="th" scope="row"></TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </Wrapper>
  )
}
