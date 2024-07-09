import { Box, Container } from '@mui/material';
import React from 'react';
import CoinHeroSection from './coinHeroSection';
import CoinNavbar from './coinNavbar';
import CoinInfo from './coinInfo';
import CoinMarket from './coin-market';
import CoinAnalytics from './coin-analytics';
import BitcoinAnalytics from './bitcoin-analytics';
import Converter from './converter';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import NewsLetterBanner from '../banners/newsLetterBanner';
import MemberShipBanner from '../banners/memberShipBanner';

const CoinDetails = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '80px', mb: '48px' }}>
          <CoinHeroSection />
        </Box>
        <Box sx={{ mb: '80px' }}>
          <CoinNavbar />
        </Box>
        <Box sx={{ mb: '90px' }}>
          <CoinInfo />
        </Box>
        <Box sx={{ mb: '54px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mb: '80px' }}>
          <CoinMarket />
        </Box>
        <Box sx={{ mb: '140px' }}>
          <Technicals />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <Converter />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <NewsLetterBanner />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <CoinAnalytics />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <BitcoinAnalytics />
        </Box>
        <Box sx={{ mb: '180px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default CoinDetails;
