import { Box } from '@mui/material';
import React from 'react';
import CoinCards from './coin-cards';

const CoinDetailsCard = () => {
  return (
    <>
      <Box sx={{ mt: '80px', mb: '80px' }}>
        <CoinCards />
      </Box>
    </>
  );
};

export default CoinDetailsCard;
