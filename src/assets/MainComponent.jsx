import React from 'react'
import { Container, Card, CardContent, Typography, TextField, Button } from '@mui/material'


function MainComponent() {
  return (
    <Container maxWidth="sm" sx={{ flex: 1, mt: 4 }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center',gap:'15px'}}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              TO-DO List
            </Typography>
            <TextField id="filled-basic" label="Enter your task" variant="filled" />
            <Button variant="contained" color="primary">Click Me</Button>
          </CardContent>
        </Card>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems:'center',gap:'15px'}}>
            <Typography variant="h5" sx={{ mb: 2 }}>
            {/* TASK YHA LIKHA HUA AYEGA */}
            </Typography>
          </CardContent>
        </Card>
      </Container>
  )
}

export default MainComponent
