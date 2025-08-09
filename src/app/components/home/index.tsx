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
            margin:'0 auto',
            overflow: 'hidden',
            width: { xs: '90%', sm: '90%', md: '90%', lg: '1062px' },
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
      <Box sx={{ background: '#EDF0FF' }}>

        <Container
          maxWidth="xl"
          sx={{
            margin:'0 auto',
            overflowX: 'hidden',
            width: { xs: '90%', sm: '90%', md: '90%', lg: '1062px' },
          }}
        >
          {/* Benefits section */}
          <BenefitsSection />
        </Container>
      </Box>
      {/* CTA section */}
      <CTA />
    </ResponsiveProvider>
  );
};

export default Home;
