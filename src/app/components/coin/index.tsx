import React from 'react';
import Hero from '../hero-section/hero';
import { Box, Container } from '@mui/material';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import NewsLetterBanner from '../banners/newsLetterBanner';
import MemberShipBanner from '../banners/memberShipBanner';
import HeroContent from './heroContent';
import Stats from '@/app/components/stats';
import Table from './table';

function Coin() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        '@media (max-width: 1520px)': { paddingInline: '20px !important' },
        '@media (max-width: 599px)': { paddingInline: '16px !important' },
      }}
    >
      <Box sx={{ mt: '48px', '@media (max-width: 577px)': { mt: '32px' } }}>
        <Hero />
        <HeroContent />
        <Stats />
      </Box>
      <Box sx={{ mt: '16px' }}>
        <Table />
      </Box>
      <Box sx={{ mt: '48px' }}>
        <NewsLetterBanner />
      </Box>
      <Box sx={{ mt: '48px' }} className="news-letter-container">
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

export default Coin;
