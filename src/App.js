import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import About from './pages/About';
import Publications from './pages/Publications'; // ⬅️ new import
import Footer from './components/Footer/Footer';
import './App.css';

import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/portfolio" exact element={<Home />} />
                        <Route path="/about" exact element={<About />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/publications" exact element={<Publications />} /> {/* 🔄 Replaced Blogs */}
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path="/about" exact element={<About />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
