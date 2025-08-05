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
          gap: '52.5px',
          boxSizing: 'border-box',
          height: '321px',
          '@media (max-width: 1024px)': {
            padding: '22px',
            gap: '16px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
          },
          '@media (max-width: 576px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: '342px',
            '@media (max-width: 1024px)': {
              width: '100%',
            },
          }}
        >
          <Text />
        </Box>
        <Box
          sx={{
            width: '500px',
            '@media (max-width: 1024px)': {
              width: '100%',
            },
          }}
        >
          <RealWinsCard />
        </Box>
      </Box>
    </>
  );
};

export default RealWins;
