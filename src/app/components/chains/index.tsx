import { Container, Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import Hero from '../hero-section/hero';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';
import Table from '@/app/components/chains/table';

const Chains = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
          <Hero />
          <HeroContent />
        </Box>
        <Box sx={{ mt: '16px' }}>
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
    </>
  );
};

export default Chains;
