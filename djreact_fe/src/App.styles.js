import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

export const CustomButton = styled(Button)`
  && {
    margin-left: auto;
    background-color: #004c4c;
  }
`

export const CustomAppBar = styled(AppBar)`
  && {
    background-color: teal;
  }
`
