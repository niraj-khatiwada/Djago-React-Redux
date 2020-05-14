import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell'

export const Wrapper = styled.div`
  && {
    display: grid;
    grid-template-columns: 0.8fr;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`

export const CustomTableCell = styled(TableCell)`
  width: 6rem;
`
