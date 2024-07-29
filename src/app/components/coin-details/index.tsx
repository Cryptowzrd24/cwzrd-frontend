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
        <Box id="hero" sx={{ mt: '48px', mb: '16px' }}>
          <CoinHeroSection />
        </Box>
        <Box id="overview" sx={{ mb: '16px' }}>
          <CoinNavbar />
        </Box>
        <Box id="details" sx={{ mb: '48px' }}>
          <CoinDetailsCard />
        </Box>
        <Box id="about" sx={{ mb: '48px' }}>
          <CoinInfo />
        </Box>
        <Box id="news" sx={{ mb: '48px' }}>
          <NewsLetter />
        </Box>
        <Box id="market" sx={{ mb: '48px' }}>
          <CoinMarket />
        </Box>
        <Box id="technicals" sx={{ mb: '48px' }}>
          <Technicals />
        </Box>
        <Box id="converter" sx={{ mb: '48px' }}>
          <Converter />
        </Box>
        <Box id="newsletter-banner" sx={{ mb: '48px' }}>
          <NewsLetterBanner />
        </Box>
        <Box id="analytics" sx={{ mb: '48px' }}>
          <BitcoinAnalytics />
        </Box>
        <Box id="historical" sx={{ mb: '48px' }}>
          <CoinAnalytics />
        </Box>
        <Box id="membership-banner" sx={{ mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default CoinDetails;
