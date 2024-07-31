import React from 'react';
import { Box } from '@mui/material';
import PriceCard from './priceCard';
import InfoCard from './infoCard';
import HistoricalCard from './historicalCard';

const CoinCards = () => {
  return (
    <>
      <Box sx={{ mb: '8px' }}>
        <PriceCard />
      </Box>
      <Box sx={{ mb: '8px' }}>
        <InfoCard />
      </Box>
      <Box sx={{ mb: '8px' }}>
        <HistoricalCard />
      </Box>
    </>
  );
};

export default CoinCards;
