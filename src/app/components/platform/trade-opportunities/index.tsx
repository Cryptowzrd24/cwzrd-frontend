import { Box } from '@mui/material';
import React from 'react';
import TradeHeader from './tradeHeader';
import TradeCards from './tradeCards';

const TradeOpportunities = () => {
  return (
    <>
      <Box sx={{ mb: '72px' }}>
        <TradeHeader />
      </Box>
      <Box sx={{ mb: '72px' }}>
        <TradeCards />
      </Box>
    </>
  );
};

export default TradeOpportunities;
