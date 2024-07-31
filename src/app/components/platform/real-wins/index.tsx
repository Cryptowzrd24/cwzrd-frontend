import { Box } from '@mui/material';
import React from 'react';
import Text from './text';
import RealWinsCard from './real-wins-cards';

const RealWins = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px 30px 30px 64px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '32px',
          alignItems: 'center',
        }}
      >
        <Text />
        <RealWinsCard />
      </Box>
    </>
  );
};

export default RealWins;
