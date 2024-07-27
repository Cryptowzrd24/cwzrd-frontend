import { Box } from '@mui/material';
import React from 'react';
import CoinCards from './coin-cards';

const CoinDetailsCard = ({ coinDetails }: any) => {
  return (
    <>
      <Box sx={{ mb: '80px' }}>
        <CoinCards coinDetails={coinDetails} />
      </Box>
    </>
  );
};

export default CoinDetailsCard;
