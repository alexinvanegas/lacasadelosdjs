import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Components will be imported here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History.jsx';
import Gallery from './pages/Gallery';
import Competitions from './pages/Competitions';
import Radio from './pages/Radio';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/radio" element={<Radio />} />
          </Routes>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;