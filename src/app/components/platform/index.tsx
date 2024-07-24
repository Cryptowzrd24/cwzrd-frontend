import { Box, Container } from '@mui/material';
import React from 'react';
import PlatformHeader from './header';
import TradingPlatform from './trading';
import Feature from './feature';
import PlatformCards from './platform-cards';
import TradeOpportunities from './trade-opportunities';

const Platform = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '48px', mb: '150px' }}>
          <PlatformHeader />
        </Box>
        <Box sx={{  mb: '48px' }}>
          <TradeOpportunities />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <TradingPlatform />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Feature />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <PlatformCards />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
