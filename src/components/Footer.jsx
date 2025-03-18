import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            '&:hover': {
              color: 'primary.main',
              transition: 'color 0.3s ease-in-out',
            },
          }}
        >
          www.lacasadelosdjs.com
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;