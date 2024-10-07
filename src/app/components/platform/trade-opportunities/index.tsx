import { Box } from '@mui/material';
import React from 'react';
import TradeHeader from './tradeHeader';
import TradeCards from './tradeCards';

const TradeOpportunities = () => {
  return (
    <>
      <Box sx={{ marginTop: '100px' }}>
        <TradeHeader />
      </Box>
      <Box>
        <TradeCards />
      </Box>
    </>
  );
};

export default TradeOpportunities;
