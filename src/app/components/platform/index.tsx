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
        <Box sx={{ mb: '72px' }}>
          <Education />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
