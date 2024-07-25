import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
const TradeSignalCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: '24px',
          backgroundImage:
            ' linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
          borderRadius: '24px',
          maxWidth: '183px',
          width: '100%',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '20.8px',
              letterSpacing: '2px',
              maxWidth: '165px',
              mb: '48px',
            }}
          >
            Trade Signals{' '}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '64px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '70.4px',
              letterSpacing: '1px',
              maxWidth: '165px',
            }}
          >
            95%
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '23.4px',
              letterSpacing: '1px',
              maxWidth: '165px',
            }}
          >
            Win Rate
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default TradeSignalCard;
