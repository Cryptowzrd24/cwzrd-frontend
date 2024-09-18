import { Box, Container } from '@mui/material';
import React from 'react';
import HeroSection from './heroSection';
import HeroCard from './heroCard';
import Layers from './layers';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';

const AirdropsMain = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
          <HeroSection />
        </Box>
        <Box sx={{ mt: '25px' }}>
          <HeroCard />
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Layers />
        </Box>

        <Box sx={{ mt: '48px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mt: '48px' }}>
          <Technicals />
        </Box>

        <Box sx={{ mt: '48px', mb: '120px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default AirdropsMain;
