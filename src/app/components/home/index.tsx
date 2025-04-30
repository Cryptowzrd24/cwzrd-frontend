'use client';

import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import CTA from './cta';
import FAQ from './faq';
import TrendingCrypto from './trendingCrypto';
import CryptoArticle from './cryptoArticle';
import CryptoGainer from './cryptoGainer';
import MarketSummary from './marketSummary';
import CryptoHero from './cryptoHero';

const Home = () => {
  const [tabSelected, setTabSelected] = useState<'crypto' | 'forex'>('crypto');
  const handleCurrencyChange = (title: 'crypto' | 'forex') => {
    setTabSelected(title);
  };
  return (
    <>
      <Box sx={{ background: '#EDF0FF' }}>
        <Container
          maxWidth="xl"
          sx={{
            '@media (max-width: 1440px)': { paddingInline: '20px !important' },
            '@media (max-width: 599px)': { paddingInline: '16px !important' },
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

      {/* FAQ section */}
      <FAQ />
      {/* {/* CTA section */}
      <CTA />
    </>
  );
};

export default Home;
