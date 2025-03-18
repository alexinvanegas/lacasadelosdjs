import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const competitions = [
  {
    title: 'DJ Battle 2005',
    category: 'Mixing',
    description: 'Primera competencia internacional de mezclas en vivo',
    participants: 64,
    prize: 'Equipo profesional de DJ'
  },
  {
    title: 'Producción Original 2007',
    category: 'Producción',
    description: 'Concurso de producción musical original',
    participants: 128,
    prize: 'Software de producción profesional'
  },
  {
    title: 'Mix Marathon 2010',
    category: 'Resistencia',
    description: '24 horas de mezclas continuas',
    participants: 32,
    prize: 'Contrato de residencia virtual'
  },
  {
    title: 'Remix Challenge 2015',
    category: 'Remix',
    description: 'Competencia de remixes de éxitos clásicos',
    participants: 256,
    prize: 'Distribución digital profesional'
  }
];

const Competitions = () => {
  return (
    <Box component="main">
      <Container maxWidth="lg">
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
            Competencias Legendarias
          </Typography>

          <Grid container spacing={4}>
            {competitions.map((competition, index) => (
              <Grid item key={index} xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: 20,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 3,
                      }}
                    >
                      <EmojiEventsIcon />
                    </Box>
                    <CardContent sx={{ pt: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={competition.category}
                          color="primary"
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Chip
                          label={`${competition.participants} participantes`}
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {competition.title}
                      </Typography>
                      <Typography color="text.secondary" paragraph>
                        {competition.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main">
                        Premio: {competition.prize}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Competitions;