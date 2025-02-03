import React from 'react'
import { Box,Typography } from '@mui/material'
function Footer() {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 My TODO List App</Typography>
    </Box>
  )
}

export default Footer
