import { Box, Container } from '@mui/material';
import React from 'react';
import HeroSection from './heroSection';
import HeroCard from './heroCard';
import Layers from './layers';

const AirdropsMain = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '80px' }}>
          <HeroSection />
        </Box>
        <Box sx={{ mt: '80px' }}>
          <HeroCard />
        </Box>
        <Box sx={{ mt: '80px', mb: '80px' }}>
          <Layers />
        </Box>
      </Container>
    </>
  );
};

export default AirdropsMain;
