import { Box } from '@mui/material';
import React from 'react';
import MarketTrend from './MarketTrend';
import WzrdStrategies from './WzrdStrategies';

const TrendCards = () => {
  return (
    <Box
      sx={{
        borderRadius: '24px',
        display: 'flex',
        gap: '26px',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <MarketTrend />
      <WzrdStrategies />
    </Box>
  );
};

export default TrendCards;
