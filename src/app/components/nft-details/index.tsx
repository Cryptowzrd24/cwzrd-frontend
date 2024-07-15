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

const NftDetails = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px' }}>
          <HeroSection />
        </Box>
        <Box sx={{ mt: '16px', mb: '16px' }}>
          <NftNavbar />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Info />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Sales />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Market />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Activity />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default NftDetails;
