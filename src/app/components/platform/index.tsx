'use client';
import { Box, Container } from '@mui/material';
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

import Macbook from '../../../../public/images/platform/MacBook.png';

import Forex from './forex-cryptocurrencies';
import MemberShipBanner from './membership-banner';

const Platform = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '64px' }}>
          <PlatformHeader />
        </Box>
      </Container>
      <Image
        src={platformHeader}
        alt="header"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Container maxWidth="xl">
        <Box sx={{ mb: '24px' }}>
          <TradeOpportunities />
        </Box>
        <Box
          sx={{
            mb: '64px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <RealWins />
        </Box>
        <Box
          sx={{
            mt: '100px',
            mb: '30px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TradingPlatform />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <PlatformCards />
        </Box>
        <Box sx={{ mb: '100px', display: 'flex', justifyContent: 'center' }}>
          <MemberShipBanner />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <Feature />
        </Box>
        <Box sx={{ mt: '100px', mb: '30px' }}>
          <Education />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <ExaminationPart />
        </Box>
        <Box sx={{ mb: '30px', display: 'flex', justifyContent: 'center' }}>
          <Coverage />
        </Box>
        <Box sx={{ mb: '30px', display: 'flex', justifyContent: 'center' }}>
          <Portfolio />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <ProgressCards />
        </Box>
        <Box sx={{ mb: '30px', display: 'flex', justifyContent: 'center' }}>
          <JoinedPeople />
        </Box>
      </Container>
      <Box
        sx={{
          mt: '100px',
          // mb: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '56px',
        }}
      >
        <Forex />
        <Image
          src={Macbook}
          alt="macbook"
          style={{
            flex: 1,
            width: '45%',
            height: 'auto',
          }}
        />
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ mt: '100px' }}>
          <PersonalCalendar />
        </Box>
        <Box
          sx={{
            mt: '24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <RealTimeMarketData />
        </Box>
        <Box sx={{ mt: '24px' }}>
          <CoverageCards />
        </Box>
        <Box sx={{ mt: '100px' }}>
          <FrequentlyAskedQuestion />
        </Box>
        <Box sx={{ mt: '100px', mb: '24px' }}>
          <MemberShipBannerLarge />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
