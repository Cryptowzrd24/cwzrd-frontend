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
        <Box sx={{ mt: '60px' }}>
          <HeroSection />
        </Box>
        <Box sx={{ mt: '40px' }}>
          <HeroCard />
        </Box>
        <Box sx={{ mt: '40px' }}>
          <Layers />
        </Box>

        <Box sx={{ mt: '120px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mt: '108px' }}>
          <Technicals />
        </Box>

        <Box sx={{ mt: '160px', mb: '120px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default AirdropsMain;
