import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import RadioIcon from '@mui/icons-material/Radio';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

const Radio = () => {
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
            Radio Online
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Paper
                component={motion.div}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #1e1e1e 30%, #2d2d2d 90%)',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(255,23,68,0.1) 0%, rgba(255,23,68,0) 70%)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  <RadioIcon
                    sx={{
                      fontSize: 60,
                      color: 'primary.main',
                      filter: 'drop-shadow(0 0 10px rgba(255,23,68,0.5))',
                    }}
                  />
                </Box>

                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Orbitron' }}>
                  Transmisión en Pausa
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    my: 4,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <GraphicEqIcon
                      sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        opacity: 0.7,
                      }}
                    />
                  </motion.div>
                </Box>

                <Typography variant="body1" color="text.secondary" paragraph>
                  La radio está temporalmente en pausa mientras trabajamos en una nueva experiencia musical.
                  Pronto volveremos con transmisiones en vivo y contenido exclusivo.
                </Typography>

                <Typography variant="h6" color="primary.main" sx={{ mt: 4, fontFamily: 'Orbitron' }}>
                  Mantente conectado
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Radio;