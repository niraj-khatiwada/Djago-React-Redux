import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { CustomAppBar, CustomButton } from './Appbar.styles'

export default function Appbar() {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Leads</Typography>
        <CustomButton color="inherit">Login</CustomButton>
      </Toolbar>
    </CustomAppBar>
  )
}
