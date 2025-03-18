import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import HeadsetIcon from '@mui/icons-material/Headset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GroupIcon from '@mui/icons-material/Group';
import RadioIcon from '@mui/icons-material/Radio';
import logoImage from '../assets/logohomedjs.jpg?url';

const featureItems = [
  {
    icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
    title: 'Remix y Creaciones',
    description: 'Un espacio donde los DJs compartían sus mejores mezclas y creaciones originales.'
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    title: 'Comunidad Vibrante',
    description: 'Una comunidad unida de artistas y amantes de la música de toda Latinoamérica y Europa.'
  },
  {
    icon: <RadioIcon sx={{ fontSize: 40 }} />,
    title: 'Radio en Vivo',
    description: 'Transmisiones en vivo que conectaban a DJs y oyentes de todo el mundo.'
  }
];

const Home = () => {
  return (
    <Box component="main">
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{
              fontFamily: 'Orbitron',
              fontWeight: 700,
              textShadow: '0 0 10px rgba(255,23,68,0.3)',
            }}
          >
            La Casa de Los DJs
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Un tributo a la legendaria comunidad que unió a DJs de todo el mundo,
            donde la música y la creatividad no conocían fronteras.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              mb: 4,
              position: 'relative'
            }}
          >
            <Box
              component={motion.img}
              src={new URL(logoImage, import.meta.url).href}
              alt="La Casa de Los DJs Logo"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5
              }}
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 0 30px rgba(255,23,68,0.6)',
                filter: 'brightness(1.1)',
                zIndex: 1,
                '&:hover': {
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(255,23,68,0.8))'
                }
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {featureItems.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: (theme) => `0 0 20px ${theme.palette.primary.main}40`,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;