'use client';
import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';

import FeatureText from './feature-text';
import MembershipCards from './membership-cards';
import ForexAnalysis from './forex-analysis';
import StockAnalysis from './stock-analysis';
import FrequentlyAskedQuestion from '../platform/frequently-question';
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

const Membership = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box sx={{ mt: '64px', mb: '40px' }}>
            <FeatureText />
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
          backgroundImage: `linear-gradient(270deg, rgba(245, 245, 247, 0.00) 25%, #F5F5F7 65%, #F5F5F7 95%, rgba(245, 245, 247, 0.00) 100%), url('/images/membership/featuresBg.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ pt: '76px', mb: '40px' }}>
              {/* Same component is being used as above */}
              <FeatureText />
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
          backgroundImage: `linear-gradient(270deg, rgba(245, 245, 247, 0.00) 25%, #F5F5F7 65%, #F5F5F7 95%, rgba(245, 245, 247, 0.00) 100%), url('/images/membership/featuresBg.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '30px',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
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

            <Box sx={{ mb: '60px' }}>
              <Trades />
            </Box>

            <Box sx={{ mb: '76px' }}>
              <FrequentlyAskedQuestion />
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
