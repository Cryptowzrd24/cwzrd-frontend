import { Container, Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';
import CardContent from './cardContent';
import NotableCardContent from './notable-collections';
import CollectionBanner from './banner';

const Collections = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '80px' }}>
          <HeroContent />
        </Box>
        <Box sx={{ mt: '80px' }}>
          <CardContent />
        </Box>
        <Box sx={{ mt: '96px' }}>
          <CollectionBanner />
        </Box>
        <Box sx={{ mt: '80px' }}>
          <NotableCardContent />
        </Box>
        <Box sx={{ mt: '80px' }}>
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

export default Collections;
