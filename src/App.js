import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import About from './pages/About';
import Publications from './pages/Publications';
import Footer from './components/Footer/Footer';
import './App.css';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#57d8ff' },
    secondary: { main: '#ffbf69' },
    background: { default: '#07111f', paper: '#0d1b2b' },
    text: { primary: '#f4f8fc', secondary: '#9eb1c5' },
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box className="app-shell">
          <NavBar />
          <Container component="main" maxWidth="xl" className="page-shell">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
