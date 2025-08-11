import React from 'react';
import { Box } from '@mui/material';
import PriceCard from './priceCard';
import InfoCard from './infoCard';
import HistoricalCard from './historicalCard';

const CoinCards = ({ coinDetails }: any) => {
  return (
    <>
      <Box sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}>
        <PriceCard coinDetails={coinDetails} />
      </Box>
      <Box sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}>
        <InfoCard coinDetails={coinDetails} />
      </Box>
      <Box sx={{ mb: '8px', width: '100%', height: 'auto', overflow: 'hidden' }}>
        <HistoricalCard coinDetails={coinDetails} />
      </Box>
    </>
  );
};

export default CoinCards;
