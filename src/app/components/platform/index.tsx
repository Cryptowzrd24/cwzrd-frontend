import { Box, Container } from '@mui/material';
import React from 'react';
import PlatformHeader from './header';
import TradingPlatform from './trading';
import Feature from './feature';
import PlatformCards from './platform-cards';
import TradeOpportunities from './trade-opportunities';
import MemberShipBanner from '../banners/memberShipBanner';
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
import header from '../../../../public/images/platform/header.png';
import Macbook from '../../../../public/images/platform/MacBook.png';

import './index.scss';
import Forex from './forex-cryptocurrencies';

const Platform = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '100px' }}>
          <PlatformHeader />
        </Box>
      </Container>
      <Image
        src={header}
        alt="header"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Container maxWidth="xl">
        <Box sx={{ mb: '30px' }}>
          <TradeOpportunities />
        </Box>
        <Box sx={{ mb: '72px' }}>
          <RealWins />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <TradingPlatform />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <PlatformCards />
        </Box>
        <Box sx={{ mb: '150px' }}>
          <MemberShipBanner />
        </Box>
        <Box sx={{ mb: '150px' }}>
          <Feature />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <Education />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <ExaminationPart />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <Coverage />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <Portfolio />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <ProgressCards />
        </Box>
        <Box sx={{ mb: '150px' }}>
          <JoinedPeople />
        </Box>
      </Container>
      <Box
        sx={{
          mb: '150px',
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
        <Box sx={{ mb: '30px' }}>
          <PersonalCalendar />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <RealTimeMarketData />
        </Box>
        <Box sx={{ mb: '150px' }}>
          <CoverageCards />
        </Box>
        <Box sx={{ mb: '150px' }}>
          <FrequentlyAskedQuestion />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
