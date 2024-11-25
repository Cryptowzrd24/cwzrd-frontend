import { Box } from '@mui/material';
import React from 'react';
import PortfolioTracker from './PortfolioTracker';
import RealTimeData from './RealTimeData';

const Trades = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '21px',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <PortfolioTracker />
      <RealTimeData />
    </Box>
  );
};

export default Trades;
