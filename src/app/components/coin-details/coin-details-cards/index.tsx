import { Box } from '@mui/material';
import React from 'react';
import CoinCards from './coin-cards';

const CoinDetailsCard = ({ coinDetails }: any) => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <CoinCards coinDetails={coinDetails} />
      </Box>
    </>
  );
};

export default CoinDetailsCard;
