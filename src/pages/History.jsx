import React from 'react';
import { Box, Typography, Container, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EventIcon from '@mui/icons-material/Event';

const historyEvents = [
  {
    year: '2005',
    title: 'El Comienzo',
    description: 'La Casa de Los DJs nace como un pequeño foro en línea para DJs latinoamericanos.'
  },
  {
    year: '2007',
    title: 'Expansión Global',
    description: 'La comunidad se expande a Europa, conectando DJs de diferentes continentes.'
  },
  {
    year: '2010',
    title: 'Era Dorada',
    description: 'Alcanza su punto máximo con miles de miembros activos y transmisiones diarias.'
  },
  {
    year: '2015',
    title: 'Innovación Digital',
    description: 'Implementación de nuevas tecnologías para streaming y compartir música.'
  }
];

const History = () => {
  return (
    <Box component="main">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{
              fontFamily: 'Orbitron',
              fontWeight: 700,
              mb: 6,
              textShadow: '0 0 10px rgba(255,23,68,0.3)',
            }}
          >
            Nuestra Historia
          </Typography>

          <Stack spacing={4}>
            {historyEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: index % 2 === 0 ? '-15px' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '-15px',
                      top: '50%',
                      width: '30px',
                      height: '30px',
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'translateY(-50%)'
                    }
                  }}
                >
                  <Box sx={{ ml: index % 2 === 0 ? 2 : 0, mr: index % 2 === 0 ? 0 : 2 }}>
                    <Typography variant="h6" component="h2" color="primary">
                      {event.year}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {event.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default History;