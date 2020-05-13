import React from 'react'
import { Route } from 'react-router-dom'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { CustomButton, CustomAppBar } from './App.styles'

function App() {
  return (
    <>
      <CustomAppBar position="static">
        <Toolbar>
          <Typography variant="h6">Leads</Typography>
          <CustomButton color="inherit">Login</CustomButton>
        </Toolbar>
      </CustomAppBar>
    </>
  )
}

export default App
