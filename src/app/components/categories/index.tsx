import { Container, Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import Hero from '../hero-section/hero';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';

const Categories = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '80px' }}>
          <Hero />
          <HeroContent />
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

export default Categories;
