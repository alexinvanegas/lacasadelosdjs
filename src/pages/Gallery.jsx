import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    title: 'Primeros Días',
    year: '2005',
    description: 'Los inicios de nuestra comunidad en línea',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="225" viewBox="0 0 288 225"%3E%3Crect fill="%23303030" width="288" height="225"/%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle"%3E2005%3C/text%3E%3C/svg%3E'
  },
  {
    title: 'Encuentro Global',
    year: '2007',
    description: 'Primera reunión internacional de DJs',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="225" viewBox="0 0 288 225"%3E%3Crect fill="%23303030" width="288" height="225"/%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle"%3E2007%3C/text%3E%3C/svg%3E'
  },
  {
    title: 'Festival Virtual',
    year: '2010',
    description: 'El mayor evento en línea de la comunidad',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="225" viewBox="0 0 288 225"%3E%3Crect fill="%23303030" width="288" height="225"/%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle"%3E2010%3C/text%3E%3C/svg%3E'
  },
  {
    title: 'Nueva Era Digital',
    year: '2015',
    description: 'Implementación de streaming en alta calidad',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="225" viewBox="0 0 288 225"%3E%3Crect fill="%23303030" width="288" height="225"/%3E%3Ctext fill="rgba(255,255,255,0.5)" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle"%3E2015%3C/text%3E%3C/svg%3E'
  }
];

const Gallery = () => {
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
            Galería de Momentos
          </Typography>

          <Grid container spacing={4}>
            {galleryItems.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.2s ease-in-out',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="225"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {item.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
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

export default Gallery;