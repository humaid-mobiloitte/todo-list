import { AppBar,Toolbar,Typography } from "@mui/material"
import React from 'react'

function AppBarComponent() {
  return (
    <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My TODO List App</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent