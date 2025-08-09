'use client';

import { Box, Container, styled } from '@mui/material';
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

  const CenteredBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
  });
  return (
    <ResponsiveProvider
      responsiveConfig={responsiveConfigs.heroCards}
      overrideResponsive={true}
    >
      <Box
        sx={{
          background: '#EDF0FF'
        }}
      >
        <Box sx={{
          margin: '0 auto',
          overflow: 'hidden',
          width: { xs: '100%', sm: '95%', md: '900px', lg: "1150px",xl:"1281px" },
          boxSizing:'border-box',
          padding: {xs:"12px",md:'12px',lg:'14px',xl:'16px'},
        }}>

          {/* Hero section */}
          <CenteredBox>
            <CryptoHero />
          </CenteredBox>

          {/* Market Summary section */}
          <CenteredBox>
            <MarketSummary />
          </CenteredBox>

          {/* Top Crypto and Gainer */}
          <CenteredBox>
            <CryptoGainer />
          </CenteredBox>

          {/* Crypto Article section */}
          <CenteredBox>
            <CryptoArticle />
          </CenteredBox>

          {/* Trending Crypto section */}
          <CenteredBox>
            <TrendingCrypto
              tabSelected={tabSelected}
              handleCurrencyChange={handleCurrencyChange}
            />
          </CenteredBox>
        </Box>
        {/* Community Hero section */}
        <CommunityHero />
        <Box sx={{
          background: '#EDF0FF',
          margin: '0 auto',
          overflowX: 'hidden',
          width: { xs: '100%', sm: '95%', md: '900px', lg: "1150px",xl:"1281px" },
          boxSizing:'border-box',
          padding: {xs:"12px",md:'12px',lg:'14px',xl:'16px'},
        }}
        >
          {/* Benefits section */}
          <CenteredBox>
            <BenefitsSection />
          </CenteredBox>
        </Box>
        {/* CTA section */}
        <CTA />
      </Box>
    </ResponsiveProvider>
  );
};

export default Home;
