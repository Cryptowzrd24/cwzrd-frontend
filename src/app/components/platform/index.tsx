import { Box, Container } from '@mui/material';
import React from 'react';
import PlatformHeader from './header';
import TradingPlatform from './trading';

const Platform = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '48px', mb: '48px' }}>
          <PlatformHeader />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <TradingPlatform />
        </Box>
      </Container>
    </>
  );
};

export default Platform;
