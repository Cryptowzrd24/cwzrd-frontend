'use client';
import { Box, Container, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import PlatformHeader from './header';
import TradingPlatform from './trading';
import Feature from './feature';
import PlatformCards from './platform-cards';
import TradeOpportunities from './trade-opportunities';
import MemberShipBannerLarge from '../banners/memberShipBanner';
import RealWins from './real-wins';
import Education from './education';
import ExaminationPart from './examination';
import Coverage from './coverage';
import Portfolio from './portfolio-investing';
import JoinedPeople from './joined-people-banner';
import PersonalCalendar from './personal-calendar';
import RealTimeMarketData from './real-time-market-data';
import CoverageCards from './coverage-cards';
import Image from 'next/image';
import FrequentlyAskedQuestion from './frequently-question';
import ProgressCards from './progress-cards';
// import header from '../../../../public/images/platform/header.png';
import platformHeader from '../../../../public/images/platform/platformHeaderImg.png';

// import Macbook from '../../../../public/images/platform/MacBook.png';
import forexImg from '../../../../public/images/platform/forexImg.png';

import Forex from './forex-cryptocurrencies';
import MemberShipBanner from './membership-banner';

const Platform = () => {
  const isTabView = useMediaQuery('(min-width: 978px)');
  const isDesktopView = useMediaQuery('(min-width: 1025px)');
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          '@media (max-width: 576px)': {
            paddingInline: '16px !important',
          },
        }}
      >
        <Box sx={{ mt: '64px' }}>
          <PlatformHeader />
        </Box>
      </Container>
      <Image
        src={platformHeader}
        alt="header"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Container
        maxWidth="xl"
        sx={{
          '@media (max-width: 576px)': {
            paddingInline: '16px !important',
          },
        }}
      >
        <Box sx={{ mb: '24px' }}>
          <TradeOpportunities />
        </Box>
        <Box
          sx={{
            mb: '24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <RealWins />
        </Box>
        <Box
          sx={{
            mt: isTabView ? '100px' : '24px',
            mb: '24px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TradingPlatform />
        </Box>
        <Box sx={{ maxWidth: '1060px', mb: '24px', mx: 'auto' }}>
          <PlatformCards />
        </Box>
        <Box
          sx={{
            mx: 'auto',
            mb: isTabView ? '100px' : '24px',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1060px',
          }}
        >
          <MemberShipBanner />
        </Box>
        <Box sx={{ mb: '24px' }}>
          <Feature />
        </Box>
        <Box sx={{ mt: isTabView ? '76px' : '24px', mb: '24px' }}>
          <Education />
        </Box>
        <Box sx={{ mb: '24px' }}>
          <ExaminationPart />
        </Box>
        <Box sx={{ mb: '24px', display: 'flex', justifyContent: 'center' }}>
          <Coverage />
        </Box>
        <Box
          sx={{
            mb: '24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Portfolio />
        </Box>
        <Box sx={{ mb: '24px' }}>
          <ProgressCards />
        </Box>
        <Box sx={{ mb: '24px', display: 'flex', justifyContent: 'center' }}>
          <JoinedPeople />
        </Box>
      </Container>
      <Box
        sx={{
          mt: isTabView ? '100px' : '24px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',

          '@media (max-width: 1024px)': {
            paddingInline: '40px',
          },

          '@media (max-width: 599px)': {
            paddingInline: '20px',
          },

          '@media (max-width: 576px)': {
            paddingInline: '5px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '56px',

            '@media (max-width: 1024px)': {
              gap: '28px',
              width: '100%',
              background: 'white',
              borderRadius: '24px',
              flexDirection: 'column',
              padding: '36px 0 16px 16px',
            },
          }}
        >
          <Forex />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <Image
              src={forexImg}
              alt="macbook"
              style={{
                width: isDesktopView ? '45%' : '70%',
                height: 'auto',
                flex: isDesktopView ? 1 : 0,
              }}
            />
          </Box>
        </Box>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          '@media (max-width: 576px)': {
            paddingInline: '16px !important',
          },
        }}
      >
        <Box sx={{ mt: isTabView ? '100px' : '24px' }}>
          <PersonalCalendar />
        </Box>
        {isTabView && (
          <Box
            sx={{
              mt: '24px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <RealTimeMarketData />
          </Box>
        )}
        <Box sx={{ mt: '24px' }}>
          <CoverageCards />
        </Box>
        <Box sx={{ mt: isTabView ? '100px' : '24px' }}>
          <FrequentlyAskedQuestion />
        </Box>
        <Box sx={{ mt: isTabView ? '100px' : '24px', mb: '24px' }}>
          <MemberShipBannerLarge />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
