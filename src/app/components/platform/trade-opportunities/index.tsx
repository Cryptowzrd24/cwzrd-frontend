import { Box } from '@mui/material';
import React from 'react';
import TradeHeader from './tradeHeader';
import TradeCards from './tradeCards';

const TradeOpportunities = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ '@media (max-width: 978px)': { width: '100%' } }}>
        <TradeHeader />
      </Box>
      <Box sx={{ width: '100%' }}>
        <TradeCards />
      </Box>
    </Box>
  );
};

export default TradeOpportunities;
