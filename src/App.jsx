import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Button, Container, Box, CssBaseline,TextField } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My TODO List App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
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
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 My TODO List App</Typography>
      </Box>
    </div>
  );
}

export default App;
