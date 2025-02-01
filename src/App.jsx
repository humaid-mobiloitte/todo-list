import React from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Button, Container, Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My MUI App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ flex: 1, mt: 4 }}>
        <Card sx={{ backgroundColor: '#f5f5f5', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Welcome to MUI
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This is a simple card with basic Material UI components.
            </Typography>
            <Button variant="contained" color="primary">Click Me</Button>
          </CardContent>
        </Card>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2, textAlign: 'center' }}>
        <Typography variant="body2">© 2025 My MUI App</Typography>
      </Box>
    </div>
  );
}

export default App;
