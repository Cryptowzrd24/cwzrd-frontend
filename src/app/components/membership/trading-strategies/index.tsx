import { Box } from '@mui/material';
import React from 'react';
import TradeTracker from './TradeTracker';
import WzrdExaminations from './WzrdExaminations';

const TradingStrategies = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '26px',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <TradeTracker />
      <WzrdExaminations />
    </Box>
  );
};

export default TradingStrategies;
