import React from 'react';
import InfoCard from './infoCard';
import LinksCard from './linksCard';
import { Box } from '@mui/material';

const PriceCards = () => {
  return (
    <>
      <Box sx={{ mb: '12px' }}>
        <InfoCard />
      </Box>
      <Box sx={{ mb: '12px' }}>
        <LinksCard />
      </Box>
    </>
  );
};

export default PriceCards;
