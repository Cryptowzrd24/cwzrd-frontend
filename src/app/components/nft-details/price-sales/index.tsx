import { Box } from '@mui/material';
import React from 'react';
import PriceCards from './price-cards';

const PriceSales = ({ serverNftData }: any) => {
  return (
    <>
      <Box sx={{ mb: '80px' }}>
        <PriceCards serverNftData={serverNftData} />
      </Box>
    </>
  );
};

export default PriceSales;
