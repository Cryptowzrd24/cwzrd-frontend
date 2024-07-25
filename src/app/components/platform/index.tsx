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
import Forex from './forex-cryptocurrencies';
import Image from 'next/image';
import macbook from '../../../../public/images/platform/MacBook.png';
import PersonalCalendar from './personal-calendar';
import RealTimeMarketData from './real-time-market-data';
const Platform = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '48px', mb: '150px' }}>
          <PlatformHeader />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <TradeOpportunities />
        </Box>
        <Box sx={{ mb: '72px' }}>
          <RealWins />
        </Box>
        <Box sx={{ mb: '72px' }}>
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
          <JoinedPeople />
        </Box>
      </Container>
      <Box
        sx={{
          mb: '150px',
          display: 'flex',
          // justifyContent: 'space-between',
          // alignItems: 'center',
        }}
      >
        <Forex />
        <Box>{/* <Image src={macbook} alt="macbook" width={712} /> */}</Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ mb: '30px' }}>
          <PersonalCalendar />
        </Box>
        <Box sx={{ mb: '30px' }}>
          <RealTimeMarketData />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
