import { Box } from '@mui/material';
import React from 'react';
import PortfolioTracker from './PortfolioTracker';
import RealTimeData from './RealTimeData';

const Trades = () => {
  return (
    <Box
      sx={{
        width: '972px',
        height: '353px',
        display: 'flex',
        gap: '21px',
      }}
    >
      <PortfolioTracker />
      <RealTimeData />
    </Box>
  );
};

export default Trades;
