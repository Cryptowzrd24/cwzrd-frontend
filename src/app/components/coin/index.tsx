import React from 'react';
import Hero from '../hero-section/hero';
import { Box, Container } from '@mui/material';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import NewsLetterBanner from '../banners/newsLetterBanner';
import MemberShipBanner from '../banners/memberShipBanner';
import HeroContent from './heroContent';
import Stats from '@/app/components/stats';
import Table from '@/app/components/coin/table';

function Coin() {
  return (
    <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
      <Box sx={{ mt: '80px' }}>
        <Hero />
        <HeroContent />
        <Stats />
      </Box>
      <Box sx={{ mt: '40px' }}>
        <Table />
      </Box>
      <Box sx={{ mt: '80px', mb: '80px' }}>
        <NewsLetterBanner />
      </Box>
      <Box sx={{ mt: '80px' }}>
        <NewsLetter />
      </Box>
      <Box sx={{ mt: '80px' }}>
        <Technicals />
      </Box>

      <Box sx={{ mt: '220px', mb: '120px' }}>
        <MemberShipBanner />
      </Box>
    </Container>
  );
}

export default Coin;
