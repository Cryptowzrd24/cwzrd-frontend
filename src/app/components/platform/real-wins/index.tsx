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
          justifyContent: 'start',
          padding: '22.5px 22.5px 22.5px 48px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '32px',
          alignItems: 'center',
          maxWidth: '978px',
          width: '100%',
          height: '321px',

          '@media (max-width: 978px)': {
            padding: '22.5px 16px',
            gap: '16px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Text />
        <RealWinsCard />
      </Box>
    </>
  );
};

export default RealWins;
