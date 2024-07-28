import React from 'react';
import { Box } from '@mui/material';
import PriceCard from './priceCard';
import InfoCard from './infoCard';
import HistoricalCard from './historicalCard';

const CoinCards = ({ coinDetails }: any) => {
  return (
    <>
      <Box sx={{ mb: '8px' }}>
        <PriceCard coinDetails={coinDetails} />
      </Box>
      <Box sx={{ mb: '8px' }}>
        <InfoCard coinDetails={coinDetails} />
      </Box>
      <Box sx={{ mb: '8px' }}>
        <HistoricalCard coinDetails={coinDetails} />
      </Box>
    </>
  );
};

export default CoinCards;
