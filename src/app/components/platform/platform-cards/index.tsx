import { Box } from '@mui/material';
import React from 'react';
import TradeManagement from './tradeManagement';
import MileStones from './mileStones';
import WzrdStrategy from './wzrdStrategy';

const PlatformCards = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <TradeManagement />
        <MileStones />
        <WzrdStrategy />
      </Box>
    </>
  );
};

export default PlatformCards;
