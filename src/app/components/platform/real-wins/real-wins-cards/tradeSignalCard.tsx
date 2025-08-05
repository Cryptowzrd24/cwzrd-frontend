import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
const TradeSignalCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: '18px',
          boxSizing:'border-box',
          backgroundImage:
            ' linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
          borderRadius: '24px',
          height:'100%',
        }}
      >
        <Stack sx={{
          height:'100%',
          justifyContent:'space-between',
        }}>
          <Typography
            sx={{
              fontSize: '10px !important',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '13px',
              letterSpacing: '2px',
              maxWidth: '165px',
              mb: '36px',
              textTransform: 'uppercase',
            }}
          >
            Trade Signals{' '}
          </Typography>
          <Stack>
          <Typography
            sx={{
              fontSize: '48px !important',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '52.8px',
              letterSpacing: '1px',
              maxWidth: '165px',
            }}
          >
            95%
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '13.5px',
              fontWeight: '500',
              color: '#FFFFFFCC',
              lineHeight: '17.55px',
              letterSpacing: '1px',
              maxWidth: '165px',
            }}
          >
            Win Rate
          </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TradeSignalCard;
