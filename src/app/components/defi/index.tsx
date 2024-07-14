import { Container, Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import Hero from '../hero-section/hero';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';
import Table from './table';
import Stats from '../stats';

const Defi = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
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
    </>
  );
};

export default Defi;
