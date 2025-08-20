import { Box } from '@mui/material';
import React from 'react';
import PriceCards from './price-cards';

const PriceSales = ({ serverNftData }: any) => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <PriceCards serverNftData={serverNftData} />
      </Box>
    </>
  );
};

export default PriceSales;
