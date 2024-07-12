import React from 'react';
import HeroSection from './heroSection';
import { Box, Container } from '@mui/material';
import Info from './info';
import Sales from './sales';
import Market from './market';
import NftNavbar from './nftNavbar';
import NewsLetter from '../news-letter';
import MemberShipBanner from '../banners/memberShipBanner';
import Activity from './activity';
import PriceSales from './price-sales';

const NftDetails = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
          <HeroSection />
        </Box>
        <Box sx={{ mt: '44px', mb: '80px' }}>
          <NftNavbar />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <PriceSales />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <Info />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <Sales />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <Market />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <Activity />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default NftDetails;
