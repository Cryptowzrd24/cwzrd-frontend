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
      <Box sx={{ mt: '48px' }}>
        <HeroContent />
      </Box>
      <Box sx={{ mt: '16px' }}>
        <Stats />
      </Box>
      <Box sx={{ mt: '16px' }}>
        <Table />
      </Box>
      <Box sx={{ mt: '32px' }}>
        <Card />
      </Box>
      <Box sx={{ mt: '48px' }}>
        <NewsLetterBanner />
      </Box>
      <Box sx={{ mt: '48px' }}>
        <NewsLetter />
      </Box>
      <Box sx={{ mt: '48px' }}>
        <Technicals />
      </Box>
      <Box sx={{ mt: '48px', mb: '48px' }}>
        <MemberShipBanner />
      </Box>
    </Container>
  );
}

export default AirDrops;
