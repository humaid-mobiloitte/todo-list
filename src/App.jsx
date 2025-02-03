import React from 'react';
import { Typography, Card, CardContent, Button, Container, Box, CssBaseline,TextField } from '@mui/material';
import AppBarComponent from './assets/TopBar';
import Footer from './assets/Footer';
import MainComponent from './assets/MainComponent';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Navbar */}
      <AppBarComponent/>

      {/* Main Content */}
      <MainComponent/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
