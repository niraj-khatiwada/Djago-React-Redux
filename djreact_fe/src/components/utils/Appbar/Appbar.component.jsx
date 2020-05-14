import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import { CustomAppBar, CustomButton } from './Appbar.styles'

export default function Appbar() {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Leads</Typography>
        <CustomButton component={Link} to="/post">
          Post
        </CustomButton>
      </Toolbar>
    </CustomAppBar>
  )
}
