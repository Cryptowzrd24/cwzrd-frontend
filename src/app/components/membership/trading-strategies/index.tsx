import { Box } from '@mui/material';
import React from 'react';
import TradeTracker from './TradeTracker';
import WzrdExaminations from './WzrdExaminations';

const TradingStrategies = () => {
  return (
    <Box
      sx={{
        minHeight: '353px',
        display: 'flex',
        gap: '26px',
      }}
    >
      <TradeTracker />
      <WzrdExaminations />
    </Box>
  );
};

export default TradingStrategies;
