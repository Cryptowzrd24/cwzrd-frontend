import { Box } from '@mui/material';
import React from 'react';
import Title from './title';
import BitcoinCard from './cards';

const BitcoinAnalytics = () => {
  return (
    <>
      <Box sx={{ mt: '80px', mb: '40px' }}>
        <Title />
      </Box>
      <Box sx={{ mt: '80px', mb: '40px', display: 'flex', gap: '30px' }}>
        <BitcoinCard />
      </Box>
    </>
  );
};

export default BitcoinAnalytics;
