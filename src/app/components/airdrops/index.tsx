import React from 'react';
import { Box, Container } from '@mui/material';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import NewsLetterBanner from '../banners/newsLetterBanner';
import MemberShipBanner from '../banners/memberShipBanner';
import HeroContent from './heroContent';
import Stats from '@/app/components/stats';
import Table from '@/app/components/airdrops/table';
import Card from './cards';

function AirDrops() {
  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Box sx={{ mt: '80px' }}>
        <HeroContent />
        <Stats />
      </Box>
      <Box sx={{ mt: '40px' }}>
        <Table />
      </Box>
      <Box sx={{ mt: '40px' }}>
        <Card />
      </Box>
      <Box sx={{ mt: '120px' }}>
        <NewsLetterBanner />
      </Box>
      <Box sx={{ mt: '120px' }}>
        <NewsLetter />
      </Box>
      <Box sx={{ mt: '90px' }}>
        <Technicals />
      </Box>

      <Box sx={{ mt: '180px', mb: '120px' }}>
        <MemberShipBanner />
      </Box>
    </Container>
  );
}

export default AirDrops;
