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
import CoinDetailsCard from './coin-details-cards';

const CoinDetails = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px', mb: '16px' }}>
          <CoinHeroSection />
        </Box>
        <Box sx={{ mb: '16px' }}>
          <CoinNavbar />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinDetailsCard />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinInfo />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinMarket />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Technicals />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Converter />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <NewsLetterBanner />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <BitcoinAnalytics />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinAnalytics />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default CoinDetails;
