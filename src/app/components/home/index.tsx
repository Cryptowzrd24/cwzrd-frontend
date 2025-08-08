'use client';

import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import CTA from './cta';
import TrendingCrypto from './trendingCrypto';
import CryptoArticle from './cryptoArticle';
import CryptoGainer from './cryptoGainer';
import MarketSummary from './marketSummary';
import CryptoHero from './cryptoHero';
import CommunityHero from './community-hero';
import BenefitsSection from './benefits-section';
import { ResponsiveProvider } from '../common/ReusableCarousel';
import { responsiveConfigs } from '../common/ReusableCarousel/responsiveConfigs';

const Home = () => {
  const [tabSelected, setTabSelected] = useState<'crypto' | 'forex'>('crypto');
  const handleCurrencyChange = (title: 'crypto' | 'forex') => {
    setTabSelected(title);
  };
  
  return (
    <ResponsiveProvider 
      responsiveConfig={responsiveConfigs.heroCards} 
      overrideResponsive={true}
    >
      <Box sx={{ background: '#EDF0FF' }}>
        <Container
          maxWidth="xl"
          sx={{
            '@media (max-width: 1440px)': { paddingInline: '80px !important' },
            '@media (max-width: 1024px)': { paddingInline: '40px !important' },
            '@media (max-width: 768px)': { paddingInline: '24px !important' },
            '@media (max-width: 576px)': { paddingInline: '16px !important' },
          }}
        >
          {/* Hero section */}
          <CryptoHero />

          {/* Market Summary section */}
          <MarketSummary />

          {/* Top Crypto and Gainer */}
          <CryptoGainer />

          {/* Crypto Article section */}
          <CryptoArticle />

          {/* Trending Crypto section */}
          <TrendingCrypto
            tabSelected={tabSelected}
            handleCurrencyChange={handleCurrencyChange}
          />
        </Container>
      </Box>

      {/* Community Hero section */}
      <CommunityHero />

      {/* Benefits section */}
      <BenefitsSection />

      {/* CTA section */}
      <CTA />
    </ResponsiveProvider>
  );
};

export default Home;
