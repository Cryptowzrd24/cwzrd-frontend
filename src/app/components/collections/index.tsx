import { Container, Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';
import CardContent from './cardContent';
import CollectionBanner from './banner';
import Table from '@/app/components/collections/table';

const Collections = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
          <HeroContent />
        </Box>
        <Box sx={{ mt: '16px' }}>
          <Table />
        </Box>
        <Box sx={{ mt: '48px' }}>
          <CollectionBanner />
        </Box>
        <Box sx={{ mt: '48px' }}>
          <CardContent />
        </Box>
        {/* <Box sx={{ mt: '80px' }}>
          <NotableCardContent />
        </Box> */}
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

export default Collections;
