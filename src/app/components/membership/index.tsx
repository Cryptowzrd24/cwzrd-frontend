'use client';
import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';

import TradingText from './trading-text';
import MembershipCards from './membership-cards';
import ForexAnalysis from './forex-analysis';
import StockAnalysis from './stock-analysis';
import CommunityCards from './community-cards';
import Mentorship from './mentorship';
import LearningCards from './learning-cards';
import EducationalGuides from './educational-guides';
import TrendCards from './trend-cards';
import GuidanceCards from './guidance-cards';
import WzrdPlatformText from './wzrd-platform-text';
import TechnicalOutlooks from './technical-outlooks';
import Trades from './trades';
import TradingStrategies from './trading-strategies';
import CoursesPart from './courses-part';
import MembershipCta from './membership-cta';
import MembershipHeroSection from './membership-hero-section';
import EffortlessTrading from './effortless-trading';
import JourneyText from './journey-text/JourneyText';
import FAQSection from './faq-section';

const Membership = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/banner/headerBgMembership.jpg')`,
          objectFit: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-1',
          paddingTop: '180px',
          marginTop: '-120px',
          backgroundPosition: 'center',
          pb: '120px',
        }}
      >
        <Box
          sx={{
            backgroundImage: `url('/images/membership/heroSectionBg.svg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: '60px',
            pb: '120px',
          }}
        >
          <MembershipHeroSection />
        </Box>
      </Box>
      <Box sx={{ mb: '120px' }}>
        <EffortlessTrading />
      </Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: '972px',
            width: '100%',
            mx: 'auto',
          }}
        >
          <Box sx={{ mb: '40px' }}>
            <TradingText />
          </Box>

          <Box sx={{ mb: '24px' }}>
            <ForexAnalysis />
          </Box>

          <Box sx={{ mb: '37px' }}>
            <MembershipCards />
          </Box>

          <Box sx={{ mb: '24px' }}>
            <StockAnalysis />
          </Box>

          <Box sx={{ mb: '40px' }}>
            <CommunityCards />
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage: `url('/images/membership/newFeaturesBg.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: '972px',
              width: '100%',
              mx: 'auto',
            }}
          >
            <Box sx={{ pt: '76px', mb: '40px' }}>
              <JourneyText />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <Mentorship />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <LearningCards />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <EducationalGuides />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <TrendCards />
            </Box>

            <Box sx={{ mb: '80px' }}>
              <GuidanceCards />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url('/images/membership/newFeaturesBg.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '740px',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: '972px',
              width: '100%',
              mx: 'auto',
            }}
          >
            <Box sx={{ mb: '40px' }}>
              <WzrdPlatformText />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <CoursesPart />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <TradingStrategies />
            </Box>

            <Box sx={{ mb: '24px' }}>
              <TechnicalOutlooks />
            </Box>

            <Box sx={{ mb: '80px' }}>
              <Trades />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: '18px',
            background:
              'linear-gradient(90deg, #AACDF7 0%, #AC9FEF 27%, #A367F7 45%, #F57FC4 65.5%, #FBCCA4 100%)',
            filter: 'blur(10px)',
            mb: '64px',
            width: '100%',
          }}
        ></Box>

        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: '972px',
              width: '100%',
              mx: 'auto',
            }}
          >
            <Box sx={{ mb: '120px' }}>
              <FAQSection />
            </Box>
            <Box sx={{ mb: '24px' }}>
              <MembershipCta />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Membership;
