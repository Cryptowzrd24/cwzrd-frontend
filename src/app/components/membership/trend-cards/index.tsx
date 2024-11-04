import { Box } from '@mui/material';
import React from 'react';
import MarketTrend from './MarketTrend';
import WzrdStrategies from './WzrdStrategies';

const TrendCards = () => {
  return (
    <Box
      sx={{
        borderRadius: '24px',
        width: '972px',
        height: '353px',
        display: 'flex',
        gap: '26px',
      }}
    >
      <MarketTrend />
      <WzrdStrategies />
    </Box>
  );
};

export default TrendCards;
